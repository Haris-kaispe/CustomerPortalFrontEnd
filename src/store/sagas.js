import { all, fork } from "redux-saga/effects";

<<<<<<< HEAD
import DashboardSaga from "./dashboard/saga";
import HelpSaga from "./help/saga";
import ManageUsersSaga from "./manageUsers/saga";
import OrderManagementSaga from "./orderManagement/saga";
import PlanSaga from "./plan/saga";
import ProductListSaga from "./productList/saga";
import SalesOrderListSaga from "./salesOrderList/saga";
import TransactionHistorySaga from "./transactionHistory/saga";
import authSaga from "./login/saga";
import vendorSaga from "./vendor/saga";

//public
=======
//public
import OrderManagementSaga from "./orderManagement/saga";
import TransactionHistorySaga from "./transactionHistory/saga";
import ProductListSaga from "./productList/saga";
import SalesOrderListSaga from "./salesOrderList/saga";
import HelpSaga from "./help/saga";
import authSaga from "./login/saga";
import DashboardSaga from "./dashboard/saga";
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75

export default function* rootSaga() {
  yield all([
    //public
    fork(OrderManagementSaga),
    fork(TransactionHistorySaga),
    fork(ProductListSaga),
    fork(SalesOrderListSaga),
    fork(HelpSaga),
    fork(authSaga),
    fork(DashboardSaga),
<<<<<<< HEAD
    fork(ManageUsersSaga),
    fork(PlanSaga),
    fork(vendorSaga)
=======
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
  ]);
}
