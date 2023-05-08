<<<<<<< HEAD
import * as $_ from "lodash";

import { helper as $h, ConstructJSON as JsonData, keyValue as kv } from "@/utils";
import { CapitalizeFormatter, SimpleButton, pmidFormatter , PaymentStatusFormatter,
} from "../../utils/formaters.jsx";
import { Litepicker, Lucide } from "@/base-components";
import { ReactTabulator, reactFormatter } from "react-tabulator";
import {
  exportTotalTransactions,
  getTransactionHistory as onGetTransactionHistory,
  saveInvoiceFilters
} from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { ExportJsonCsv } from "react-export-json-csv";
import Select from "react-select";
import jsPDF from "jspdf";
import moment from "moment";

=======
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ReactTabulator, reactFormatter } from "react-tabulator";

import Select from "react-select";

import moment from "moment";

import { CapitalizeFormatter, pmidFormatter, SimpleButton } from "../../utils/formaters.jsx";

import { helper as $h, keyValue as kv, ConstructJSON as JsonData } from "@/utils";

import { Lucide, Litepicker } from "@/base-components";

import {
  getTransactionHistory as onGetTransactionHistory,
  exportTotalTransactions,
} from "../../store/actions";
import { ExportJsonCsv } from "react-export-json-csv";
import jsPDF from "jspdf";

import * as $_ from "lodash";

>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
function Main() {
  const TAG = "TRANSACTION_HISTORY";

  const dispatch = useDispatch();

  const { transactionHistory } = useSelector((state) => ({
<<<<<<< HEAD
    transactionHistory: state.TransactionHistoryReducer.TransactionHistorys
  }));

  const { SavedDateRange, SavedPaymentId } = useSelector(
    (state) => state.TransactionHistoryReducer
  );
=======
    transactionHistory: state.TransactionHistoryReducer.TransactionHistorys,
  }));

  const { totalTransactions } = useSelector((state) => ({
    totalTransactions: state.TransactionHistoryReducer.totalTransactions,
  }));
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75

  const [getTransactionHistory, setTransactionHistory] = useState([]);
  const [getCurrentPage, setCurrentPage] = useState(1);
  const [getPerPage, setPerPage] = useState({ value: "10", label: "10" });
<<<<<<< HEAD
  const [getPaymentId, setPaymentId] = useState(SavedPaymentId);
  const [getDateRange, setDateRange] = useState(SavedDateRange);
=======
  const [getOrderId, setOrderId] = useState("");
  const [getPaymentId, setPaymentId] = useState("");
  const [getStatus, setStatus] = useState({ value: "", label: "" });
  const [getDateRange, setDateRange] = useState("");
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75

  useEffect(() => {
    var date = getDateRange.split("-");

    if (getPerPage.value != transactionHistory.limit) {
      setCurrentPage(1);
<<<<<<< HEAD
      var params = `?invoiceStatus=paid&perPage=${getPerPage.value}&page=1`;

      params += date[0] != date[1] ? `&dateRange=${getDateRange.replace(/\s+/g, "")}` : "";
      params += getPaymentId ? `&invoiceId=${getPaymentId}` : "";
    } else {
      var params = `?invoiceStatus=paid&perPage=${getPerPage.value}&page=${getCurrentPage}`;

      params += date[0] != date[1] ? `&dateRange=${getDateRange.replace(/\s+/g, "")}` : "";
      params += getPaymentId ? `&invoiceId=${getPaymentId}` : "";
=======
      var params = `?perPage=${getPerPage.value}&page=1`;

      params += date[0] != date[1] ? `&transaction_date=${getDateRange}` : "";
      params += getStatus.value != "" ? `&status=${getStatus}` : "";
      params += getPaymentId ? `&paymentId=${getPaymentId}` : "";
    } else {
      var params = `?perPage=${getPerPage.value}&page=${getCurrentPage}`;

      params += date[0] != date[1] ? `&transaction_date=${getDateRange}` : "";
      params += getStatus.value != "" ? `&status=${getStatus}` : "";
      params += getPaymentId ? `&paymentId=${getPaymentId}` : "";
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
    }

    if (transactionHistory.hasOwnProperty("message")) {
    } else if (
      !transactionHistory.hasOwnProperty("docs") ||
      getCurrentPage != transactionHistory.page ||
      getPerPage.value != transactionHistory.limit
    ) {
      dispatch(onGetTransactionHistory(params));
    }

    setTransactionHistory(transactionHistory);
<<<<<<< HEAD
  }, [dispatch, getCurrentPage, getPerPage]);


  const handleFilterFunction = () => {
    let param = `?invoiceStatus=paid&perPage=${getPerPage.value}&page=1`;

    var date = getDateRange.split("-");

    param += date[0] != date[1] ? `&dateRange=${getDateRange.replace(/\s+/g, "")}` : "";
    param += getPaymentId ? `&invoiceId=${getPaymentId}` : "";

    dispatch(
      saveInvoiceFilters({
        dateRange: getDateRange,
        paymentId: getPaymentId,
        paymentStatus: ""
      })
    );
=======
  }, [transactionHistory, getCurrentPage, getPerPage]);

  useEffect(() => {
    if (!totalTransactions.length) {
      dispatch(exportTotalTransactions());
    }
  }, [totalTransactions]);

  const handleFilterFunction = () => {
    let param = `?perPage=${getPerPage.value}&page=1`;

    var date = getDateRange.split("-");

    param += date[0] != date[1] ? `&transaction_date=${getDateRange}` : "";
    param += getStatus.value != "" ? `&status=${getStatus}` : "";
    param += getPaymentId ? `&paymentId=${getPaymentId}` : "";
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75

    dispatch(onGetTransactionHistory(param));
    setTransactionHistory(transactionHistory);
  };

<<<<<<< HEAD

  function DescriptionFormatter(props) {
    const description = props.cell._cell.row.data.invoiceNumber;

    return <div>{description ? description : "N/A"}</div>;
  }

  function OrderIdFormatter(props) {
    const orderId = props.cell._cell.row.data.orderId;

    return (
      <div
      // onClick={() => {
      //   setBasicSlideOverPreview(true);
      //   setCurrentOrderId({
      //     value: `${orderId}`,
      //     event: true
      //   });
      // }}
      >
        {orderId}
      </div>
    );
  }



  const handleResetFilter = () => {
    setPaymentId("");
    setDateRange("");
    let param = `?invoiceStatus=paid&perPage=${getPerPage}&page=1`;

    dispatch(
      saveInvoiceFilters({
        dateRange: "",
        paymentId: "",
        paymentStatus: ""
      })
    );

=======
  const handleResetFilter = () => {
    setOrderId("");
    setPaymentId("");
    setStatus({ value: "", label: "" });
    setDateRange("");
    let param = `?perPage=${getPerPage}&page=1`;
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
    dispatch(onGetTransactionHistory(param));
    setTransactionHistory(transactionHistory);
  };

<<<<<<< HEAD

  const columns = [
    {
      title: "INVOICE ID",
      field: "invoiceNumber",
      formatter: reactFormatter(<DescriptionFormatter />)
    },
    { title: "Order ID", field: "orderId", formatter: reactFormatter(<OrderIdFormatter />) },

    { title: "Total Quantity", field: "totalQuantity" },
    {
      title: "DATE",
      field: "orderPlaced",
      formatter: pmidFormatter
    },
    {
      title: "INVOICE STATUS",
      field: "invoiceStatus",
      with: 20,
      formatter: reactFormatter(<PaymentStatusFormatter />)
=======
  function PrintasPDF() {
    const x = `
    <!DOCTYPE html>
<html>
  <body>
    <div id="html" style="position: absolute">
      <table>
        <thead style="border-radius: 2px; height: 2rem">
          <tr>
            <th class="invId">INVOICE ID</th>
            <th class="ordId">ORDER ID</th>
            <th>TOTAL QTY</th>
            <th class="date">DATE</th>
            <th>INVOICE STATUS</th>
            <th>DEBIT</th>
            <th>CREDIT</th>
          </tr>
        </thead>
        <tbody>

        ${totalTransactions.map((value, index) => {
          return `<tr key = ${index}>
          <td>${value.paymentId}</td>
          <td>${value.orderRefId.orderId}</td>
          <td>${value.orderRefId.totalQuantity}</td>
          <td>${moment(value.paymentDate).utc().format("DD-MMM-YYYY")}</td>
          <td>${$h.capitalizeFirstLetter(value.status)}</td>
          <td>
            ${
              value.status == "paid"
                ? value.hasOwnProperty("orderRefId")
                  ? $h.formatCurrency(value.orderRefId.totalAmount)
                  : ""
                : ""
            }
          </td>
          <td>
            ${
              value.status == "refund"
                ? value.hasOwnProperty("orderRefId")
                  ? $h.formatCurrency(value.orderRefId.totalAmount)
                  : ""
                : ""
            }
          </td>
        </tr>`;
        })}
        </tbody>
      </table>
    </div>
        <style>
    body {
      padding: 10px !important;
      font-family: sans-serif;
    }
    table {
      margin: 10px !important;
       border-radius: 2px;
    }
    thead {
      border-radius: 2px;
    }
    th {
      margin : auto;
      font-size: 12px;
      padding-right: 1rem;
      padding-left: 1rem;
      border: 1px solid #000;
    }

    td {
      margin : auto;
      font-size: 12px;
      padding: 0.3rem;
      text-align: center;
      border: 1px solid #000000;
    }    
    </style>
    </body>
</html>`;

    var pdf = new jsPDF("p", "pt", "a4");
    pdf.html(x, {
      callback: function (pdf) {
        var iframe = document.createElement("iframe");
        document.body.appendChild(iframe);
        // iframe.src = pdf.output("datauristring");
        pdf.save("sample-document.pdf");
      },
    });
  }

  const columns = [
    { title: "INVOICE ID", field: "paymentId" },
    { title: "ORDER ID", field: "orderRefId.orderId" },
    {
      title: "TOTAL QTY",
      field: "orderRefId.totalQuantity",
    },
    { title: "DATE", field: "paymentDate", formatter: pmidFormatter },
    {
      title: "INVOICE STATUS",
      field: "status",
      formatter: CapitalizeFormatter,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
    },
    {
      title: "DEBIT",
      field: "debit",
      sorter: "string",
      headerSort: false,
<<<<<<< HEAD
      formatter: reactFormatter(<SimpleButton />)
=======
      formatter: reactFormatter(<SimpleButton />),
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
    },
    {
      title: "CREDIT",
      field: "credit",
      sorter: "string",
      headerSort: false,
<<<<<<< HEAD
      formatter: reactFormatter(<SimpleButton />)
    }
=======
      formatter: reactFormatter(<SimpleButton />),
    },
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
  ];

  return (
    <>
      <div className="intro-y flex flex-col sm:flex-row items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">TRANSACTION HISTORY</h2>
        <div className="w-full sm:w-auto flex mt-4 sm:mt-0"></div>
      </div>
      {/* BEGIN: HTML Table Data */}
      <div className="intro-y box p-5 mt-5">
        <div className="flex flex-col sm:flex-row sm:items-end xl:items-start">
          <form id="tabulator-html-filter-form" className="xl:flex sm:mr-auto mb-8">
            <div className="w-48 relative text-slate-500 sm:flex items-center sm:mr-4">
              {/* <label className="w-12 flex-none xl:w-auto xl:flex-initial mr-2">
                Invoice Id :
              </label> */}
              <input
                id="tabulator-html-filter-value"
                type="text"
                className="form-control sm:w-40 2xl:w-full mt-2 sm:mt-0"
                placeholder="Search by Invoice Id"
                value={getPaymentId}
                onChange={(e) => {
                  setPaymentId(e.target.value);
                }}
              />
              <Lucide icon="Search" className="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0" />
            </div>
            <div className="sm:flex items-center sm:mr-4">
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
<<<<<<< HEAD
                    years: true
                  }
=======
                    years: true,
                  },
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
                }}
                className="form-control w-56 block mx-auto"
              />
            </div>
<<<<<<< HEAD
=======
            <div className="sm:flex items-center sm:mr-4">
              <Select
                placeholder="Invoice Status"
                styles={{
                  placeholder: (base) => ({
                    ...base,
                    fontSize: "1em",
                    color: "#A5B2C4",
                    fontWeight: 400,
                  }),
                }}
                className="form-control sm:w-40 mt-2 sm:mt-0"
                id="tabulator-html-filter-field"
                value={getStatus.value}
                onChange={(e) => {
                  setStatus(e.value);
                }}
                options={kv.orderStatus}
              />
            </div>
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75

            <div className="mt-2 xl:mt-0">
              <button
                id="tabulator-html-filter-go"
                type="button"
                className="btn btn-primary w-full sm:w-16 ml-3"
                onClick={() => handleFilterFunction()}
              >
                Filter
              </button>
              <button
                id="tabulator-html-filter-reset"
                type="button"
                className="btn btn-secondary w-full sm:w-16 mt-2 sm:mt-0 ml-3"
                onClick={() => handleResetFilter()}
              >
                Reset
              </button>
            </div>
          </form>
<<<<<<< HEAD
        
        </div>
        <div className="overflow-x-auto scrollbar-hidden">
          <ReactTabulator columns={columns} data={transactionHistory?.docs} />
=======
          <div className="flex mt-5 sm:mt-0">
            {totalTransactions.length ? (
              <button
                id="tabulator-print"
                className="btn btn-outline-secondary w-1/2 sm:w-auto mr-2"
                onClick={() => {
                  PrintasPDF();
                }}
              >
                <Lucide icon="Download" className="w-4 h-4 mr-2" /> Download PDF
              </button>
            ) : null}
          </div>
          <div className="flex mt-5 sm:mt-0">
            {totalTransactions.length ? (
              <ExportJsonCsv
                id="tabulator-download"
                className="btn btn-outline-secondary w-1/2 sm:w-auto mr-2"
                headers={JsonData(totalTransactions, TAG)[1]}
                items={JsonData(totalTransactions, TAG)[0]}
              >
                <Lucide icon="Download" className="w-4 h-4 mr-2" /> Export to CSV
              </ExportJsonCsv>
            ) : null}
          </div>
        </div>
        <div className="overflow-x-auto scrollbar-hidden">
          <ReactTabulator columns={columns} data={getTransactionHistory.docs} />
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
        </div>
        {/* BEGIN: Pagination */}
        <div className="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center mt-10">
          <nav className="w-full sm:w-auto sm:mr-auto">
            <ul className="pagination">
              {transactionHistory.hasPrevPage ? (
                <div>
                  <li className="page-item">
                    <a className="page-link" href="#123" onClick={() => setCurrentPage(1)}>
                      <Lucide icon="ChevronsLeft" className="w-4 h-4" />
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      onClick={() => setCurrentPage(transactionHistory.prevPage)}
                    >
                      <Lucide icon="ChevronLeft" className="w-4 h-4" />
                    </a>
                  </li>

                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      onClick={() => setCurrentPage(transactionHistory.prevPage)}
                    >
                      {transactionHistory.prevPage}
                    </a>
                  </li>
                </div>
              ) : null}
              <li className="page-item active">
                <a className="page-link" href="#">
                  {transactionHistory.page}
                </a>
              </li>
              {transactionHistory.hasNextPage ? (
                <div>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      onClick={() => setCurrentPage(transactionHistory.nextPage)}
                    >
                      {transactionHistory.nextPage}
                    </a>
                  </li>

                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      onClick={() => setCurrentPage(transactionHistory.nextPage)}
                    >
                      <Lucide icon="ChevronRight" className="w-4 h-4" />
                    </a>
                  </li>

                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#123"
                      onClick={() => setCurrentPage(transactionHistory.totalPages)}
                    >
                      <Lucide icon="ChevronsRight" className="w-4 h-4" />
                    </a>
                  </li>
                </div>
              ) : null}
            </ul>
          </nav>
          <Select
            defaultValue={getPerPage}
            onChange={(e) => setPerPage({ value: `${e.value}`, label: `${e.value}` })}
            options={kv.optionsPerPage}
          />
        </div>
      </div>
    </>
  );
}

export default Main;
