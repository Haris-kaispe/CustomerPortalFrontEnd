import {
<<<<<<< HEAD
  GET_CANCEL_ORDERS,
  GET_CANCEL_ORDERS_FAIL,
  GET_CANCEL_ORDERS_SUCCESS,
  GET_MONTHLY_ORDER_REPORT,
  GET_MONTHLY_ORDER_REPORT_FAIL,
  GET_MONTHLY_ORDER_REPORT_SUCCESS,
  GET_OPEN_ORDERS,
  GET_OPEN_ORDERS_FAIL,
  GET_OPEN_ORDERS_SUCCESS,
  GET_SELL_ORDER_REPORT,
  GET_SELL_ORDER_REPORT_FAIL,
  GET_SELL_ORDER_REPORT_SUCCESS,
  GET_TOP_PRODUCTS,
  GET_TOP_PRODUCTS_FAIL,
  GET_TOP_PRODUCTS_SUCCESS,
  GET_TOTAL_ORDERS,
  GET_TOTAL_ORDERS_FAIL,
  GET_TOTAL_ORDERS_PAYMENT,
  GET_TOTAL_ORDERS_PAYMENT_FAIL,
  GET_TOTAL_ORDERS_PAYMENT_SUCCESS,
  GET_TOTAL_ORDERS_SUCCESS
=======
  GET_TOTAL_ORDERS_SUCCESS,
  GET_TOTAL_ORDERS_FAIL,
  GET_OPEN_ORDERS_SUCCESS,
  GET_OPEN_ORDERS_FAIL,
  GET_CANCEL_ORDERS_SUCCESS,
  GET_CANCEL_ORDERS_FAIL,
  GET_TOTAL_ORDERS_PAYMENT_SUCCESS,
  GET_TOTAL_ORDERS_PAYMENT_FAIL,
  GET_TOP_PRODUCTS_SUCCESS,
  GET_TOP_PRODUCTS_FAIL,
  GET_MONTHLY_ORDER_REPORT_SUCCESS,
  GET_MONTHLY_ORDER_REPORT_FAIL,
  GET_SELL_ORDER_REPORT_SUCCESS,
  GET_SELL_ORDER_REPORT_FAIL,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
} from "./actionTypes";

const INIT_STATE = {
  TotalOrders: {},
  OpenOrders: {},
  CancelOrders: {},
  TotalOrdersPayment: {},
  TopProducts: [],
  SalesReport: [],
  OrderReport: [],
<<<<<<< HEAD

  TotalOrdersLoading: false,
  TotalOrdersLoadingError: null,

  OpenOrdersLoading: false,
  OpenOrdersLoadingError: null,

  CancelOrdersLoading: false,
  CancelOrdersLoadingError: null,

  TotalOrdersPaymentLoading: false,
  TotalOrdersPaymentLoadingError: null,

  TopProductsLoading: false,
  TopProductsLoadingError: null,

  SalesReportLoading: false,
  SalesReportLoadingError: null,

  OrderReportLoading: false,
  OrderReportLoadingError: null
=======
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
};

const DashboardReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
<<<<<<< HEAD
    case GET_TOTAL_ORDERS:
      return {
        ...state,
        TotalOrdersLoading: true,
        TotalOrdersLoadingError: null
      };

=======
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
    case GET_TOTAL_ORDERS_SUCCESS:
      return {
        ...state,
        TotalOrders: action.payload,
<<<<<<< HEAD
        TotalOrdersLoading: false,
        TotalOrdersLoadingError: null
=======
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    case GET_TOTAL_ORDERS_FAIL:
      return {
        ...state,
<<<<<<< HEAD
        TotalOrdersLoading: false,
        TotalOrdersLoadingError: action.payload
      };

    case GET_TOTAL_ORDERS_PAYMENT:
      return {
        ...state,
        TotalOrdersPaymentLoading: true,
        TotalOrdersPaymentLoadingError: null
=======
        error: action.payload,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    case GET_TOTAL_ORDERS_PAYMENT_SUCCESS:
      return {
        ...state,
        TotalOrdersPayment: action.payload,
<<<<<<< HEAD
        TotalOrdersPaymentLoading: false,
        TotalOrdersPaymentLoadingError: null
=======
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    case GET_TOTAL_ORDERS_PAYMENT_FAIL:
      return {
        ...state,
<<<<<<< HEAD
        TotalOrdersPaymentLoading: false,
        TotalOrdersPaymentLoadingError: action.payload
      };

    case GET_OPEN_ORDERS:
      return {
        ...state,
        OpenOrdersLoading: true,
        OpenOrdersLoadingError: null
=======
        error: action.payload,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    case GET_OPEN_ORDERS_SUCCESS:
      return {
        ...state,
        OpenOrders: action.payload,
<<<<<<< HEAD
        OpenOrdersLoading: false,
        OpenOrdersLoadingError: null
=======
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    case GET_OPEN_ORDERS_FAIL:
      return {
        ...state,
<<<<<<< HEAD
        OpenOrdersLoading: false,
        OpenOrdersLoadingError: action.payload
      };

    case GET_CANCEL_ORDERS:
      return {
        ...state,
        CancelOrdersLoading: true,
        CancelOrdersLoadingError: null
=======
        error: action.payload,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    case GET_CANCEL_ORDERS_SUCCESS:
      return {
        ...state,
        CancelOrders: action.payload,
<<<<<<< HEAD
        CancelOrdersLoading: false,
        CancelOrdersLoadingError: null
=======
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    case GET_CANCEL_ORDERS_FAIL:
      return {
        ...state,
<<<<<<< HEAD
        CancelOrdersLoading: false,
        CancelOrdersLoadingError: action.payload
      };

    case GET_TOP_PRODUCTS:
      return {
        ...state,
        TopProductsLoading: true,
        TopProductsLoadingError: null
=======
        error: action.payload,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    case GET_TOP_PRODUCTS_SUCCESS:
      return {
        ...state,
        TopProducts: action.payload,
<<<<<<< HEAD
        TopProductsLoading: false,
        TopProductsLoadingError: null
=======
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    case GET_TOP_PRODUCTS_FAIL:
      return {
        ...state,
<<<<<<< HEAD
        TopProductsLoading: false,
        TopProductsLoadingError: action.payload
      };

    case GET_SELL_ORDER_REPORT:
      return {
        ...state,
        SalesReportLoading: true,
        SalesReportLoadingError: null
=======
        error: action.payload,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    case GET_SELL_ORDER_REPORT_SUCCESS:
      return {
        ...state,
        SalesReport: action.payload,
<<<<<<< HEAD
        SalesReportLoading: false,
        SalesReportLoadingError: null
=======
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    case GET_SELL_ORDER_REPORT_FAIL:
      return {
        ...state,
<<<<<<< HEAD
        SalesReportLoading: false,
        SalesReportLoadingError: action.payload
      };

    case GET_MONTHLY_ORDER_REPORT:
      return {
        ...state,
        OrderReportLoading: true,
        OrderReportLoadingError: null
=======
        error: action.payload,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    case GET_MONTHLY_ORDER_REPORT_SUCCESS:
      return {
        ...state,
        OrderReport: action.payload,
<<<<<<< HEAD
        OrderReportLoading: false,
        OrderReportLoadingError: null
=======
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    case GET_MONTHLY_ORDER_REPORT_FAIL:
      return {
        ...state,
<<<<<<< HEAD
        OrderReportLoading: false,
        OrderReportLoadingError: action.payload
=======
        error: action.payload,
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      };

    default:
      return state;
  }
};

export default DashboardReducer;
