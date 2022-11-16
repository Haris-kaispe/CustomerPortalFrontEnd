import { combineReducers } from "redux";

import OrderManagementReducer from "./orderManagement/reducer";
import TransactionHistoryReducer from "./transactionHistory/reducer";
import ProductListReducer from "./productList/reducer";
import SalesOrderListReducer from "./salesOrderList/reducer";
import HelpReducer from "./help/reducer";
import LoginReducer from "./login/reducer";

const rootReducer = combineReducers({
  OrderManagementReducer,
  TransactionHistoryReducer,
  ProductListReducer,
  SalesOrderListReducer,
  HelpReducer,
  LoginReducer,
});

export default rootReducer;
