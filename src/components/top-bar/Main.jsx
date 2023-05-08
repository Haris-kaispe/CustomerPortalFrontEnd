<<<<<<< HEAD
import {
  Dropdown,
  DropdownContent,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Lucide
} from "@/base-components";
import { darkMode as darkModeStore, darkModeValue } from "@/stores/dark-mode";
import { useDispatch, useSelector } from "react-redux";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { helper as $h } from "@/utils";
import { Fragment } from "react";
import alternateImage from "../../assets/images/gallery.png";
import classnames from "classnames";
import dom from "@left4code/tw-starter/dist/js/dom";
import { logoutUser } from "../../store/actions";
import { QuantityChange as onQuantityChange } from "../../store/actions";
import { useNavigate } from "react-router-dom";

function Main() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

=======
import { useState, useEffect } from "react";
import {
  Lucide,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  DropdownHeader,
  DropdownDivider
} from "@/base-components";
import { faker as $f } from "@/utils";
import * as $_ from "lodash";
import classnames from "classnames";

import jwt from "jwt-decode"; // import dependency

import { Link, useNavigate } from "react-router-dom";

// import { Logout as ActionLogout } from "../../store/actions";

//import { useLocalStorage } from "../../hooks/useLocalStorage";

// import * as Const from "../../constants/Constants";

import { useSelector, useDispatch } from "react-redux";

import { QuantityChange as onQuantityChange } from "../../store/actions";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { darkModeValue, darkMode as darkModeStore } from "@/stores/dark-mode";
import dom from "@left4code/tw-starter/dist/js/dom";

function Main(props) {
  const dispatch = useDispatch();

>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
  const darkMode = useRecoilValue(darkModeStore);
  const setDarkModeValue = useSetRecoilState(darkModeValue);

  const setDarkModeClass = () => {
    darkMode ? dom("html").addClass("dark") : dom("html").removeClass("dark");
  };

  const switchMode = () => {
    setDarkModeValue(() => !darkMode);
    localStorage.setItem("darkMode", !darkMode);
    setDarkModeClass();
  };

  setDarkModeClass();

<<<<<<< HEAD
=======
  const [searchDropdown, setSearchDropdown] = useState(false);

  const [userData, setuserData] = useState({});
  const showSearchDropdown = () => {
    setSearchDropdown(true);
  };
  const hideSearchDropdown = () => {
    setSearchDropdown(false);
  };

  const navigate = useNavigate();

>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
  const { QuantityofEachProduct } = useSelector((state) => ({
    QuantityofEachProduct: state.ProductListReducer?.QuantityofEachProduct
  }));

  const removeElement = (from, product) => {
    dispatch(onQuantityChange({ record: product, action: from }));
  };

<<<<<<< HEAD
  return (
    <Fragment>
      <div className="top-bar">
        <nav aria-label="breadcrumb" className="-intro-x mr-auto hidden sm:flex"></nav>
=======
  useEffect(() => {
    if (!userData.hasOwnProperty("name")) {
      PopulateUserData();
    }
  }, [userData, QuantityofEachProduct]);

  const PopulateUserData = () => {
    try {
      const token = JSON.parse(localStorage.getItem("authUser"));

      const user = jwt(token.accessToken);
      setuserData(user);
    } catch (err) {}
  };

  return (
    <>
      {/* BEGIN: Top Bar */}
      <div className="top-bar">
        {/* BEGIN: Breadcrumb */}
        <nav aria-label="breadcrumb" className="-intro-x mr-auto hidden sm:flex">
          {/* <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Application</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Dashboard
              </li>
            </ol> */}
        </nav>
        {/* END: Breadcrumb */}
        {/* BEGIN: Search */}
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
        <div>
          <button
            id="theme-toggle"
            type="button"
            className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-5"
            onClick={switchMode}
          >
            {darkMode == true ? (
              <Lucide icon="Moon" className="notification__icon dark:text-slate-500"></Lucide>
            ) : (
              <Lucide icon="Sun" className="notification__icon dark:text-slate-500"></Lucide>
            )}
          </button>
        </div>

<<<<<<< HEAD
        {$h.getRole() == "customer" ? (
          <Dropdown className="intro-x mr-auto sm:mr-8">
            <DropdownToggle
              tag="div"
              role="button"
              className={classnames(" notification cursor-pointer", {
                "notification--bullet":
                  QuantityofEachProduct.filter((data) => data.CartVisibility == true).length > 0
                    ? true
                    : false
              })}
            >
              <Lucide
                icon="ShoppingCart"
                className="notification__icon dark:text-slate-500"
              ></Lucide>
            </DropdownToggle>
            <DropdownMenu className="notification-content pt-2">
              <DropdownContent tag="div" className="notification-content__box">
                <div className="notification-content__title"> Cart</div>
                {QuantityofEachProduct.filter((data) => data.CartVisibility == true).length == 0 ? (
                  <div>No items found</div>
                ) : null}
                {QuantityofEachProduct.filter((data) => data.CartVisibility == true).map(
                  (rec, index) => {
                    return (
                      <div
                        key={index}
                        className={classnames({
                          "cursor-pointer relative flex items-center": true,
                          "mt-5": index
                        })}
                      >
                        <div className="w-12 h-12 flex-none image-fit mr-1">
                          <img
                            alt="Image Not Found"
                            className="rounded-full"
                            src={
                              rec?.productImage[0]?.url ? rec.productImage[0].url : alternateImage
                            }
                            onError={({ currentTarget }) => {
                              currentTarget.onerror = null;
                              currentTarget.src = alternateImage;
                            }}
                          />
                        </div>
                        <div className="flex-auto text-sm w-35 items-center m-1">
                          <div className="font-bold"> {rec.name}</div>
                          <div>Price : ${rec.price}</div>
                          <div className="text-gray-500">Qty : {rec.addToCart}</div>
                        </div>
                        <div className="flex flex-col w-18 font-medium items-end">
                          <div className="w-4 h-4 mb-8 hover:bg-red-200 rounded-full cursor-pointer text-red-700">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              height="100%"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="feather feather-trash-2 "
                              onClick={() => {
                                removeElement("remove", rec);
                              }}
                            >
                              <polyline points="3 6 5 6 21 6"></polyline>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              <line x1="10" y1="11" x2="10" y2="17"></line>
                              <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
              </DropdownContent>
            </DropdownMenu>
          </Dropdown>
        ) : null}

=======
        {/* <button
          id="theme-toggle"
          type="button"
          className"text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
        >
          {/* <svg
            id="theme-toggle-dark-icon"
            className"w-5 h-5 hidden"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
          <svg
            id="theme-toggle-light-icon"
            className"w-5 h-5 hidden"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg> */}
        {/* </button>  */}
        {/*
          <div className="intro-x relative mr-3 sm:mr-6">
            <div className="search hidden sm:block">
              <input
                type="text"
                className="search__input form-control border-transparent"
                placeholder="Search..."
                onFocus={showSearchDropdown}
                onBlur={hideSearchDropdown}
              />
              <Lucide icon="Search" className="search__icon dark:text-slate-500" />
            </div>
            <a className="notification sm:hidden" href="">
              <Lucide icon="Search" className="notification__icon dark:text-slate-500" />
            </a>
            <div
              className={classnames({
                "search-result": true,
                show: searchDropdown,
              })}
            >
              <div className="search-result__content">
                <div className="search-result__content__title">Pages</div>
                <div className="mb-5">
                  <a href="" className="flex items-center">
                    <div className="w-8 h-8 bg-success/20 dark:bg-success/10 text-success flex items-center justify-center rounded-full">
                      <Lucide icon="Inbox" className="w-4 h-4" />
                    </div>
                    <div className="ml-3">Mail Settings</div>
                  </a>
                  <a href="" className="flex items-center mt-2">
                    <div className="w-8 h-8 bg-pending/10 text-pending flex items-center justify-center rounded-full">
                      <Lucide icon="Users" className="w-4 h-4" />
                    </div>
                    <div className="ml-3">Users & Permissions</div>
                  </a>
                  <a href="" className="flex items-center mt-2">
                    <div className="w-8 h-8 bg-primary/10 dark:bg-primary/20 text-primary/80 flex items-center justify-center rounded-full">
                      <Lucide icon="CreditCard" className="w-4 h-4" />
                    </div>
                    <div className="ml-3">Transactions Report</div>
                  </a>
                </div>
                <div className="search-result__content__title">Users</div>
                <div className="mb-5">
                  {$_.take($f(), 4).map((faker, fakerKey) => (
                    <a key={fakerKey} href="" className="flex items-center mt-2">
                      <div className="w-8 h-8 image-fit">
                        <img
                          alt="Customer Portal - KAISPE"
                          className="rounded-full"
                          src={faker.photos[0]}
                        />
                      </div>
                      <div className="ml-3">{faker.users[0].name}</div>
                      <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                        {faker.users[0].email}
                      </div>
                    </a>
                  ))}
                </div>
                <div className="search-result__content__title">Products</div>
                {$_.take($f(), 4).map((faker, fakerKey) => (
                  <a key={fakerKey} href="" className="flex items-center mt-2">
                    <div className="w-8 h-8 image-fit">
                      <img
                        alt="Customer Portal - KAISPE"
                        className="rounded-full"
                        src={faker.images[0]}
                      />
                    </div>
                    <div className="ml-3">{faker.products[0].name}</div>
                    <div className="ml-auto w-48 truncate text-slate-500 text-xs text-right">
                      {faker.products[0].category}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          */}
        <Dropdown className="intro-x mr-auto sm:mr-8">
          <DropdownToggle
            tag="div"
            role="button"
            className={classnames(" notification cursor-pointer", {
              "notification--bullet":
                QuantityofEachProduct.filter((data) => data.CartVisibility == true).length > 0
                  ? true
                  : false
            })}
          >
            <Lucide icon="ShoppingCart" className="notification__icon dark:text-slate-500"></Lucide>
          </DropdownToggle>
          <DropdownMenu className="notification-content pt-2">
            <DropdownContent tag="div" className="notification-content__box">
              <div className="notification-content__title"> Cart</div>
              {QuantityofEachProduct.filter((data) => data.CartVisibility == true).length == 0 ? (
                <div>No items found</div>
              ) : null}
              {QuantityofEachProduct.filter((data) => data.CartVisibility == true).map(
                (rec, index) => {
                  return (
                    <div
                      key={index}
                      className={classnames({
                        "cursor-pointer relative flex items-center": true,
                        "mt-5": index
                      })}
                    >
                      <div className="w-12 h-12 flex-none image-fit mr-1">
                        <img
                          alt="Image Not Found"
                          className="rounded-full"
                          src={rec.productImage[0].url}
                          onError={({ currentTarget }) => {
                            currentTarget.onerror = null; // prevents looping
                            currentTarget.src =
                              "https://fiberopticassy.com/wp-content/uploads/sites/13/2021/09/white-image-copia.png";
                          }}
                        />
                      </div>
                      <div className="flex-auto text-sm w-35 items-center m-1">
                        <div className="font-bold"> {rec.name}</div>
                        <div>Price : ${rec.price}</div>
                        <div className="text-gray-500">Qty : {rec.addToCart}</div>
                      </div>
                      <div className="flex flex-col w-18 font-medium items-end">
                        <div className="w-4 h-4 mb-8 hover:bg-red-200 rounded-full cursor-pointer text-red-700">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-trash-2 "
                            onClick={() => {
                              removeElement("remove", rec);
                            }}
                          >
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            <line x1="10" y1="11" x2="10" y2="17"></line>
                            <line x1="14" y1="11" x2="14" y2="17"></line>
                          </svg>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </DropdownContent>
          </DropdownMenu>
        </Dropdown>
        {/* 
        {/* END: Search  */}
        {/* BEGIN: Notifications */}
        {/* <Dropdown className="intro-x mr-auto sm:mr-6">
          <DropdownToggle
            tag="div"
            role="button"
            className="notification notification--bullet cursor-pointer"
          >
            <Lucide
              icon="Bell"
              className="notification__icon dark:text-slate-500"
            />
          </DropdownToggle>
          <DropdownMenu className="notification-content pt-2">
            <DropdownContent tag="div" className="notification-content__box">
              <div className="notification-content__title">Notifications</div>
              {$_.take($f(), 5).map((faker, fakerKey) => (
                <div
                  key={fakerKey}
                  className={classnames({
                    "cursor-pointer relative flex items-center": true,
                    "mt-5": fakerKey,
                  })}
                >
                  <div className="w-12 h-12 flex-none image-fit mr-1">
                    <img
                      alt="Customer Portal - KAISPE"
                      className="rounded-full"
                      src={faker.photos[0]}
                    />
                    <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"></div>
                  </div>
                  <div className="ml-2 overflow-hidden">
                    <div className="flex items-center">
                      <a href="" className="font-medium truncate mr-5">
                        {faker.users[0].name}
                      </a>
                      <div className="text-xs text-slate-400 ml-auto whitespace-nowrap">
                        {faker.times[0]}
                      </div>
                    </div>
                    <div className="w-full truncate text-slate-500 mt-0.5">
                      {faker.news[0].shortContent}
                    </div>
                  </div>
                </div>
              ))}
            </DropdownContent>
          </DropdownMenu>
        </Dropdown> */}
        {/* END: Notifications  
        BEGIN: Account Menu */}
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
        <Dropdown className="intro-x w-8 h-8">
          <DropdownToggle
            tag="div"
            role="button"
<<<<<<< HEAD
            className="w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in mt-1"
=======
            className="w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in"
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
          >
            <Lucide icon="User" className="content-center w-full" />
          </DropdownToggle>
          <DropdownMenu className="w-56">
            <DropdownContent className="bg-primary text-white">
              <DropdownHeader tag="div" className="!font-normal">
<<<<<<< HEAD
                <div className="font-medium">{$h.getTokenData()?.name || "N/A"}</div>
                <div className="text-xs text-white mt-0.5 dark:text-slate-500">
                  {$h.getTokenData()?.email || "N/A"}
                </div>
              </DropdownHeader>
              <DropdownDivider className="border-white/[0.08]" />
              <DropdownItem
                className="hover:bg-white/5"
                // link={
                //   $h.getRole() == "customer"
                //     ? `/CustomerProfile?id=${$h.getTokenData().id}`
                //     : `/AdminProfile?id=${$h.getTokenData().id}`
                // }
                onClick={() => {
                  navigate(
                    $h.getRole() == "customer"
                      ? `/CustomerProfile?id=${$h.getTokenData().id}`
                      : `/AdminProfile?id=${$h.getTokenData().id}`
                  );
                }}
              >
                <Lucide icon="User" className="w-4 h-4 mr-2" /> Profile
              </DropdownItem>

              <DropdownDivider className="border-white/[0.08]" />
              <DropdownItem
                className="hover:bg-white/5"
                onClick={() => {
                  dispatch(logoutUser(navigate));
                }}
              >
=======
                <div className="font-medium">{userData.name}</div>
                <div className="text-xs text-white/70 mt-0.5 dark:text-slate-500">
                  {userData.email}
                </div>
              </DropdownHeader>
              <DropdownDivider className="border-white/[0.08]" />
              {/* <DropdownItem className="hover:bg-white/5">
                <Lucide icon="User" className="w-4 h-4 mr-2" /> Profile
              </DropdownItem>
              <DropdownItem className="hover:bg-white/5">
                <Lucide icon="Edit" className="w-4 h-4 mr-2" />
                Add Account
              </DropdownItem>
              <DropdownItem className="hover:bg-white/5">
                <Lucide icon="Lock" className="w-4 h-4 mr-2" /> Reset Password
              </DropdownItem>
              <DropdownItem className="hover:bg-white/5">
                <Lucide icon="HelpCircle" className="w-4 h-4 mr-2" /> Help
              </DropdownItem> */}
              <DropdownDivider className="border-white/[0.08]" />
              <DropdownItem className="hover:bg-white/5" link="/logout">
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
                <Lucide icon="ToggleRight" className="w-4 h-4 mr-2" />
                <div>Logout</div>
              </DropdownItem>
            </DropdownContent>
          </DropdownMenu>
        </Dropdown>
<<<<<<< HEAD
      </div>
    </Fragment>
=======
        {/* END: Account Menu */}
      </div>
      {/* END: Top Bar */}
    </>
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
  );
}

export default Main;
