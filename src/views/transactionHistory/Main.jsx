import { useEffect, useRef, createRef, useState } from "react";
import { createIcons, icons } from "lucide";
import Tabulator from "tabulator-tables";
import dom from "@left4code/tw-starter/dist/js/dom";
import xlsx from "xlsx";
import { useSelector, useDispatch } from "react-redux";

import { ReactTabulator, reactFormatter } from "react-tabulator";

import Select from "react-select";
import moment from "moment";

import {
  Lucide,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  Litepicker,
} from "@/base-components";

import {
  getTransactionHistory as onGetTransactionHistory,
  addNewTransactionHistory as onAddNewTransactionHistory,
  updateTransactionHistory as onUpdateTransactionHistory,
  deleteTransactionHistory as onDeleteTransactionHistory,
} from "../../store/actions";
import { escapeRegExp } from "lodash";

function Main() {
  const dispatch = useDispatch();

  const { transactionHistory } = useSelector((state) => ({
    transactionHistory: state.TransactionHistoryReducer.TransactionHistorys,
  }));

  const [getTransactionHistory, setTransactionHistory] = useState([]);
  const [getCurrentPage, setCurrentPage] = useState(1);
  const [getPerPage, setPerPage] = useState({ value: "10", label: "10" });

  const [getOrderId, setOrderId] = useState("");
  const [getPaymentId, setPaymentId] = useState("");
  const [getStatus, setStatus] = useState({ value: "", label: "" });

  const pmidFormatter = function (cell, formatterParams) {
    return moment(cell.getValue()).utc().format("DD-MMM-YYYY");
  };
  // Object.defineProperty(String.prototype, "capitalize", {
  //   value: function () {
  //     return this.charAt(0).toUpperCase() + this.slice(1);
  //   },
  //   enumerable: false,
  // });

  const CapitalizeFormatter = function (cell, formatterParams) {
    var status = cell.getValue()[0].toUpperCase() + cell.getValue().slice(1);

    return status == "Paid"
      ? `<div class ="text-success">
    ${status}</div>`
      : `<div class ="text-danger">
    ${status}</div>`;
    // "<div

    // >
    //   {status}
    // </div>"
    // //{" "}
    // className=${classnames({
    //   "flex items-center justify-center whitespace-nowrap": true,
    //   "text-success": status == "Paid",
    //   "text-danger": status == "Refund",
    // })}
    //   );
  };

  useEffect(() => {
    if (getPerPage.value != transactionHistory.limit) {
      setCurrentPage(1);
      var params = `?perPage=${getPerPage.value}&page=1`;
    } else {
      var params = `?perPage=${getPerPage.value}&page=${getCurrentPage}`;
    }
    // var params = `?perPage=${getPerPage}&page=${getCurrentPage}`;

    if (transactionHistory.hasOwnProperty("message")) {
      console.log("chec", transactionHistory);
    } else if (
      !transactionHistory.hasOwnProperty("docs") ||
      getCurrentPage != transactionHistory.page ||
      getPerPage.value != transactionHistory.limit
    ) {
      dispatch(onGetTransactionHistory(params));
    }

    setTransactionHistory(transactionHistory);
  }, [transactionHistory, getCurrentPage, getPerPage]);

  const [getDateRange, setDateRange] = useState("");
  const tableRef = createRef();
  const tabulator = useRef();
  const [filter, setFilter] = useState({
    field: "name",
    type: "like",
    value: "",
  });

  const options = [
    { value: 10, label: "10" },
    { value: 25, label: "25" },
    { value: 35, label: "35" },
    { value: 50, label: "50" },
  ];

  const currencyCodeFormat = (props) => {
    return `$${props}.00`;
  };

  //  ?userId,status,paymentId

  const handleFilterFunction = () => {
    let param = `?perPage=${getPerPage.value}&page=1`;

    var date = getDateRange.split("-");

    //    param += getOrderId ? `&userId=${getOrderId}` : "";
    console.log(getStatus);

    param += date[0] != date[1] ? `&transaction_date=${getDateRange}` : "";
    param += getStatus.value != "" ? `&status=${getStatus}` : "";
    param += getPaymentId ? `&paymentId=${getPaymentId}` : "";
    console.log(param);
    dispatch(onGetTransactionHistory(param));
    setTransactionHistory(transactionHistory);
  };

  const handleResetFilter = () => {
    setOrderId("");
    setPaymentId("");
    setStatus({ value: "", label: "" });
    setDateRange("");
    let param = `?perPage=${getPerPage}&page=1`;
    dispatch(onGetTransactionHistory(param));
    setTransactionHistory(transactionHistory);
  };

  // Export
  const onExportCsv = () => {
    tabulator.current.download("csv", "data.csv");
  };

  const onExportJson = () => {
    tabulator.current.download("json", "data.json");
  };

  const onExportXlsx = () => {
    const win = window;
    win.XLSX = xlsx;
    tabulator.current.download("xlsx", "data.xlsx", {
      sheetName: "Products",
    });
  };

  const onExportHtml = () => {
    tabulator.current.download("html", "data.html", {
      style: true,
    });
  };

  // Print
  const onPrint = () => {
    tabulator.current.print();
  };

  function SimpleButton(props) {
    const rowData = props.cell._cell.row.data;
    const columnHeader = props.cell._cell.column.field;

    //  console.log("here row", rowData1);
    //    const cellValue = props.cell._cell.value || "Edit | Show";
    return columnHeader == "credit" && rowData.status == "refund"
      ? currencyCodeFormat(rowData.orderRefId.totalAmount)
      : columnHeader == "debit" && rowData.status == "paid"
      ? currencyCodeFormat(rowData.orderRefId.totalAmount)
      : "";
  }

  function Qtysetter(props) {
    var min = Math.ceil(1);
    var max = Math.floor(100);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const columns = [
    { title: "INVOICE ID", field: "paymentId" },
    { title: "ORDER ID", field: "orderRefId.orderId" },
    {
      title: "TOTAL QTY",
      field: "orderRefId.totalQuantity",
      // formatter: reactFormatter(<Qtysetter />),
    },
    { title: "DATE", field: "paymentDate", formatter: pmidFormatter },
    {
      title: "INVOICE STATUS",
      field: "status",
      formatter: CapitalizeFormatter,
    },
    {
      title: "DEBIT",
      field: "debit",
      formatter: reactFormatter(<SimpleButton />),
    },
    {
      title: "CREDIT",
      field: "credit",
      formatter: reactFormatter(<SimpleButton />),
    },
  ];

  const orderStatus = [
    { value: "paid", label: "Paid" },
    { value: "refund", label: "Refund" },
  ];

  return (
    <>
      <div className="intro-y flex flex-col sm:flex-row items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">TRANSACTION HISTORY</h2>
        <div className="w-full sm:w-auto flex mt-4 sm:mt-0">
          {/* <button className="btn btn-primary shadow-md mr-2">
            Add New Product
          </button> */}
          {/* <Dropdown className="ml-auto sm:ml-0">
            <DropdownToggle className="btn px-2 box">
              <span className="w-5 h-5 flex items-center justify-center">
                <Lucide icon="Plus" className="w-4 h-4" />
              </span>
            </DropdownToggle>
            <DropdownMenu className="w-40">
              <DropdownContent>
                <DropdownItem>
                  <Lucide icon="FilePlus" className="w-4 h-4 mr-2" /> New
                  Category
                </DropdownItem>
                <DropdownItem>
                  <Lucide icon="UserPlus" className="w-4 h-4 mr-2" /> New Group
                </DropdownItem>
              </DropdownContent>
            </DropdownMenu>
          </Dropdown> */}
        </div>
      </div>
      {/* BEGIN: HTML Table Data */}
      <div className="intro-y box p-5 mt-5">
        <div className="flex flex-col sm:flex-row sm:items-end xl:items-start">
          <form id="tabulator-html-filter-form" className="xl:flex sm:mr-auto">
            <div className="sm:flex items-center sm:mr-4">
              <label className="w-12 flex-none xl:w-auto xl:flex-initial mr-2">
                Invoice Id :
              </label>
              <input
                id="tabulator-html-filter-value"
                type="text"
                className="form-control sm:w-40 2xl:w-full mt-2 sm:mt-0"
                placeholder="Invoice Id"
                value={getPaymentId}
                onChange={(e) => {
                  setPaymentId(e.target.value);
                }}
              />
            </div>
            <div className="sm:flex items-center sm:mr-4">
              <label className="w-12 flex-none xl:w-auto xl:flex-initial mr-2">
                Order Id
              </label>
              <input
                id="tabulator-html-filter-value"
                type="text"
                className="form-control sm:w-40 2xl:w-full mt-2 sm:mt-0"
                placeholder="Order Id"
                value={getOrderId}
                onChange={(e) => {
                  setOrderId(e.target.value);
                }}
              />
            </div>
            <div className="sm:flex items-center sm:mr-4">
              <label className="w-12 flex-none xl:w-auto xl:flex-initial mr-2">
                Transaction Date :
              </label>
              <Litepicker
                onChange={setDateRange}
                value={getDateRange}
                placeholder="Search By Date Placed"
                options={{
                  autoApply: false,
                  singleMode: false,
                  numberOfColumns: 2,
                  numberOfMonths: 2,
                  showWeekNumbers: true,
                  dropdowns: {
                    minYear: 1990,
                    maxYear: null,
                    months: true,
                    years: true,
                  },
                }}
                className="form-control w-56 block mx-auto"
              />
            </div>
            <div className="sm:flex items-center sm:mr-4">
              <label className="w-12 flex-none xl:w-auto xl:flex-initial mr-2">
                Invoice Status :
              </label>

              <Select
                id="tabulator-html-filter-field"
                value={getStatus.value}
                onChange={(e) => {
                  console.log(e);
                  setStatus(e.value);
                }}
                options={orderStatus}
              />
            </div>

            <div className="mt-2 xl:mt-0">
              <button
                id="tabulator-html-filter-go"
                type="button"
                className="btn btn-primary w-full sm:w-16"
                onClick={() => handleFilterFunction()}
              >
                Go
              </button>
              <button
                id="tabulator-html-filter-reset"
                type="button"
                className="btn btn-secondary w-full sm:w-16 mt-2 sm:mt-0 sm:ml-1"
                onClick={() => handleResetFilter()}
              >
                Reset
              </button>
            </div>
          </form>
          <div className="flex mt-5 sm:mt-0">
            <button
              id="tabulator-print"
              className="btn btn-outline-secondary w-1/2 sm:w-auto mr-2"
              onClick={onPrint}
            >
              <Lucide icon="Printer" className="w-4 h-4 mr-2" /> Print
            </button>
            <Dropdown className="w-1/2 sm:w-auto">
              <DropdownToggle className="btn btn-outline-secondary w-full sm:w-auto">
                <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Export
                <Lucide
                  icon="ChevronDown"
                  className="w-4 h-4 ml-auto sm:ml-2"
                />
              </DropdownToggle>
              <DropdownMenu className="w-40">
                <DropdownContent>
                  <DropdownItem onClick={onExportCsv}>
                    <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Export
                    CSV
                  </DropdownItem>
                  <DropdownItem onClick={onExportJson}>
                    <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Export
                    JSON
                  </DropdownItem>
                  <DropdownItem onClick={onExportXlsx}>
                    <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Export
                    XLSX
                  </DropdownItem>
                  <DropdownItem onClick={onExportHtml}>
                    <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Export
                    HTML
                  </DropdownItem>
                </DropdownContent>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <div className="overflow-x-auto scrollbar-hidden">
          <ReactTabulator columns={columns} data={getTransactionHistory.docs} />
        </div>
        {/* BEGIN: Pagination */}
        <div className="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
          <nav className="w-full sm:w-auto sm:mr-auto">
            <ul className="pagination">
              {transactionHistory.hasPrevPage ? (
                <>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#123"
                      onClick={() => setCurrentPage(1)}
                    >
                      <Lucide icon="ChevronsLeft" className="w-4 h-4" />
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      onClick={() =>
                        setCurrentPage(transactionHistory.prevPage)
                      }
                    >
                      <Lucide icon="ChevronLeft" className="w-4 h-4" />
                    </a>
                  </li>

                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      onClick={() =>
                        setCurrentPage(transactionHistory.prevPage)
                      }
                    >
                      {transactionHistory.prevPage}
                    </a>
                  </li>
                </>
              ) : null}
              <li className="page-item active">
                <a className="page-link" href="#">
                  {transactionHistory.page}
                </a>
              </li>
              {transactionHistory.hasNextPage ? (
                <>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      onClick={() =>
                        setCurrentPage(transactionHistory.nextPage)
                      }
                    >
                      {transactionHistory.nextPage}
                    </a>
                  </li>

                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      onClick={() =>
                        setCurrentPage(transactionHistory.nextPage)
                      }
                    >
                      <Lucide icon="ChevronRight" className="w-4 h-4" />
                    </a>
                  </li>

                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#123"
                      onClick={() =>
                        setCurrentPage(transactionHistory.totalPages)
                      }
                    >
                      <Lucide icon="ChevronsRight" className="w-4 h-4" />
                    </a>
                  </li>
                </>
              ) : null}
            </ul>
          </nav>
          <Select
            defaultValue={getPerPage}
            onChange={(e) =>
              setPerPage({ value: `${e.value}`, label: `${e.value}` })
            }
            options={options}
          />
        </div>
      </div>
    </>
  );
}

export default Main;
