import {
  Lucide,
  Tippy,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  Litepicker,
  TinySlider,
} from "@/base-components";
import { faker as $f } from "@/utils";
import * as $_ from "lodash";
import classnames from "classnames";
import ReportLineChart from "@/components/report-line-chart/Main";
import ReportPieChart from "@/components/report-pie-chart/Main";
import ReportDonutChart from "@/components/report-donut-chart/Main";
import ReportDonutChart1 from "@/components/report-donut-chart-1/Main";
import SimpleLineChart1 from "@/components/simple-line-chart-1/Main";
import ReportMap from "@/components/report-map/Main";
import { useRef, useState } from "react";

import womanIllustrationUrl from "@/assets/images/woman-illustration.svg";
import phoneIllustrationUrl from "@/assets/images/phone-illustration.svg";

function Main() {
  const [salesReportFilter, setSalesReportFilter] = useState();
  const importantNotesRef = useRef();
  const prevImportantNotes = () => {
    importantNotesRef.current.tns.goTo("prev");
  };
  const nextImportantNotes = () => {
    importantNotesRef.current.tns.goTo("next");
  };

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 2xl:col-span-12">
        <div className="grid grid-cols-12 gap-6">
          {/* BEGIN: General Report */}
          <div className="col-span-12 mt-8">
            <div className="intro-y flex items-center h-10">
              <h2 className="text-lg font-medium truncate mr-5">
                Account Statistics
              </h2>
              <a href="" className="ml-auto flex items-center text-primary">
                <Lucide icon="RefreshCcw" className="w-4 h-4 mr-3" /> Reload
                Data
              </a>
            </div>
            <div className="grid grid-cols-12 gap-4  mt-5">
              <div className="col-span-12 sm:col-span-6 xl:col-span-2 intro-y">
                <div className="report-box zoom-in">
                  <div className="box p-5">
                    <div className="flex">
                      <Lucide
                        icon="ShoppingCart"
                        className="report-box__icon text-primary"
                      />
                      <div className="ml-auto">
                        <Tippy
                          tag="div"
                          className="report-box__indicator bg-success cursor-pointer"
                          content="33% Higher than last month"
                        >
                          This Week 33%
                          <Lucide icon="ChevronUp" className="w-4 h-4 ml-0.5" />
                        </Tippy>
                      </div>
                    </div>
                    <div className="text-3xl font-medium leading-8 mt-6">
                      4,710
                    </div>
                    <div className="text-base text-slate-500 mt-1">
                      Total Orders
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-6 xl:col-span-2 intro-y">
                <div className="report-box zoom-in">
                  <div className="box p-5">
                    <div className="flex">
                      <Lucide
                        icon="CreditCard"
                        className="report-box__icon text-pending"
                      />
                      <div className="ml-auto">
                        <Tippy
                          tag="div"
                          className="report-box__indicator bg-danger cursor-pointer"
                          content="2% Lower than last month"
                        >
                          2%
                          <Lucide
                            icon="ChevronDown"
                            className="w-4 h-4 ml-0.5"
                          />
                        </Tippy>
                      </div>
                    </div>
                    <div className="text-3xl font-medium leading-8 mt-6">
                      21
                    </div>
                    <div className="text-base text-slate-500 mt-1">
                      Open Orders
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-6 xl:col-span-2 intro-y">
                <div className="report-box zoom-in">
                  <div className="box p-5">
                    <div className="flex">
                      <Lucide
                        icon="Monitor"
                        className="report-box__icon text-warning"
                      />
                      <div className="ml-auto">
                        <Tippy
                          tag="div"
                          className="report-box__indicator bg-success cursor-pointer"
                          content="12% Higher than last month"
                        >
                          12%{" "}
                          <Lucide icon="ChevronUp" className="w-4 h-4 ml-0.5" />
                        </Tippy>
                      </div>
                    </div>
                    <div className="text-3xl font-medium leading-8 mt-6">
                      03
                    </div>
                    <div className="text-base text-slate-500 mt-1">
                      Canceled order
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-6 xl:col-span-2 intro-y">
                <div className="report-box zoom-in">
                  <div className="box p-5">
                    <div className="flex">
                      <Lucide
                        icon="Briefcase"
                        className="report-box__icon text-warning"
                      />
                      <div className="ml-auto">
                        <Tippy
                          tag="div"
                          className="report-box__indicator bg-success cursor-pointer"
                          content="12% Higher than last month"
                        >
                          12%{" "}
                          <Lucide icon="ChevronUp" className="w-4 h-4 ml-0.5" />
                        </Tippy>
                      </div>
                    </div>
                    <div className="text-3xl font-medium leading-8 mt-6">
                      $ 2,149
                    </div>
                    <div className="text-base text-slate-500 mt-1">
                      Overdue Payments
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-6 xl:col-span-2 intro-y">
                <div className="report-box zoom-in">
                  <div className="box p-5">
                    <div className="flex">
                      <Lucide
                        icon="Hash"
                        className="report-box__icon text-success"
                      />
                      <div className="ml-auto">
                        {/* <Tippy
                          tag="div"
                          className="report-box__indicator bg-success cursor-pointer"
                          content="22% Higher than last month"
                        >
                          22%{" "}
                          <Lucide icon="ChevronUp" className="w-4 h-4 ml-0.5" />
                        </Tippy> */}
                      </div>
                    </div>
                    <div className="text-3xl font-medium leading-8 mt-6">
                      $ 152,040
                    </div>
                    <div className="text-base text-slate-500 mt-1">
                      Available Credit
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-6 xl:col-span-2 intro-y">
                <div className="report-box zoom-in">
                  <div className="box p-5">
                    <div className="flex">
                      <Lucide
                        icon="DollarSign"
                        className="report-box__icon text-success"
                      />
                      <div className="ml-auto">
                        {/* <Tippy
                          tag="div"
                          className="report-box__indicator bg-success cursor-pointer"
                          content="22% Higher than last month"
                        >
                          22%{" "}
                          <Lucide icon="ChevronUp" className="w-4 h-4 ml-0.5" />
                        </Tippy> */}
                      </div>
                    </div>
                    <div className="text-3xl font-medium leading-8 mt-6">
                      $ 213,244.34
                    </div>
                    <div className="text-base text-slate-500 mt-1">
                      Total Speedings
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END: General Report */}
          {/* BEGIN: General Report */}
          <div className="col-span-12 grid grid-cols-12 gap-6 mt-8">
            <div className="col-span-12 sm:col-span-6 2xl:col-span-3 intro-y">
              <div className="box p-5 zoom-in">
                <div className="flex items-center">
                  <div className="w-2/4 flex-none">
                    <div className="text-lg font-medium truncate">
                      Target Sales
                    </div>
                    <div className="text-slate-500 mt-1">300 Sales</div>
                  </div>
                  <div className="flex-none ml-auto relative">
                    <ReportDonutChart1 width={90} height={90} />
                    <div className="font-medium absolute w-full h-full flex items-center justify-center top-0 left-0">
                      20%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 2xl:col-span-3 intro-y">
              <div className="box p-5 zoom-in">
                <div className="flex">
                  <div className="text-lg font-medium truncate mr-3">
                    Online Purchase
                  </div>
                  <div className="py-1 px-2 flex items-center rounded-full text-xs bg-slate-100 dark:bg-darkmode-400 text-slate-500 cursor-pointer ml-auto truncate">
                    320 Followers
                  </div>
                </div>
                <div className="mt-1">
                  <SimpleLineChart1 height={58} className="-ml-1" />
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 2xl:col-span-3 intro-y">
              <div className="box p-5 zoom-in">
                <div className="flex items-center">
                  <div className="w-2/4 flex-none">
                    <div className="text-lg font-medium truncate">
                      New Products Added
                    </div>
                    <div className="text-slate-500 mt-1">1450 Products</div>
                  </div>
                  <div className="flex-none ml-auto relative">
                    <ReportDonutChart1 width={90} height={90} />
                    <div className="font-medium absolute w-full h-full flex items-center justify-center top-0 left-0">
                      45%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 2xl:col-span-3 intro-y">
              <div className="box p-5 zoom-in">
                <div className="flex">
                  <div className="text-lg font-medium truncate mr-3">
                    Posted Ads
                  </div>
                  <div className="py-1 px-2 flex items-center rounded-full text-xs bg-slate-100 dark:bg-darkmode-400 text-slate-500 cursor-pointer ml-auto truncate">
                    180 Campaign
                  </div>
                </div>
                <div className="mt-1">
                  <SimpleLineChart1 height={58} className="-ml-1" />
                </div>
              </div>
            </div>
          </div>
          {/* END: General Report */}
          {/* BEGIN: Sales Report */}
          <div className="col-span-12 lg:col-span-6 mt-8">
            <div className="intro-y block sm:flex items-center h-10">
              <h2 className="text-lg font-medium truncate mr-5">
                Sales Report History
              </h2>
              <div className="sm:ml-auto mt-3 sm:mt-0 relative text-slate-500">
                <Lucide
                  icon="Calendar"
                  className="w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0"
                />
                <Litepicker
                  value={salesReportFilter}
                  onChange={setSalesReportFilter}
                  options={{
                    autoApply: false,
                    singleMode: false,
                    numberOfColumns: 2,
                    numberOfMonths: 2,
                    showWeekNumbers: true,
                    dropdowns: {
                      minYear: 1990,
                      maxYear: null,
                      months: true,
                      years: true,
                    },
                  }}
                  className="form-control sm:w-56 box pl-10"
                />
              </div>
            </div>
            <div className="intro-y box p-5 mt-12 sm:mt-5">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="flex">
                  <div>
                    <div className="text-primary dark:text-slate-300 text-lg xl:text-xl font-medium">
                      $15,000
                    </div>
                    <div className="mt-0.5 text-slate-500">This Month</div>
                  </div>
                  <div className="w-px h-12 border border-r border-dashed border-slate-200 dark:border-darkmode-300 mx-4 xl:mx-5"></div>
                  <div>
                    <div className="text-slate-500 text-lg xl:text-xl font-medium">
                      $10,000
                    </div>
                    <div className="mt-0.5 text-slate-500">Last Month</div>
                  </div>
                </div>
                <Dropdown className="md:ml-auto mt-5 md:mt-0">
                  <DropdownToggle className="btn btn-outline-secondary font-normal">
                    Filter by Category
                    <Lucide icon="ChevronDown" className="w-4 h-4 ml-2" />
                  </DropdownToggle>
                  <DropdownMenu className="w-40">
                    <DropdownContent className="overflow-y-auto h-32">
                      <DropdownItem>PC & Laptop</DropdownItem>
                      <DropdownItem>Smartphone</DropdownItem>
                      <DropdownItem>Electronic</DropdownItem>
                      <DropdownItem>Photography</DropdownItem>
                      <DropdownItem>Sport</DropdownItem>
                    </DropdownContent>
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div className="report-chart">
                <ReportLineChart height={275} className="mt-6 -mb-6" />
              </div>
            </div>
          </div>
          {/* END: Sales Report */}
          {/* BEGIN: Weekly Top Seller */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 mt-8">
            <div className="intro-y flex items-center h-10">
              <h2 className="text-lg font-medium truncate mr-5">
                Weekly Top Products
              </h2>
              <a href="" className="ml-auto text-primary truncate">
                Show More
              </a>
            </div>
            <div className="intro-y box p-5 mt-5">
              <div className="mt-3">
                <ReportPieChart height={213} />
              </div>
              <div className="w-52 sm:w-auto mx-auto mt-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="truncate">17 - 30 Years old</span>
                  <span className="font-medium ml-auto">62%</span>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-2 h-2 bg-pending rounded-full mr-3"></div>
                  <span className="truncate">31 - 50 Years old</span>
                  <span className="font-medium ml-auto">33%</span>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-2 h-2 bg-warning rounded-full mr-3"></div>
                  <span className="truncate">&gt;= 50 Years old</span>
                  <span className="font-medium ml-auto">10%</span>
                </div>
              </div>
            </div>
          </div>
          {/* END: Weekly Top Seller */}
          {/* BEGIN: Sales Report */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 mt-8">
            <div className="intro-y flex items-center h-10">
              <h2 className="text-lg font-medium truncate mr-5">
                Order Report
              </h2>
              <a href="" className="ml-auto text-primary truncate">
                Show More
              </a>
            </div>
            <div className="intro-y box p-5 mt-5">
              <div className="mt-3">
                <ReportDonutChart height={213} />
              </div>
              <div className="w-52 sm:w-auto mx-auto mt-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="truncate">17 - 30 Years old</span>
                  <span className="font-medium ml-auto">62%</span>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-2 h-2 bg-pending rounded-full mr-3"></div>
                  <span className="truncate">31 - 50 Years old</span>
                  <span className="font-medium ml-auto">33%</span>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-2 h-2 bg-warning rounded-full mr-3"></div>
                  <span className="truncate">&gt;= 50 Years old</span>
                  <span className="font-medium ml-auto">10%</span>
                </div>
              </div>
            </div>
          </div>
          {/* END: Sales Report */}
          {/* BEGIN: Official Store */}
          {/* <div className="col-span-12 xl:col-span-8 mt-6">
            <div className="intro-y block sm:flex items-center h-10">
              <h2 className="text-lg font-medium truncate mr-5">
                Official Store
              </h2>
              <div className="sm:ml-auto mt-3 sm:mt-0 relative text-slate-500">
                <Lucide
                  icon="MapPin"
                  className="w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0"
                />
                <input
                  type="text"
                  className="form-control sm:w-56 box pl-10"
                  placeholder="Filter by city"
                />
              </div>
            </div>
            <div className="intro-y box p-5 mt-12 sm:mt-5">
              <div>
                250 Official stores in 21 countries, click the marker to see
                location details.
              </div>
              <ReportMap className="report-maps mt-5 bg-slate-200 rounded-md" />
            </div>
          </div> */}
          {/* END: Official Store */}
          {/* <div className="col-span-12 xl:col-span-8 mt-6"> */}
            {/* <div className="intro-x flex items-center h-10">
              <h2 className="text-lg font-medium truncate mr-auto">
                Banners
              </h2>
            </div> */}
            {/* BEGIN: Ads 1 */}
            <div className="col-span-6 lg:col-span-6 mt-6">
              <div className="box p-8 relative overflow-hidden bg-primary intro-y">
                <div className="leading-[2.15rem] w-full sm:w-72 text-white text-xl -mt-3">
                  Transact safely with Lender’s Fund Account (RDL)
                </div>
                <div className="w-full sm:w-72 leading-relaxed text-white/70 dark:text-slate-500 mt-3">
                  Apply now, quick registration.
                </div>
                <button className="btn w-32 bg-white dark:bg-darkmode-800 dark:text-white mt-6 sm:mt-10">
                  Start Now
                </button>
                <img
                  className="hidden sm:block absolute top-0 right-0 w-2/5 -mt-3 mr-2"
                  alt="Midone Tailwind HTML Admin Template"
                  src={womanIllustrationUrl}
                />
              </div>
            </div>
            {/* END: Ads 1 */}
            {/* BEGIN: Ads 2 */}
            <div className="col-span-6 lg:col-span-6 mt-6">
              <div className="box p-8 relative overflow-hidden intro-y">
                <div className="leading-[2.15rem] w-full sm:w-52 text-primary dark:text-white text-xl -mt-3">
                  Invite friends to get{" "}
                  <span className="font-medium">FREE</span> bonuses!
                </div>
                <div className="w-full sm:w-60 leading-relaxed text-slate-500 mt-2">
                  Get a IDR 100,000 voucher by inviting your friends to fund
                  #BecomeMember
                </div>
                <Tippy
                  tag="div"
                  className="w-48 relative mt-6 cursor-pointer"
                  content="Copy referral link"
                >
                  <input
                    type="text"
                    className="form-control"
                    value="https://dashboard.in"
                    onChange={() => {}}
                  />
                  <Lucide
                    icon="Copy"
                    className="absolute right-0 top-0 bottom-0 my-auto mr-4 w-4 h-4"
                  />
                </Tippy>
                <img
                  className="hidden sm:block absolute top-0 right-0 w-1/2 mt-1 -mr-12"
                  alt="Midone Tailwind HTML Admin Template"
                  src={phoneIllustrationUrl}
                />
              </div>
            </div>
            {/* END: Ads 2 */}
          {/* </div> */}
          {/* BEGIN: Important Notes */}
        
          {/* END: Important Notes */}
          {/* BEGIN: Weekly Best Sellers */}
          {/* <div className="col-span-12 xl:col-span-4 mt-6">
            <div className="intro-y flex items-center h-10">
              <h2 className="text-lg font-medium truncate mr-5">
                Weekly Best Sellers
              </h2>
            </div>
            <div className="mt-5">
              {$_.take($f(), 4).map((faker, fakerKey) => (
                <div key={fakerKey} className="intro-y">
                  <div className="box px-4 py-4 mb-3 flex items-center zoom-in">
                    <div className="w-10 h-10 flex-none image-fit rounded-md overflow-hidden">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        src={faker.photos[0]}
                      />
                    </div>
                    <div className="ml-4 mr-auto">
                      <div className="font-medium">{faker.users[0].name}</div>
                      <div className="text-slate-500 text-xs mt-0.5">
                        {faker.dates[0]}
                      </div>
                    </div>
                    <div className="py-1 px-2 rounded-full text-xs bg-success text-white cursor-pointer font-medium">
                      137 Sales
                    </div>
                  </div>
                </div>
              ))}
              <a
                href=""
                className="intro-y w-full block text-center rounded-md py-4 border border-dotted border-slate-400 dark:border-darkmode-300 text-slate-500"
              >
                View More
              </a>
            </div>
          </div> */}
          {/* END: Weekly Best Sellers */}

          {/* BEGIN: Weekly Top Products */}
          <div className="col-span-12 mt-6">
            <div className="intro-y block sm:flex items-center h-10">
              <h2 className="text-lg font-medium truncate mr-5">
                Weekly Top Products
              </h2>
              <div className="flex items-center sm:ml-auto mt-3 sm:mt-0">
                <button className="btn box flex items-center text-slate-600 dark:text-slate-300">
                  <Lucide
                    icon="FileText"
                    className="hidden sm:block w-4 h-4 mr-2"
                  />
                  Export to Excel
                </button>
                <button className="ml-3 btn box flex items-center text-slate-600 dark:text-slate-300">
                  <Lucide
                    icon="FileText"
                    className="hidden sm:block w-4 h-4 mr-2"
                  />
                  Export to PDF
                </button>
              </div>
            </div>
            <div className="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0">
              <table className="table table-report sm:mt-2">
                <thead>
                  <tr>
                    <th className="whitespace-nowrap">IMAGES</th>
                    <th className="whitespace-nowrap">PRODUCT NAME</th>
                    <th className="text-center whitespace-nowrap">STOCK</th>
                    <th className="text-center whitespace-nowrap">STATUS</th>
                    <th className="text-center whitespace-nowrap">ACTIONS</th>
                  </tr>
                </thead>
                <tbody>
                  {$_.take($f(), 4).map((faker, fakerKey) => (
                    <tr key={fakerKey} className="intro-x">
                      <td className="w-40">
                        <div className="flex">
                          <div className="w-10 h-10 image-fit zoom-in">
                            <Tippy
                              tag="img"
                              alt="Midone Tailwind HTML Admin Template"
                              className="rounded-full"
                              src={faker.images[0]}
                              content={`Uploaded at ${faker.dates[0]}`}
                            />
                          </div>
                          <div className="w-10 h-10 image-fit zoom-in -ml-5">
                            <Tippy
                              tag="img"
                              alt="Midone Tailwind HTML Admin Template"
                              className="rounded-full"
                              src={faker.images[1]}
                              content={`Uploaded at ${faker.dates[1]}`}
                            />
                          </div>
                          <div className="w-10 h-10 image-fit zoom-in -ml-5">
                            <Tippy
                              tag="img"
                              alt="Midone Tailwind HTML Admin Template"
                              className="rounded-full"
                              src={faker.images[2]}
                              content={`Uploaded at ${faker.dates[2]}`}
                            />
                          </div>
                        </div>
                      </td>
                      <td>
                        <a href="" className="font-medium whitespace-nowrap">
                          {faker.products[0].name}
                        </a>
                        <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                          {faker.products[0].category}
                        </div>
                      </td>
                      <td className="text-center">{faker.stocks[0]}</td>
                      <td className="w-40">
                        <div
                          className={classnames({
                            "flex items-center justify-center": true,
                            "text-success": faker.trueFalse[0],
                            "text-danger": !faker.trueFalse[0],
                          })}
                        >
                          <Lucide icon="CheckSquare" className="w-4 h-4 mr-2" />
                          {faker.trueFalse[0] ? "Active" : "Inactive"}
                        </div>
                      </td>
                      <td className="table-report__action w-56">
                        <div className="flex justify-center items-center">
                          <a className="flex items-center mr-3" href="">
                            <Lucide
                              icon="CheckSquare"
                              className="w-4 h-4 mr-1"
                            />
                            Edit
                          </a>
                          <a className="flex items-center text-danger" href="">
                            <Lucide icon="Trash2" className="w-4 h-4 mr-1" />{" "}
                            Delete
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="intro-y flex flex-wrap sm:flex-row sm:flex-nowrap items-center mt-3">
              <nav className="w-full sm:w-auto sm:mr-auto">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <Lucide icon="ChevronsLeft" className="w-4 h-4" />
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <Lucide icon="ChevronLeft" className="w-4 h-4" />
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      ...
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      ...
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <Lucide icon="ChevronRight" className="w-4 h-4" />
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <Lucide icon="ChevronsRight" className="w-4 h-4" />
                    </a>
                  </li>
                </ul>
              </nav>
              <select className="w-20 form-select box mt-3 sm:mt-0">
                <option>10</option>
                <option>25</option>
                <option>35</option>
                <option>50</option>
              </select>
            </div>
          </div>
          {/* END: Weekly Top Products */}
        </div>
      </div>
    </div>
  );
}

export default Main;
