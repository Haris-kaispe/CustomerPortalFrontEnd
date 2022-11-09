import axios from "axios";
import { del, get, post, postformData, put } from "./api_helper";
import * as url from "./url_helper";

// Register Method
const postJwtRegister = (url, data) => {
  return axios
    .post(url, data)
    .then((response) => {
      if (response.status >= 200 || response.status <= 299)
        return response.data;
      throw response.data;
    })
    .catch((err) => {
      var message;
      if (err.response && err.response.status) {
        switch (err.response.status) {
          case 404:
            message = "Sorry! the page you are looking for could not be found";
            break;
          case 500:
            message =
              "Sorry! something went wrong, please contact our support team";
            break;
          case 401:
            message = "Invalid credentials";
            break;
          default:
            message = err[1];
            break;
        }
      }
      throw message;
    });
};

// get OrderManagement
const getOrderManagement = async (params) =>
  await get(url.GET_ORDER_MANAGEMENT + params);

//add OrderManagement
const addNewOrderManagement = (payload) =>
  post(url.ADD_ORDER_MANAGEMENT, payload);

//update OrderManagement
const updateOrderManagement = (payload) =>
  put(url.UPDATE_ORDER_MANAGEMENT + "/" + payload.code, payload);

// delete OrderManagement
const deleteOrderManagement = (payload) =>
  del(url.DELETE_ORDER_MANAGEMENT + "/" + payload.code);

// get TransactionHistory
const getTransactionHistory = async (params) =>
  await get(url.GET_PAYMENT_DETAILS + params);

//add OrderManagement
const addNewTransactionHistory = (payload) =>
  post(url.ADD_PAYMENT_DETAILS, payload);

//update OrderManagement
const updateTransactionHistory = (payload) =>
  put(url.UPDATE_PAYMENT_DETAILS + "/" + payload.code, payload);

// delete OrderManagement
const deleteTransactionHistory = (payload) =>
  del(url.DELETE_PAYMENT_DETAILS + "/" + payload.code);

// get ProductList
const getProductList = async (params) =>
  await get(url.GET_PRODUCT_LIST + params);

//add OrderManagement
const addNewProductList = (payload) => post(url.ADD_PRODUCT_LIST, payload);

//update OrderManagement
const updateProductList = (payload) =>
  put(url.UPDATE_PRODUCT_LIST + "/" + payload.code, payload);

// delete OrderManagement
const deleteProductList = (payload) =>
  del(url.DELETE_PRODUCT_LIST + "/" + payload.code);

// get SalesOrderList
const getSalesOrderList = async (params) =>
  await get(url.GET_ORDER_MANAGEMENT + params);

//add SalesOrderList
const addNewSalesOrderList = (payload) =>
  post(url.ADD_ORDER_MANAGEMENT, payload);

//update SalesOrderList
const updateSalesOrderList = (payload) =>
  put(url.UPDATE_ORDER_MANAGEMENT + "/" + payload.code, payload);

// delete SalesOrderList
const deleteSalesOrderList = (payload) =>
  del(url.DELETE_ORDER_MANAGEMENT + "/" + payload.code);

// get Help
const getHelp = async (params) => await get(url.GET_HELP + params);

//add OrderManagement
const addNewHelp = (payload) => postformData(url.ADD_HELP, payload);

//update OrderManagement
const updateHelp = (payload) =>
  put(url.UPDATE_HELP + "/" + payload.code, payload);

// delete OrderManagement
const deleteHelp = (payload) => del(url.DELETE_HELP + "/" + payload.code);

const addNewContact = (payload) => post(url.ADD_CONTACT, payload);

//=========================================

export {
  getOrderManagement,
  addNewOrderManagement,
  updateOrderManagement,
  deleteOrderManagement,
  getTransactionHistory,
  addNewTransactionHistory,
  updateTransactionHistory,
  deleteTransactionHistory,
  getProductList,
  addNewProductList,
  updateProductList,
  deleteProductList,
  getSalesOrderList,
  addNewSalesOrderList,
  updateSalesOrderList,
  deleteSalesOrderList,
  getHelp,
  addNewHelp,
  updateHelp,
  deleteHelp,
  addNewContact,
};
