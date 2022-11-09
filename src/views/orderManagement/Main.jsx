import { useEffect, useState } from "react";

import Select from "react-select";
import * as $_ from "lodash";
import classnames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

import { faker as $f } from "@/utils";

import {
  Lucide,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  Tippy,
  DropdownItem,
  Modal,
  ModalBody,
  Litepicker,
  ModalHeader,
} from "@/base-components";

import {
  getOrderDetails as onGetOrderDetails,
  getOrderManagement as onGetOrderManagement,
  addNewOrderManagement as onAddNewOrderManagement,
  updateOrderManagement as onUpdateOrderManagement,
  deleteOrderManagement as onDeleteOrderManagement,
} from "../../store/actions";

function Main() {
  const dispatch = useDispatch();

  const { orderManagement } = useSelector((state) => ({
    orderManagement: state.OrderManagementReducer?.orderManagements,
  }));

  const { orderDetails } = useSelector((state) => ({
    orderDetails: state.OrderManagementReducer?.orderDetailsState,
  }));

  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);
  const [basicSlideOverPreview, setBasicSlideOverPreview] = useState(false);
  const [invoiceNumber, seInvoiceNumber] = useState("");
  const [getOrderId, setOrderId] = useState("");
  const [getDateRange, setDateRange] = useState("");
  const [getStatus, setStatus] = useState("");
  const [getOrderManagement, setOrderManagement] = useState({});
  const [getCurrentPage, setCurrentPage] = useState(1);
  const [largeSlideOverSizePreview, setLargeSlideOverSizePreview] =
    useState(false);
  const [getPerPage, setPerPage] = useState({ value: "10", label: "10" });

  const [getOrderDetails, setOrderDetails] = useState([]);

  //  const [getOrderIdTriggervalue, setOrderIdTriggervalue] = useState(false);
  const [getCurrentOrderId, setCurrentOrderId] = useState({
    value: "",
    event: false,
  });

  const Caps = (props) => {
    return `${props[0].toUpperCase()}${props.slice(1)}`;
  };

  useEffect(() => {
    console.log(getPerPage, "dds--", getPerPage.value);
    if (getPerPage.value != orderManagement.limit) {
      setCurrentPage(1);
      var params = `?perPage=${getPerPage.value}&page=1`;
    } else {
      var params = `?perPage=${getPerPage.value}&page=${getCurrentPage}`;
    }
    if (orderManagement.hasOwnProperty("message")) {
    } else if (
      !orderManagement.hasOwnProperty("docs") ||
      getCurrentPage != orderManagement.page ||
      getPerPage.value != orderManagement.limit
    ) {
      dispatch(onGetOrderManagement(params));
    }

    setOrderManagement(orderManagement);
  }, [orderManagement, getCurrentPage, getPerPage]);

  useEffect(() => {
    if (getCurrentOrderId.event) {
      let param = `/${getCurrentOrderId.value}`;
      dispatch(onGetOrderDetails(param));
      setCurrentOrderId({ value: "", event: false });
    }
    setOrderDetails(orderDetails);
  }, [getCurrentOrderId.event, getOrderDetails]);

  const options = [
    { value: 10, label: "10" },
    { value: 25, label: "25" },
    { value: 35, label: "35" },
    { value: 50, label: "50" },
  ];

  const orderStatus = [
    { value: "approval", label: "Approval" },
    { value: "processing", label: "Processing" },
    { value: "packing", label: "Packing" },
    { value: "shipping", label: "Shipping" },
    { value: "delivered", label: "Delivered" },
  ];

  const handleFilterFunction = () => {
    let param = `?perPage=${getPerPage.value}&page=1`;
    var date = getDateRange.split("-");
    param += getOrderId ? `&orderId=${getOrderId}` : "";
    param += getStatus ? `&orderStatus=${getStatus}` : "";
    param += date[0] != date[1] ? `&date_placed=${getDateRange}` : "";
    dispatch(onGetOrderManagement(param));
  };

  const FindTotal = () => {
    var subtot = 0;
    if (orderDetails.hasOwnProperty("products")) {
      orderDetails.products.forEach((zone, index) => {
        subtot += zone.unit_price * zone.quantity;
      });
    }
    return subtot;
  };

  const currencyCodeFormat = (props) => {
    return `$${props}.00`;
  };

  return (
    <>
      <h2 className="intro-y text-lg font-medium mt-10">Order Management</h2>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 flex flex-wrap xl:flex-nowrap items-center mt-2">
          <div className="flex w-full sm:w-auto">
            <div className="w-48 relative text-slate-500 ">
              <input
                type="text"
                className="form-control w-48 box pr-10 "
                placeholder="Search by Order Id..."
                onKeyUp={(e) => {
                  setOrderId(e.target.value);
                }}
              />
              <Lucide
                icon="Search"
                className="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"
              />
            </div>
            <div className=" relative text-slate-500 box ">
              <Litepicker
                placeholder="Search By Date Placed"
                onChange={setDateRange}
                value={getDateRange}
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

            <Select
              defaultValue={getStatus}
              onChange={(e) => {
                setStatus(e.value);
              }}
              options={orderStatus}
            />
            <button
              className="btn btn-primary shadow-md mr-2"
              onClick={() => handleFilterFunction()}
            >
              <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Filter
            </button>
          </div>
          <div className="hidden xl:block mx-auto text-slate-500">
            Showing{" "}
            {getCurrentPage > 1
              ? getPerPage.value * (getCurrentPage - 1) + 1
              : 1}{" "}
            to{" "}
            {orderManagement.totalDocs < getPerPage.value
              ? orderManagement.totalDocs
              : getPerPage.value}{" "}
            of {orderManagement.totalDocs} entries
          </div>
          <div className="w-full xl:w-auto flex items-center mt-3 xl:mt-0">
            <button className="btn btn-primary shadow-md mr-2">
              <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Export to
              Excel
            </button>
            <button className="btn btn-primary shadow-md mr-2">
              <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Export to PDF
            </button>
            <Dropdown>
              <DropdownToggle className="dropdown-toggle btn px-2 box">
                <span className="w-5 h-5 flex items-center justify-center">
                  <Lucide icon="Plus" className="w-4 h-4" />
                </span>
              </DropdownToggle>
              <DropdownMenu className="w-40">
                <DropdownContent>
                  <DropdownItem>
                    <Lucide icon="ArrowLeftRight" className="w-4 h-4 mr-2" />
                    Change Status
                  </DropdownItem>
                  <DropdownItem>
                    <Lucide icon="Bookmark" className="w-4 h-4 mr-2" /> Bookmark
                  </DropdownItem>
                </DropdownContent>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        {/* BEGIN: Data List */}
        <div className="intro-y col-span-12 overflow-auto 2xl:overflow-visible">
          <table className="table table-report -mt-2">
            <thead>
              <tr>
                <th className="whitespace-nowrap">
                  <input className="form-check-input" type="checkbox" />
                </th>
                <th className="whitespace-nowrap">ORDER ID</th>
                {/* <th className="whitespace-nowrap">ITEMS</th> */}
                <th className="text-center whitespace-nowrap">ORDER STATUS</th>
                <th className="text-right whitespace-nowrap">
                  <div className="pr-16">DATE PLACED</div>
                </th>
                <th className="whitespace-nowrap">TOTAL QTY</th>
                <th className="whitespace-nowrap">EXPECTED DELIVERY</th>
                <th className="whitespace-nowrap">INVOICE STATUS</th>

                <th className="text-center whitespace-nowrap">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {$_.take(orderManagement.docs, orderManagement.totalDocs).map(
                (value, index) => (
                  <tr key={index} className="intro-x">
                    <td className="w-10">
                      <input className="form-check-input" type="checkbox" />
                    </td>
                    <td className="w-40 !py-4">
                      <div
                        className="underline decoration-dotted whitespace-nowrap"
                        onClick={() => {
                          //                          FetchOrderDetails(value.orderId);
                          setBasicSlideOverPreview(true);
                          setCurrentOrderId({
                            value: `${value.orderId}`,
                            event: true,
                          });
                          //                          setOrderIdTriggervalue(true);
                          // seInvoiceNumber(orderManagement.docs)
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        {value.orderId}
                      </div>
                    </td>

                    <td className="text-center">
                      <div
                        className={classnames({
                          "flex items-center justify-center whitespace-nowrap": true,
                          "text-success": value.orderStatus == "approval",
                          "text-info": value.orderStatus == "processing",
                          "text-danger": value.orderStatus == "cancelled",
                          "text-warning": value.orderStatus == "packing",
                          "text-primary":
                            value.orderStatus == "shipping" ||
                            value.orderStatus == "delivered",
                        })}
                      >
                        {Caps(value.orderStatus)}
                      </div>
                    </td>
                    <td>
                      {/* {faker.trueFalse[0] ? ( */}
                      <>
                        <div className=" whitespace-nowrap"></div>
                        <div className=" text-slate-500 text-xs whitespace-nowrap mt-0.5">
                          {moment(value.orderPlaced)
                            .utc()
                            .format("DD-MMM-YYYY")}
                        </div>
                      </>

                      <>
                        <div className="whitespace-nowrap"></div>
                        <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5"></div>
                      </>
                    </td>
                    <td className="w-40 text-right">
                      <div className="pr-16">{value.totalQuantity}</div>
                    </td>
                    <td>
                      <div className="pr-16 text-xs">
                        {moment(value.expectedDeliveryDate)
                          .utc()
                          .format("DD-MMM-YYYY")}
                      </div>
                    </td>

                    <td className="text-center">
                      {value.hasOwnProperty("paymentRefId") ? (
                        <div
                          className={classnames({
                            "flex items-center justify-center whitespace-nowrap": true,
                            "text-success": value.paymentRefId.status == "paid",
                            "text-info": value.paymentRefId.status == "refund",
                          })}
                        >
                          <Lucide icon="CheckSquare" className="w-4 h-4 mr-2" />
                          {Caps(value.paymentRefId.status)}
                        </div>
                      ) : (
                        <div></div>
                      )}
                      {/* {value.hasOwnProperty("paymentRefId")
                        ? value.paymentRefId.status
                        : ""} */}
                    </td>
                    <td className="table-report__action">
                      <div className="flex justify-center items-center">
                        <a
                          className="flex items-center text-primary whitespace-nowrap mr-2"
                          href="#"
                          onClick={() => {
                            setCurrentOrderId({
                              value: `${value.orderId}`,
                              event: true,
                            });
                            setLargeSlideOverSizePreview(true);
                          }}
                        >
                          {/* <Lucide
                          icon="ArrowLeftRight"
                          className="w-4 h-4 mr-1"
                        /> */}
                          Print Invoice
                        </a>
                        {}
                        <a
                          className="flex items-center text-primary whitespace-nowrap mr-2 ml-2"
                          href="#"
                          onClick={() => {
                            setLargeSlideOverSizePreview(true);
                          }}
                        >
                          {/* <Lucide
                          icon="ArrowLeftRight"
                          className="w-4 h-4 mr-1"
                        /> */}
                          Make a Payment
                        </a>
                        {}
                        <a
                          className="flex items-center text-primary whitespace-nowrap ml-2"
                          href="#"
                          onClick={() => {
                            setDeleteConfirmationModal(true);
                          }}
                        >
                          <Lucide
                            icon="ArrowLeftRight"
                            className="w-4 h-4 mr-1"
                          />
                          Repeat the Order
                        </a>
                      </div>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
        {/* END: Data List */}
        {/* BEGIN: Pagination */}
        <div className="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
          <nav className="w-full sm:w-auto sm:mr-auto">
            <ul className="pagination">
              {orderManagement.hasPrevPage ? (
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
                      onClick={() => setCurrentPage(orderManagement.prevPage)}
                    >
                      <Lucide icon="ChevronLeft" className="w-4 h-4" />
                    </a>
                  </li>

                  <li className="page-item">
                    {/* <a className="page-link" href="#" onClick ={setCurrentPage(orderManagement.nextPage)} > */}

                    <a
                      className="page-link"
                      href="#"
                      onClick={() => setCurrentPage(orderManagement.prevPage)}
                    >
                      {orderManagement.prevPage}
                    </a>
                  </li>
                </>
              ) : null}
              <li className="page-item active">
                <a className="page-link" href="#">
                  {orderManagement.page}
                </a>
              </li>
              {orderManagement.hasNextPage ? (
                <>
                  <li className="page-item">
                    {/* <a className="page-link" href="#" onClick ={setCurrentPage(orderManagement.nextPage)} > */}

                    <a
                      className="page-link"
                      href="#"
                      onClick={() => setCurrentPage(orderManagement.nextPage)}
                    >
                      {orderManagement.nextPage}
                    </a>
                  </li>

                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      onClick={() => setCurrentPage(orderManagement.nextPage)}
                    >
                      <Lucide icon="ChevronRight" className="w-4 h-4" />
                    </a>
                  </li>

                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#123"
                      onClick={() => setCurrentPage(orderManagement.totalPages)}
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
          {/* <select className="w-20 form-select box mt-3 sm:mt-0"  onChange={(t) => setPerPage(t.target.value)}>
            <option value =) "10" {getPerPage == "10" ? "selected" : ""}>10</option>
            <option value = "25" {getPerPage == "25" ? "selected" : ""}>25</option>
            <option value = "35" {getPerPage == "35" ? "selected" : ""}>35</option>
            <option value = "50" {getPerPage == "50" ? "selected" : ""}>50</option>
          </select> */}
        </div>
        {/* END: Pagination */}
      </div>
      {/* BEGIN: Delete Confirmation Modal */}
      <Modal
        size="modal-xl"
        slideOver={true}
        show={basicSlideOverPreview}
        onHidden={() => {
          setBasicSlideOverPreview(false);
        }}
      >
        <ModalHeader className="p-5">
          <h1 className="font-medium text-base mr-auto">Order Details</h1>
        </ModalHeader>
        <ModalBody>
          <div className="flex items-center mt-8">
            <h2 className="intro-y text-lg font-medium mr-auto">
              Shipping Status
              {invoiceNumber}
            </h2>
          </div>
          {/* BEGIN: Wizard Layout */}
          <div className="intro-y box py-10">
            <div className="relative before:hidden before:lg:block before:absolute before:w-[69%] before:h-[3px] before:top-0 before:bottom-0 before:mt-4 before:bg-slate-100 before:dark:bg-darkmode-400 flex flex-col lg:flex-row justify-center px-5 sm:px-20">
              {orderDetails.orderStatus == "approval" ? (
                <>
                  <div className="intro-x lg:text-center flex items-center lg:block flex-1 z-10">
                    <button className="w-10 h-10 rounded-full btn btn-primary">
                      <Lucide icon="Coffee" className="w-4 h-4" />
                    </button>
                    <div className="lg:w-32 font-medium text-base lg:mt-3 ml-3 lg:mx-auto">
                      Awaiting approval
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="intro-x lg:text-center flex items-center mt-5 lg:mt-0 lg:block flex-1 z-10">
                    <button className="w-10 h-10 rounded-full btn text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400">
                      <Lucide icon="Send" className="w-4 h-4" />
                    </button>
                    <div className="lg:w-32 text-base lg:mt-3 ml-3 lg:mx-auto text-slate-600 dark:text-slate-400">
                      Awaiting approval
                    </div>
                  </div>
                </>
              )}
              {orderDetails.orderStatus == "processing" ? (
                <>
                  <div className="intro-x lg:text-center flex items-center lg:block flex-1 z-10">
                    <button className="w-10 h-10 rounded-full btn btn-primary">
                      <Lucide icon="Coffee" className="w-4 h-4" />
                    </button>
                    <div className="lg:w-32 font-medium text-base lg:mt-3 ml-3 lg:mx-auto">
                      Processing
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="intro-x lg:text-center flex items-center mt-5 lg:mt-0 lg:block flex-1 z-10">
                    <button className="w-10 h-10 rounded-full btn text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400">
                      <Lucide icon="Send" className="w-4 h-4" />
                    </button>
                    <div className="lg:w-32 text-base lg:mt-3 ml-3 lg:mx-auto text-slate-600 dark:text-slate-400">
                      Processing
                    </div>
                  </div>
                </>
              )}
              {orderDetails.orderStatus == "packing" ? (
                <>
                  <div className="intro-x lg:text-center flex items-center lg:block flex-1 z-10">
                    <button className="w-10 h-10 rounded-full btn btn-primary">
                      <Lucide icon="Coffee" className="w-4 h-4" />
                    </button>
                    <div className="lg:w-32 font-medium text-base lg:mt-3 ml-3 lg:mx-auto">
                      Packing
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="intro-x lg:text-center flex items-center mt-5 lg:mt-0 lg:block flex-1 z-10">
                    <button className="w-10 h-10 rounded-full btn text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400">
                      <Lucide icon="Send" className="w-4 h-4" />
                    </button>
                    <div className="lg:w-32 text-base lg:mt-3 ml-3 lg:mx-auto text-slate-600 dark:text-slate-400">
                      Packing
                    </div>
                  </div>
                </>
              )}

              {orderDetails.orderStatus == "shipping" ? (
                <>
                  <div className="intro-x lg:text-center flex items-center lg:block flex-1 z-10">
                    <button className="w-10 h-10 rounded-full btn btn-primary">
                      <Lucide icon="Coffee" className="w-4 h-4" />
                    </button>
                    <div className="lg:w-32 font-medium text-base lg:mt-3 ml-3 lg:mx-auto">
                      Awaiting Shipment
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="intro-x lg:text-center flex items-center mt-5 lg:mt-0 lg:block flex-1 z-10">
                    <button className="w-10 h-10 rounded-full btn text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400">
                      <Lucide icon="Send" className="w-4 h-4" />
                    </button>
                    <div className="lg:w-32 text-base lg:mt-3 ml-3 lg:mx-auto text-slate-600 dark:text-slate-400">
                      Awaiting Shipment
                    </div>
                  </div>
                </>
              )}
              {orderDetails.orderStatus == "delivered" ? (
                <>
                  <div className="intro-x lg:text-center flex items-center lg:block flex-1 z-10">
                    <button className="w-10 h-10 rounded-full btn btn-primary">
                      <Lucide icon="Coffee" className="w-4 h-4" />
                    </button>
                    <div className="lg:w-32 font-medium text-base lg:mt-3 ml-3 lg:mx-auto">
                      Delivered
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="intro-x lg:text-center flex items-center mt-5 lg:mt-0 lg:block flex-1 z-10">
                    <button className="w-10 h-10 rounded-full btn text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400">
                      <Lucide icon="Send" className="w-4 h-4" />
                    </button>
                    <div className="lg:w-32 text-base lg:mt-3 ml-3 lg:mx-auto text-slate-600 dark:text-slate-400">
                      Delivered
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="intro-y flex flex-col sm:flex-row items-center mt-8">
            <h2 className="text-lg font-medium mr-auto">
              All Products Details
            </h2>
            <div className="w-full sm:w-auto flex mt-4 sm:mt-0">
              {/* <button className="btn btn-primary shadow-md mr-2">Print</button> */}
              <button
                className="btn btn-primary shadow-md mr-2"
                onClick={() => setLargeSlideOverSizePreview(true)}
              >
                <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Print
                Invoice
              </button>
              <Dropdown className="ml-auto sm:ml-0">
                <DropdownToggle className="btn px-2 box">
                  <span className="w-5 h-5 flex items-center justify-center">
                    <Lucide icon="Plus" className="w-4 h-4" />
                  </span>
                </DropdownToggle>
              </Dropdown>
            </div>
          </div>
          {/* BEGIN: Transaction Details */}
          <div className="intro-y grid grid-cols-11 gap-5 mt-5">
            <div className="col-span-12 lg:col-span-12 2xl:col-span-12">
              <div className="box p-5 rounded-md">
                <div className="overflow-auto lg:overflow-visible -mt-3">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th className="whitespace-nowrap !py-5">Product</th>
                        <th className="whitespace-nowrap text-right">
                          Unit Price
                        </th>
                        <th className="whitespace-nowrap text-right">Qty</th>
                        <th className="whitespace-nowrap text-right">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orderDetails.hasOwnProperty("products")
                        ? $_.take(
                            orderDetails.products,
                            orderDetails.products.length
                          ).map((value, key) => (
                            <tr key={key}>
                              <td className="!py-4">
                                <div className="flex items-center">
                                  <div className="w-10 h-10 image-fit zoom-in">
                                    <Tippy
                                      tag="img"
                                      className="rounded-lg border-2 border-white shadow-md tooltip"
                                      src={value.prodRefId.productImage[0].url}
                                      onError={({ currentTarget }) => {
                                        currentTarget.onerror = null; // prevents looping
                                        currentTarget.src =
                                          "https://fiberopticassy.com/wp-content/uploads/sites/13/2021/09/white-image-copia.png";
                                      }}

                                      // content={`Uploaded at ${faker.dates[0]}`}
                                    />
                                  </div>
                                  <a
                                    href=""
                                    className="font-medium whitespace-nowrap ml-4"
                                  >
                                    {value.prodRefId.name}
                                  </a>
                                </div>
                              </td>
                              <td className="text-right">
                                {currencyCodeFormat(value.unit_price)}
                              </td>
                              <td className="text-right">{value.quantity}</td>
                              <td className="text-right">
                                {currencyCodeFormat(
                                  value.unit_price * value.quantity
                                )}
                              </td>
                            </tr>
                          ))
                        : null}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="intro-y grid grid-cols-12 gap-5 mt-5">
            {/* <div className="col-span-12 lg:col-span-12 2xl:col-span-12"> */}

            <div className="col-span-12 lg:col-span-6 2xl:col-span-6">
              <div className=" box p-5 rounded-md mt-5">
                <div className="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5 mb-5">
                  <div className="font-medium text-base truncate">
                    Transaction Details
                  </div>
                  <a href="" className="flex items-center ml-auto text-primary">
                    <Lucide icon="Edit" className="w-4 h-4 mr-2" /> Repeat the
                    Order
                  </a>
                </div>
                <div className="flex items-center">
                  <Lucide
                    icon="Clipboard"
                    className="w-4 h-4 text-slate-500 mr-2"
                  />
                  Order Id:
                  <a href="" className="underline decoration-dotted ml-1">
                    {orderDetails.orderId}
                  </a>
                </div>
                <div className="flex items-center mt-3">
                  <Lucide
                    icon="Clipboard"
                    className="w-4 h-4 text-slate-500 mr-2"
                  />
                  Invoice Id:
                  <a href="" className="underline decoration-dotted ml-1">
                    {orderDetails.hasOwnProperty("paymentRefId")
                      ? orderDetails.paymentRefId.paymentId
                      : ""}
                  </a>
                </div>
                <div className="flex items-center mt-3">
                  <Lucide
                    icon="Calendar"
                    className="w-4 h-4 text-slate-500 mr-2"
                  />
                  Purchase Date:
                  {orderDetails.hasOwnProperty("paymentRefId")
                    ? moment(orderDetails.paymentRefId.paymentDate)
                        .utc()
                        .format("DD-MMM-YYYY")
                    : ""}
                </div>
                <div className="flex items-center mt-3">
                  <Lucide
                    icon="Clock"
                    className="w-4 h-4 text-slate-500 mr-2"
                  />
                  Transaction Status:
                  {orderDetails.hasOwnProperty("paymentRefId") ? (
                    orderDetails.paymentRefId.status == "unpaid" ? (
                      <span className="bg-danger/20 text-danger rounded px-2 ml-1">
                        {orderDetails.paymentRefId.status}
                      </span>
                    ) : (
                      <span className="bg-success/20 text-success rounded px-2 ml-1">
                        {orderDetails.paymentRefId.status}
                      </span>
                    )
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 2xl:col-span-6">
              <div className="box p-5 rounded-md mt-5">
                <div className="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5 mb-5">
                  <div className="font-medium text-base truncate">
                    Buyer Details
                  </div>
                  <a href="" className="flex items-center ml-auto text-primary">
                    <Lucide icon="Edit" className="w-4 h-4 mr-2" /> View Details
                  </a>
                </div>
                <div className="flex items-center">
                  <Lucide
                    icon="Clipboard"
                    className="w-4 h-4 text-slate-500 mr-2"
                  />
                  Name:
                  <a href="" className="underline decoration-dotted ml-1">
                    {orderDetails.hasOwnProperty("userRefId")
                      ? orderDetails.userRefId.name
                      : ""}
                  </a>
                </div>
                <div className="flex items-center mt-3">
                  <Lucide
                    icon="Calendar"
                    className="w-4 h-4 text-slate-500 mr-2"
                  />
                  Phone Number :
                  {orderDetails.hasOwnProperty("userRefId")
                    ? orderDetails.userRefId.phoneNumber
                    : ""}
                </div>
                <div className="flex items-center mt-3">
                  <Lucide
                    icon="MapPin"
                    className="w-4 h-4 text-slate-500 mr-2"
                  />
                  Address :
                  {orderDetails.hasOwnProperty("userRefId")
                    ? orderDetails.userRefId.address
                    : ""}
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 2xl:col-span-6">
              <div className="box p-5 rounded-md mt-5">
                <div className="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5 mb-5">
                  <div className="font-medium text-base truncate">
                    Payment Details
                  </div>
                </div>
                <div className="flex items-center">
                  <Lucide
                    icon="Clipboard"
                    className="w-4 h-4 text-slate-500 mr-2"
                  />
                  Payment Method:
                  <div className="ml-auto">
                    {orderDetails.hasOwnProperty("paymentRefId")
                      ? orderDetails.paymentRefId.method
                      : ""}
                  </div>
                </div>
                <div className="flex items-center mt-3">
                  <Lucide
                    icon="CreditCard"
                    className="w-4 h-4 text-slate-500 mr-2"
                  />
                  Total Price ( {orderDetails.totalQuantity} items )
                  {/* ({"    "}
                  {orderDetails.hasOwnProperty("products")
                    ? orderDetails.products.length
                    : ""}
                  items): */}
                  <div className="ml-auto">
                    {currencyCodeFormat(orderDetails.totalAmount)}
                  </div>
                </div>
                {/* <div className="flex items-center mt-3">
                  <Lucide
                    icon="CreditCard"
                    className="w-4 h-4 text-slate-500 mr-2"
                  />
                  Total Shipping Cost (800 gr):
                  <div className="ml-auto">$1,500.00</div>
                </div>
                <div className="flex items-center mt-3">
                  <Lucide
                    icon="CreditCard"
                    className="w-4 h-4 text-slate-500 mr-2"
                  />
                  Shipping Insurance:
                  <div className="ml-auto">$600.00</div>
                </div> */}
                <div className="flex items-center border-t border-slate-200/60 dark:border-darkmode-400 pt-5 mt-5 font-medium">
                  <Lucide
                    icon="CreditCard"
                    className="w-4 h-4 text-slate-500 mr-2"
                  />
                  Grand Total:
                  <div className="ml-auto">
                    {currencyCodeFormat(orderDetails.totalAmount)}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 2xl:col-span-6">
              <div className="box p-5 rounded-md mt-5">
                <div className="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5 mb-5">
                  <div className="font-medium text-base truncate">
                    Shipping Information
                  </div>
                  <a href="" className="flex items-center ml-auto text-primary">
                    <Lucide icon="MapPin" className="w-4 h-4 mr-2" /> Tracking
                    Info
                  </a>
                </div>
                <div className="flex items-center">
                  <Lucide
                    icon="Clipboard"
                    className="w-4 h-4 text-slate-500 mr-2"
                  />
                  Courier :{" "}
                  {orderDetails.hasOwnProperty("userRefId")
                    ? orderDetails.userRefId.shippingInfo.courier
                    : ""}
                </div>
                <div className="flex items-center mt-3">
                  <Lucide
                    icon="Calendar"
                    className="w-4 h-4 text-slate-500 mr-2"
                  />
                  Tracking Number :{" "}
                  {orderDetails.hasOwnProperty("userRefId")
                    ? orderDetails.userRefId.shippingInfo.trackingNumber
                    : ""}
                  <Lucide icon="Copy" className="w-4 h-4 text-slate-500 ml-2" />
                </div>
                <div className="flex items-center mt-3">
                  <Lucide
                    icon="MapPin"
                    className="w-4 h-4 text-slate-500 mr-2"
                  />
                  Address :{" "}
                  {orderDetails.hasOwnProperty("userRefId")
                    ? orderDetails.userRefId.shippingInfo.address
                    : ""}
                </div>
              </div>
            </div>

            {/* </div> */}
          </div>
          {/* END: Transaction Details */}
          {/* END: Wizard Layout */}
        </ModalBody>
      </Modal>
      {/* END: Delete Confirmation Modal */}

      {/* BEGIN: Large Slide Over Content */}
      <Modal
        size="modal-xl"
        slideOver={true}
        show={largeSlideOverSizePreview}
        onHidden={() => {
          setLargeSlideOverSizePreview(false);
        }}
      >
        {/* <ModalHeader className="p-5">
                        <h2 className="font-medium text-base mr-auto">
                          Large Slide Over
                        </h2>
                      </ModalHeader> */}
        <ModalBody>
          <>
            <div className="intro-y flex flex-col sm:flex-row items-center mt-8">
              <h2 className="text-lg font-medium mr-auto">Invoice</h2>
              <div className="w-full sm:w-auto flex mt-4 sm:mt-0">
                <button className="btn btn-primary shadow-md mr-2">
                  Print
                </button>
                <Dropdown className="ml-auto sm:ml-0">
                  <DropdownToggle className="btn px-2 box">
                    <span className="w-5 h-5 flex items-center justify-center">
                      <Lucide icon="Plus" className="w-4 h-4" />
                    </span>
                  </DropdownToggle>
                  <DropdownMenu className="w-40">
                    <DropdownContent>
                      <DropdownContent>
                        <Lucide icon="File" className="w-4 h-4 mr-2" /> Export
                        Word
                      </DropdownContent>
                      <DropdownContent>
                        <Lucide icon="File" className="w-4 h-4 mr-2" /> Export
                        PDF
                      </DropdownContent>
                    </DropdownContent>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
            {/* BEGIN: Invoice */}
            <div className="intro-y box overflow-hidden mt-5">
              <div className="flex flex-col lg:flex-row pt-10 px-5 sm:px-20 sm:pt-20 lg:pb-20 text-center sm:text-left">
                <div className="font-semibold text-primary text-3xl">
                  INVOICE
                </div>
                <div className="mt-20 lg:mt-0 lg:ml-auto lg:text-right">
                  <div className="text-xl text-primary font-medium">
                    {import.meta.env.VITE_COMPANY_NAME}
                  </div>
                  <div className="mt-1">
                    {import.meta.env.VITE_COMPANY_EMAIL}
                  </div>
                  <div className="mt-1">
                    {import.meta.env.VITE_COMPANY_ADDRESS}
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row border-b px-5 sm:px-20 pt-10 pb-10 sm:pb-20 text-center sm:text-left">
                <div>
                  <div className="text-base text-slate-500">Client Details</div>
                  <div className="text-lg font-medium text-primary mt-2">
                    {orderDetails.hasOwnProperty("userRefId")
                      ? orderDetails.userRefId.name
                      : ""}
                  </div>
                  <div className="mt-1">
                    {orderDetails.hasOwnProperty("userRefId")
                      ? orderDetails.userRefId.email
                      : ""}
                  </div>
                  <div className="mt-1">
                    {orderDetails.hasOwnProperty("userRefId")
                      ? orderDetails.userRefId.address
                      : ""}
                  </div>
                </div>
                <div className="mt-10 lg:mt-0 lg:ml-auto lg:text-right">
                  <div className="text-base text-slate-500">Receipt</div>
                  <div className="text-lg text-primary font-medium mt-2">
                    #1923195
                  </div>
                  <div className="mt-1">Jan 02, 2021</div>
                </div>
              </div>
              <div className="intro-y grid grid-cols-11 gap-5 mt-5">
                <div className="col-span-12 lg:col-span-12 2xl:col-span-12">
                  <div className="box p-5 rounded-md">
                    <div className="overflow-auto lg:overflow-visible -mt-3">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th className="whitespace-nowrap !py-5">Product</th>
                            <th className="whitespace-nowrap text-right">
                              Unit Price
                            </th>
                            <th className="whitespace-nowrap text-right">
                              Qty
                            </th>
                            <th className="whitespace-nowrap text-right">
                              Total
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {orderDetails.hasOwnProperty("products")
                            ? $_.take(
                                orderDetails.products,
                                orderDetails.products.length
                              ).map((value, key) => (
                                <tr key={key}>
                                  <td className="!py-4">
                                    <div className="flex items-center">
                                      {/* <div className="w-10 h-10 image-fit zoom-in">
                                        <Tippy
                                          tag="img"
                                          alt="Image Not Found"
                                          className="rounded-lg border-2 border-white shadow-md tooltip"
                                          src={
                                            "https://" +
                                            value.productImage[0].url
                                          }
                                          // content={`Uploaded at ${faker.dates[0]}`}
                                        />
                                      </div> */}
                                      <a
                                        href=""
                                        className="font-medium whitespace-nowrap ml-4"
                                      >
                                        {value.prodRefId.name}
                                      </a>
                                    </div>
                                  </td>
                                  <td className="text-right">
                                    {currencyCodeFormat(value.unit_price)}
                                  </td>
                                  <td className="text-right">
                                    {value.quantity}
                                  </td>
                                  <td className="text-right">
                                    {currencyCodeFormat(
                                      value.unit_price * value.quantity
                                    )}
                                  </td>
                                </tr>
                              ))
                            : null}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="px-5 sm:px-16 py-10 sm:py-20">
                <div className="overflow-x-auto">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="border-b-2 dark:border-darkmode-400 whitespace-nowrap">
                          DESCRIPTION
                        </th>
                        <th className="border-b-2 dark:border-darkmode-400 text-right whitespace-nowrap">
                          QTY
                        </th>
                        <th className="border-b-2 dark:border-darkmode-400 text-right whitespace-nowrap">
                          PRICE
                        </th>
                        <th className="border-b-2 dark:border-darkmode-400 text-right whitespace-nowrap">
                          SUBTOTAL
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border-b dark:border-darkmode-400">
                          <div className="font-medium whitespace-nowrap">
                            Midone HTML Admin Template
                          </div>
                          <div className="text-slate-500 text-sm mt-0.5 whitespace-nowrap">
                            Regular License
                          </div>
                        </td>
                        <td className="text-right border-b dark:border-darkmode-400 w-32">
                          2
                        </td>
                        <td className="text-right border-b dark:border-darkmode-400 w-32">
                          $25
                        </td>
                        <td className="text-right border-b dark:border-darkmode-400 w-32 font-medium">
                          $50
                        </td>
                      </tr>
                      <tr>
                        <td className="border-b dark:border-darkmode-400">
                          <div className="font-medium whitespace-nowrap">
                            Vuejs Admin Template
                          </div>
                          <div className="text-slate-500 text-sm mt-0.5 whitespace-nowrap">
                            Regular License
                          </div>
                        </td>
                        <td className="text-right border-b dark:border-darkmode-400 w-32">
                          1
                        </td>
                        <td className="text-right border-b dark:border-darkmode-400 w-32">
                          $25
                        </td>
                        <td className="text-right border-b dark:border-darkmode-400 w-32 font-medium">
                          $25
                        </td>
                      </tr>
                      <tr>
                        <td className="border-b dark:border-darkmode-400">
                          <div className="font-medium whitespace-nowrap">
                            React Admin Template
                          </div>
                          <div className="text-slate-500 text-sm mt-0.5 whitespace-nowrap">
                            Regular License
                          </div>
                        </td>
                        <td className="text-right border-b dark:border-darkmode-400 w-32">
                          1
                        </td>
                        <td className="text-right border-b dark:border-darkmode-400 w-32">
                          $25
                        </td>
                        <td className="text-right border-b dark:border-darkmode-400 w-32 font-medium">
                          $25
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="font-medium whitespace-nowrap">
                            Laravel Admin Template
                          </div>
                          <div className="text-slate-500 text-sm mt-0.5 whitespace-nowrap">
                            Regular License
                          </div>
                        </td>
                        <td className="text-right w-32">3</td>
                        <td className="text-right w-32">$25</td>
                        <td className="text-right w-32 font-medium">$75</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div> */}
              <div className="px-5 sm:px-20 pb-10 sm:pb-20 flex flex-col-reverse sm:flex-row ">
                <div className="text-center sm:text-left mt-10 sm:mt-0 ">
                  <div className="text-base text-slate-500">Bank Transfer</div>
                  <div className="text-lg text-primary font-medium mt-2">
                    {import.meta.env.VITE_BANK_ACCOUNT_HOLDER_NAME}
                  </div>
                  <div className="mt-1">
                    Bank Account : {import.meta.env.VITE_BANK_ACCOUNT_NUMBER}
                  </div>
                  <div className="mt-1">
                    Code : {import.meta.env.VITE_BANK_ACCOUNT_CODE}
                  </div>
                </div>
                <div className="text-center sm:text-right sm:ml-auto">
                  <div className="text-base text-slate-500">Total Amount</div>
                  <div className="text-xl text-primary font-medium mt-2">
                    {currencyCodeFormat(FindTotal())}
                  </div>
                  <div className="mt-1">Taxes included</div>
                </div>
              </div>
            </div>
            {/* END: Invoice */}
          </>
        </ModalBody>
      </Modal>
      {/* END: Large Slide Over Content */}
      {/* BEGIN: Delete Confirmation Modal */}
      <Modal
        show={deleteConfirmationModal}
        onHidden={() => {
          setDeleteConfirmationModal(false);
        }}
      >
        <ModalBody className="p-0">
          <div className="p-5 text-center">
            <Lucide
              icon="Repeat"
              className="w-16 h-16 text-danger mx-auto mt-3"
            />
            <div className="text-3xl mt-5">Are you sure?</div>
            <div className="text-slate-500 mt-2">
              Do you really want to re-create this order <br />
            </div>
          </div>
          <div className="px-5 pb-8 text-center">
            <button
              type="button"
              onClick={() => {
                setDeleteConfirmationModal(false);
              }}
              className="btn btn-outline-secondary w-24 mr-1"
            >
              Cancel
            </button>
            <button type="button" className="btn btn-success w-24">
              Create
            </button>
          </div>
        </ModalBody>
      </Modal>
      {/* END: Delete Confirmation Modal */}
    </>
  );
}

export default Main;
