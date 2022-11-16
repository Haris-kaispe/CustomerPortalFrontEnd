import { all, fork } from "redux-saga/effects";

//public
import OrderManagementSaga from "./orderManagement/saga";
import TransactionHistorySaga from "./transactionHistory/saga";
import ProductListSaga from "./productList/saga";
import SalesOrderListSaga from "./salesOrderList/saga";
import HelpSaga from "./help/saga";
import LoginSaga from "./login/saga";

export default function* rootSaga() {
  yield all([
    //public
    fork(OrderManagementSaga),
    fork(TransactionHistorySaga),
    fork(ProductListSaga),
    fork(SalesOrderListSaga),
    fork(HelpSaga),
    fork(LoginSaga),
  ]);
}
