import { atom } from "recoil";

const sideMenu = atom({
  key: "sideMenu",
  default: {
    menu: [
      {
        icon: "Home",
        pathname: "/home",
        title: "Dashboard",
      },
      {
        icon: "Layout",
        pathname: "/home/order-management",
        title: "Order Management",
      },
      {
        icon: "TrendingUp",
        pathname: "/home/transaction-history",
        title: "Transaction History",
      },
      {
        icon: "List",
        pathname: "/home/product-list",
        title: "Product List",
      },
      // {
      //   icon: "Framer",
      //   pathname: "/home/create-sales-order",
      //   title: "Create Sales Order",
      // },
      {
        icon: "Grid",
        pathname: "/home/sales-order-list",
        title: "Sales Order List",
      },
      {
        icon: "Phone",
        pathname: "/home/help",
        title: "Contact",
      },
    ],
  },
});

export { sideMenu };
