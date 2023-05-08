import { atom } from "recoil";

const sideMenu = atom({
  key: "sideMenu",
  default: {
    menu: [
      {
        icon: "Home",
        pathname: "/dashboard",
<<<<<<< HEAD
        title: "Dashboard"
=======
        title: "Dashboard",
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      },
      {
        icon: "Layout",
        pathname: "/order-management",
<<<<<<< HEAD
        title: "Order Management"
=======
        title: "Order Management",
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      },
      {
        icon: "TrendingUp",
        pathname: "/transaction-history",
<<<<<<< HEAD
        title: "Transaction History"
=======
        title: "Transaction History",
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      },
      {
        icon: "List",
        pathname: "/product-list",
<<<<<<< HEAD
        title: "Product List"
=======
        title: "Product List",
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      },
      {
        icon: "Framer",
        pathname: "/create-sales-order",
<<<<<<< HEAD
        title: "Create Sales Order"
=======
        title: "Create Sales Order",
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      },
      {
        icon: "Grid",
        pathname: "/sales-order-list",
<<<<<<< HEAD
        title: "Sales Order List"
=======
        title: "Sales Order List",
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      },
      {
        icon: "Phone",
        pathname: "/help",
<<<<<<< HEAD
        title: "Contact"
      }
    ]
  }
=======
        title: "Contact",
      },
    ],
  },
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

export { sideMenu };
