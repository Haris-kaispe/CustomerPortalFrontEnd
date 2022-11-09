import {
  Lucide,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  Litepicker,
} from "@/base-components";
import xlsx from "xlsx";
import { useEffect, useRef, createRef, useState } from "react";
import { createIcons, icons } from "lucide";
import Tabulator from "tabulator-tables";
import dom from "@left4code/tw-starter/dist/js/dom";

import { useSelector, useDispatch } from "react-redux";

import { ReactTabulator, reactFormatter } from "react-tabulator";

import Select from "react-select";
import classnames from "classnames";

import moment from "moment";

import {
  getSalesOrderList as onGetSalesOrderList,
  addNewSalesOrderList as onAddNewSalesOrderList,
  updateSalesOrderList as onUpdateSalesOrderList,
  deleteSalesOrderList as onDeleteSalesOrderList,
} from "../../store/actions";
import { func } from "prop-types";

function Main() {
  const dispatch = useDispatch();

  const { salesOrderList } = useSelector((state) => ({
    salesOrderList: state.SalesOrderListReducer?.salesOrderLists,
  }));

  const [getCurrentPage, setCurrentPage] = useState(1);
  const [getPerPage, setPerPage] = useState({ value: "10", label: "10" });
  const [getSalesOrderList, setSalesOrderList] = useState([]);

  const [getOrderId, setOrderId] = useState("");
  const [getDateRange, setDateRange] = useState("");
  const [getStatus, setStatus] = useState({
    value: "",
    label: "",
  });
  const [getPaymentStatus, setPaymentStatus] = useState({
    value: "",
    label: "",
  });

  const [daterange, setDaterange] = useState("");
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

  const pmidFormatter = function (cell, formatterParams) {
    return moment(cell.getValue()).utc().format("DD-MMM-YYYY");
  };
  function OrderStatusFormatter(props) {
    const orderStatusCell = props.cell._cell.row.data.orderStatus;
    return (
      <div
        className={classnames({
          "whitespace-nowrap": true,
          "text-success": orderStatusCell == "approval",
          "text-info": orderStatusCell == "processing",
          "text-danger": orderStatusCell == "cancelled",
          "text-warning": orderStatusCell == "packing",
          "text-primary":
            orderStatusCell == "shipping" || orderStatusCell == "delivered",
        })}
      >
        {Caps(orderStatusCell)}
      </div>
    );
  }

  function PaymentStatusFormatter(props) {
    const StatusCell = props.cell._cell.row.data.paymentRefId.status;

    return (
      <div
        className={classnames({
          "flex items-center  whitespace-nowrap": true,
          "text-success": StatusCell == "paid",
          "text-info": StatusCell == "refund",
        })}
      >
        <Lucide icon="CheckSquare" className="w-4 h-4 mr-2" />
        {Caps(StatusCell)}
      </div>
    );
  }

  useEffect(() => {
    if (getPerPage.value != salesOrderList.limit) {
      setCurrentPage(1);
      var params = `?perPage=${getPerPage.value}&page=1`;
    } else {
      var params = `?perPage=${getPerPage.value}&page=${getCurrentPage}`;
    }
    if (salesOrderList.hasOwnProperty("message")) {
    } else if (
      !salesOrderList.hasOwnProperty("docs") ||
      getCurrentPage != salesOrderList.page ||
      getPerPage.value != salesOrderList.limit
    )
      dispatch(onGetSalesOrderList(params));

    setSalesOrderList(salesOrderList);
  }, [salesOrderList, getCurrentPage, getPerPage]);

  const columns = [
    { title: "Order ID", field: "orderId" },
    {
      title: "Date Placed",
      field: "orderPlaced",
      formatter: pmidFormatter,
    },
    { title: "Total Quantity", field: "totalQuantity" },
    {
      title: "Order Status",
      field: "orderStatus",
      formatter: reactFormatter(<OrderStatusFormatter />),
    },
    {
      title: "Payment Status",
      field: "paymentRefId.status",
      formatter: reactFormatter(<PaymentStatusFormatter />),
    },
  ];

  const paymentStatus = [
    { value: "paid", label: "Paid" },
    { value: "refund", label: "Refund" },
  ];

  const orderStatus = [
    { value: "approval", label: "Approval" },
    { value: "processing", label: "Processing" },
    { value: "packing", label: "Packing" },
    { value: "shipping", label: "Shipping" },
    { value: "delivered", label: "Delivered" },
  ];

  const handleFilterFunction = () => {
    console.log(getPaymentStatus);
    let param = `?perPage=${getPerPage.value}&page=1`;
    var date = getDateRange.split("-");
    param += getOrderId ? `&orderId=${getOrderId}` : "";
    param += getStatus ? `&orderStatus=${getStatus}` : "";
    param += date[0] != date[1] ? `&date_placed=${getDateRange}` : "";
    dispatch(onGetSalesOrderList(param));
  };

  const handleResetFilter = () => {
    setOrderId("");
    setPaymentStatus({
      value: "",
      label: "",
    });
    setDateRange("");
    setStatus({
      value: "",
      label: "",
    });
    let param = `?perPage=${getPerPage.value}&page=1`;
    dispatch(onGetSalesOrderList(param));
  };

  const Caps = (props) => {
    return `${props[0].toUpperCase()}${props.slice(1)}`;
  };

  return (
    <>
      <div className="intro-y flex flex-col sm:flex-row items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">SALES ORDER LIST</h2>
        {/* <div className="w-full sm:w-auto flex mt-4 sm:mt-0">
          <Dropdown className="ml-auto sm:ml-0">
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
          </Dropdown>
        </div> */}
      </div>
      {/* BEGIN: HTML Table Data */}
      <div className="intro-y box p-5 mt-5">
        <div className="flex flex-col sm:flex-row sm:items-end xl:items-start">
          <form id="tabulator-html-filter-form" className="xl:flex sm:mr-auto">
            <div className="sm:flex items-center sm:mr-4">
              <label className="w-12 flex-none xl:w-auto xl:flex-initial mr-2">
                Order Id :
              </label>
              <input
                id="tabulator-html-filter-value"
                type="text"
                className="form-control sm:w-40 mt-2 sm:mt-0"
                placeholder="Order Id"
                value={getOrderId}
                // onKeyUp={(e) => {
                //   setOrderId(e.target.value);
                // }}
                onChange={(e) => {
                  setOrderId(e.target.value);
                }}
              />
            </div>
            <div className="sm:flex items-center sm:mr-4">
              <label className="w-12 flex-none xl:w-auto xl:flex-initial mr-2">
                Order Date :
              </label>
              <Litepicker
                value={daterange}
                placeholder="Search By Date Placed"
                onChange={setDaterange}
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
                Payment Status :
              </label>
              <Select
                value={getPaymentStatus.value}
                onChange={(e) => {
                  setPaymentStatus(e.value);
                }}
                options={paymentStatus}
              />
            </div>

            <div className="sm:flex items-center sm:mr-4">
              <label className="w-12 flex-none xl:w-auto xl:flex-initial mr-2">
                Order Status :
              </label>
              <Select
                value={getStatus.value}
                onChange={(e) => {
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
          <ReactTabulator columns={columns} data={salesOrderList.docs} />
        </div>
        {/* BEGIN: Pagination */}
        <div className="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
          <nav className="w-full sm:w-auto sm:mr-auto">
            <ul className="pagination">
              {salesOrderList.hasPrevPage ? (
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
                      onClick={() => setCurrentPage(salesOrderList.prevPage)}
                    >
                      <Lucide icon="ChevronLeft" className="w-4 h-4" />
                    </a>
                  </li>

                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      onClick={() => setCurrentPage(salesOrderList.prevPage)}
                    >
                      {salesOrderList.prevPage}
                    </a>
                  </li>
                </>
              ) : null}
              <li className="page-item active">
                <a className="page-link" href="#">
                  {salesOrderList.page}
                </a>
              </li>
              {salesOrderList.hasNextPage ? (
                <>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      onClick={() => setCurrentPage(salesOrderList.nextPage)}
                    >
                      {salesOrderList.nextPage}
                    </a>
                  </li>

                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      onClick={() => setCurrentPage(salesOrderList.nextPage)}
                    >
                      <Lucide icon="ChevronRight" className="w-4 h-4" />
                    </a>
                  </li>

                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#123"
                      onClick={() => setCurrentPage(salesOrderList.totalPages)}
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
        {/* END: Pagination */}
      </div>
      {/* END: HTML Table Data */}
    </>
  );
}

export default Main;
