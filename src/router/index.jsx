import { useRoutes } from "react-router-dom";
import SideMenu from "../layouts/side-menu/Main";
import SimpleMenu from "../layouts/simple-menu/Main";
import TopMenu from "../layouts/top-menu/Main";
import Dashboard from "../views/dashboard/Main";
import OrderManagement from "../views/orderManagement/Main";
import OrderTracking from "../views/orderTracking/Main";
import TransactionHistory from "../views/transactionHistory/Main"
import ProductList from "../views/productList/Main"
import CreateSalesOrder from "../views/createSalesOrder/Main"
import SalesOrderList from "../views/salesOrderList/Main"
import Profile  from "../views/profile/Main";
import Help from "../views/help/Main"

import Page2 from "../views/page-2/Main";

function Router() {
  const routes = [
    {
      path: "/",
      element: <SideMenu />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "order-management",
          element: <OrderManagement />,
        },
        {
          path: "order-tracking",
          element: <OrderTracking />,
        },
        // {
        //   path: "order-tracking",
        //   element: <OrderTracking />,
        // },
        {
          path: "product-list",
          element: <ProductList />,
        },
        {
          path: "transaction-history",
          element: <TransactionHistory />,
        },
        {
          path: "create-sales-order",
          element: <CreateSalesOrder />,
        },
        {
          path: "sales-order-list",
          element: <SalesOrderList />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "help",
          element: <Help />,
        },
        
        
      ],
    },
    
    {
      path: "/simple-menu",
      element: <SimpleMenu />,
      children: [
        {
          path: "page-1",
          element: <Dashboard />,
        },
        {
          path: "page-2",
          element: <Page2 />,
        },
      ],
    },
    {
      path: "/top-menu",
      element: <TopMenu />,
      children: [
        {
          path: "page-1",
          element: <Dashboard />,
        },
        {
          path: "page-2",
          element: <Page2 />,
        },
      ],
    },
  ];

  return useRoutes(routes);
}

export default Router;
