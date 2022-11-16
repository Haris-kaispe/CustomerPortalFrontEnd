import { useRoutes } from "react-router-dom";

import SideMenu from "../layouts/side-menu/Main";
import Dashboard from "../views/dashboard/Main";
import OrderManagement from "../views/orderManagement/Main";
import ForgotPassword from "../views/forgotPassword/Main";
import OtpVerification from "../views/otpVerification/Main";
import OrderTracking from "../views/orderTracking/Main";
import TransactionHistory from "../views/transactionHistory/Main";
import ProductList from "../views/productList/Main";
import SalesOrderList from "../views/salesOrderList/Main";
import Profile from "../views/profile/Main";
import Help from "../views/help/Main";
import Login from "../views/login/Main";
import Register from "../views/register/Main";
import { Navigate } from "react-router-dom";
import * as Const from "../constants/Constants";

function Router() {
  const value = window.localStorage.getItem(Const.ACCESS_TOKEN);

  console.log("in router ", value);

  if (value === "undefined" || value === "") {
    var isLoggedIn = false;
    console.log("here:", value);
  } else {
    var isLoggedIn = true;
    console.log("here:2", value);
  }

  return useRoutes([
    {
      path: "/home",
      element: isLoggedIn ? <SideMenu /> : <Navigate to="/" />,
      children: [
        {
          path: "/home",
          element: <Dashboard />,
        },
        {
          path: "/home/order-management",
          element: <OrderManagement />,
        },
        {
          path: "/home/order-tracking",
          element: <OrderTracking />,
        },
        {
          path: "/home/product-list",
          element: <ProductList />,
        },
        {
          path: "/home/transaction-history",
          element: <TransactionHistory />,
        },
        // {
        //   path: "/home/create-sales-order",
        //   element: <CreateSalesOrder />,
        // },
        {
          path: "/home/sales-order-list",
          element: <SalesOrderList />,
        },
        {
          path: "/home/profile",
          element: <Profile />,
        },
        {
          path: "/home/help",
          element: <Help />,
        },
      ],
    },
    {
      path: "/",
      element: !isLoggedIn ? <Login /> : <Navigate to="/home" />,
      children: [{ path: "login", element: <Navigate to="/" /> }],
    },
    {
      path: "/register",
      element: !isLoggedIn ? <Register /> : <Navigate to="/home" />,
    },
    {
      path: "/forgot-password",
      element: !isLoggedIn ? <ForgotPassword /> : <Navigate to="/home" />,
    },
    {
      path: "/otp-verification",
      element: !isLoggedIn ? <OtpVerification /> : <Navigate to="/home" />,
    },
  ]);
}

export default Router;
