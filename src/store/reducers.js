<<<<<<< HEAD
import DashboardReducer from "./dashboard/reducer";
import HelpReducer from "./help/reducer";
import LoginReducer from "./login/reducer";
import ManageUsersReducer from "./manageUsers/reducer";
import OrderManagementReducer from "./orderManagement/reducer";
import PlanReducer from "./plan/reducer";
import ProductListReducer from "./productList/reducer";
import SalesOrderListReducer from "./salesOrderList/reducer";
import TransactionHistoryReducer from "./transactionHistory/reducer";
import VendorReducer from "./vendor/reducer";
import { combineReducers } from "redux";
=======
import { combineReducers } from "redux";

import OrderManagementReducer from "./orderManagement/reducer";
import TransactionHistoryReducer from "./transactionHistory/reducer";
import ProductListReducer from "./productList/reducer";
import SalesOrderListReducer from "./salesOrderList/reducer";
import HelpReducer from "./help/reducer";
import LoginReducer from "./login/reducer";

import DashboardReducer from "./dashboard/reducer";
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75

const rootReducer = combineReducers({
  OrderManagementReducer,
  TransactionHistoryReducer,
  ProductListReducer,
  SalesOrderListReducer,
  HelpReducer,
  LoginReducer,
  DashboardReducer,
<<<<<<< HEAD
  ManageUsersReducer,
  PlanReducer,
  VendorReducer
});

// on logout all reducers will be reset
const appReducer = (state, action) => {
  if (action.type === "LOGOUT_USER") {
    state = undefined;
  }
  return rootReducer(state, action);
};

export default appReducer;

// export default rootReducer;
=======
});

export default rootReducer;
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
