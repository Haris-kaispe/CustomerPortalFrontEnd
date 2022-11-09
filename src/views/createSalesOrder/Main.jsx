import {
  Lucide,
  Tippy,
  TomSelect,
  Alert,
  ClassicEditor,
} from "@/base-components";
import { faker as $f } from "@/utils";
import * as $_ from "lodash";
import { useState } from "react";

function Main() {
  const [subcategory, setSubcategory] = useState([]);
  const [editorData, setEditorData] = useState("<p>Content of the editor.</p>");

  return (
    <>
      <div className="intro-y flex items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Create Sales Order</h2>
      </div>
      <div className="grid grid-cols-11 gap-x-6 mt-5 pb-20">
        {/* BEGIN: Notification */}
        <Alert className="intro-y col-span-11 alert-primary alert-dismissible mb-6">
          {({ dismiss }) => (
            <>
              <div className="flex items-center">
                <span>
                  <Lucide icon="Info" className="w-4 h-4 mr-2" />
                </span>
                <span>
                  Starting May 10, 2021, there will be changes to the Terms &
                  Conditions regarding the number of products that may be added
                  by the Seller.
                  <a
                    href="https://themeforest.net/item/midone-jquery-tailwindcss-html-admin-template/26366820"
                    className="underline ml-1"
                    target="blank"
                  >
                    Learn More
                  </a>
                </span>
                <button
                  type="button"
                  className="btn-close text-white"
                  onClick={dismiss}
                  aria-label="Close"
                >
                  <Lucide icon="X" className="w-4 h-4" />
                </button>
              </div>
            </>
          )}
        </Alert>
        {/* BEGIN: Notification */}
        <div className="intro-y col-span-11 2xl:col-span-12">
          {/* BEGIN: Uplaod Product */}
          <div className="intro-y box p-5">
            <div className="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5">
              <div className="font-medium text-base flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5">
                <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" /> Order
                Header
              </div>
              <div className="mt-5">
                <div className="flex items-center text-slate-500">
                  <span>
                    <Lucide icon="Lightbulb" className="w-5 h-5 text-warning" />
                  </span>
                  <div className="ml-2">
                    <span className="mr-1">
                      Avoid selling counterfeit products / violating
                      Intellectual Property Rights, so that your products are
                      not deleted.
                    </span>
                    <a
                      href="https://themeforest.net/item/midone-jquery-tailwindcss-html-admin-template/26366820"
                      className="text-primary font-medium"
                      target="blank"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Shipping Insurance</div>
                      </div>
                      <div className="leading-relaxed text-slate-500 text-xs mt-3">
                        Refund product & postage for the seller and buyer in
                        case of damage / loss during shipping.
                        <a className="text-primary font-medium" href="">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <div className="flex flex-col sm:flex-row">
                      <div className="form-check mr-4">
                        <input
                          id="shipping-insurance-required"
                          className="form-check-input"
                          type="radio"
                          name="horizontal_radio_button"
                          value="horizontal-radio-chris-evans"
                        />
                        <div className="form-check-label">
                          <div>Required</div>
                          <div className="leading-relaxed text-slate-500 text-xs mt-1 w-56">
                            You
                            <span className="font-medium text-slate-600 dark:text-slate-300">
                              require
                            </span>
                            the buyer to activate shipping insurance
                          </div>
                        </div>
                      </div>
                      <div className="form-check mr-4 mt-2 sm:mt-0">
                        <input
                          id="shipping-insurance-optional"
                          className="form-check-input"
                          type="radio"
                          name="horizontal_radio_button"
                          value="horizontal-radio-liam-neeson"
                        />
                        <div className="form-check-label">
                          <div>Optional</div>
                          <div className="leading-relaxed text-slate-500 text-xs mt-1 w-56">
                            You
                            <span className="font-medium text-slate-600 dark:text-slate-300">
                              give the buyer the option
                            </span>
                            to activate shipping insurance
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Shipping Service</div>
                      </div>
                      <div className="leading-relaxed text-slate-500 text-xs mt-3">
                        Configure shipping services according to your product
                        type.
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <div className="flex flex-col sm:flex-row">
                      <div className="form-check mr-4">
                        <input
                          id="shipping-service-standard"
                          className="form-check-input"
                          type="radio"
                          name="horizontal_radio_button"
                          value="horizontal-radio-chris-evans"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="shipping-service-standard"
                        >
                          Standard
                        </label>
                      </div>
                      <div className="form-check mr-4 mt-2 sm:mt-0">
                        <input
                          id="shipping-service-custom"
                          className="form-check-input"
                          type="radio"
                          name="horizontal_radio_button"
                          value="horizontal-radio-liam-neeson"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="shipping-service-custom"
                        >
                          Custom
                        </label>
                      </div>
                    </div>
                    <div className="leading-relaxed text-slate-500 text-xs mt-3">
                      The delivery service for this product will be the same as
                      in the
                      <a className="text-primary font-medium" href="">
                        Shipping Settings.
                      </a>
                    </div>
                  </div>
                </div>
                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Partial Shipment</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                      <div className="leading-relaxed text-slate-500 text-xs mt-3">
                        You can allow or not allow by checking this feature
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <div className="form-check form-switch">
                      <input
                        id="product-status-active"
                        className="form-check-input"
                        type="checkbox"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="product-status-active"
                      >
                        Active
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Select Shipping Address</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                      <div className="leading-relaxed text-slate-500 text-xs mt-3">
                        Select your deliver Address One of your registered address
                      </div>
                    </div>
                  </div>
                  <div className="intro-y grid grid-cols-12 gap-5 mt-5">
                  <div className="col-span-12 lg:col-span-6 2xl:col-span-3">
                    <div className="box p-5 rounded-md mt-5">
                      <div className="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5 mb-5">
                        <div className="font-medium text-base truncate">
                          Address One
                        </div>
                        <a
                          href=""
                          className="flex items-center ml-auto text-primary"
                        >
                          <Lucide icon="Edit" className="w-4 h-4 mr-2" /> View
                          Details
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Lucide
                          icon="Clipboard"
                          className="w-4 h-4 text-slate-500 mr-2"
                        />
                        Name:
                        <a href="" className="underline decoration-dotted ml-1">
                          {$f()[0].users[0].name}
                        </a>
                      </div>
                      <div className="flex items-center mt-3">
                        <Lucide
                          icon="Calendar"
                          className="w-4 h-4 text-slate-500 mr-2"
                        />
                        Phone Number: +71828273732
                      </div>
                      <div className="flex items-center mt-3">
                        <Lucide
                          icon="MapPin"
                          className="w-4 h-4 text-slate-500 mr-2"
                        />
                        Address: 260 W. Storm Street New York, NY 10025.
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-6 2xl:col-span-3">
                    <div className="box p-5 rounded-md mt-5">
                      <div className="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5 mb-5">
                        <div className="font-medium text-base truncate">
                          Address Two
                        </div>
                        <a
                          href=""
                          className="flex items-center ml-auto text-primary"
                        >
                          <Lucide icon="Edit" className="w-4 h-4 mr-2" /> View
                          Details
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Lucide
                          icon="Clipboard"
                          className="w-4 h-4 text-slate-500 mr-2"
                        />
                        Name:
                        <a href="" className="underline decoration-dotted ml-1">
                          {$f()[0].users[0].name}
                        </a>
                      </div>
                      <div className="flex items-center mt-3">
                        <Lucide
                          icon="Calendar"
                          className="w-4 h-4 text-slate-500 mr-2"
                        />
                        Phone Number: +71828273732
                      </div>
                      <div className="flex items-center mt-3">
                        <Lucide
                          icon="MapPin"
                          className="w-4 h-4 text-slate-500 mr-2"
                        />
                        Address: 260 W. Storm Street New York, NY 10025.
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-6 2xl:col-span-3">
                    <div className="box p-5 rounded-md mt-5">
                      <div className="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5 mb-5">
                        <div className="font-medium text-base truncate">
                          Address Three
                        </div>
                        <a
                          href=""
                          className="flex items-center ml-auto text-primary"
                        >
                          <Lucide icon="Edit" className="w-4 h-4 mr-2" /> View
                          Details
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Lucide
                          icon="Clipboard"
                          className="w-4 h-4 text-slate-500 mr-2"
                        />
                        Name:
                        <a href="" className="underline decoration-dotted ml-1">
                          {$f()[0].users[0].name}
                        </a>
                      </div>
                      <div className="flex items-center mt-3">
                        <Lucide
                          icon="Calendar"
                          className="w-4 h-4 text-slate-500 mr-2"
                        />
                        Phone Number: +71828273732
                      </div>
                      <div className="flex items-center mt-3">
                        <Lucide
                          icon="MapPin"
                          className="w-4 h-4 text-slate-500 mr-2"
                        />
                        Address: 260 W. Storm Street New York, NY 10025.
                      </div>
                    </div>
                  </div>
                </div>
                </div>

               
              </div>
            </div>
          </div>
          {/* END: Uplaod Product */}
          {/* BEGIN: Product Information */}
          <div className="intro-y box p-5 mt-5">
            <div className="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5">
              <div className="font-medium text-base flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5">
                <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" /> Order
                Line
              </div>
              <div className="mt-5">
                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Add Product</div>
                      </div>
                      <div className="leading-relaxed text-slate-500 text-xs mt-3">
                        You can add product by product section where you can
                        find stock and other related information.
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <div className="overflow-x-auto">
                      <table className="table border">
                        <thead>
                          <tr>
                            <th className="!pr-2 bg-slate-50 dark:bg-darkmode-800"></th>
                            <th className="bg-slate-50 dark:bg-darkmode-800"></th>
                            <th className="!px-2 bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap">
                              Qty.
                            </th>
                            <th className="!px-2 bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap">
                              Unit Price.
                            </th>
                            <th className="!px-2 bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap">
                              Total Price
                            </th>
                            <th className="!px-2 bg-slate-50 dark:bg-darkmode-800"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="!pr-2">1.</td>
                            <td className="whitespace-nowrap">Nokia</td>
                            <td className="!px-2">
                              <input
                                type="text"
                                value={1}
                                className="form-control min-w-[6rem]"
                                placeholder="Qty"
                              />
                            </td>
                            <td className="!px-2">
                              <input
                                type="text"
                                value={528.28}
                                disabled
                                className="form-control min-w-[6rem]"
                                placeholder="Price"
                              />
                            </td>
                            <td className="!px-2">
                              <div className="input-group">
                                <div className="input-group-text">$</div>
                                <input
                                  type="text"
                                  value={528.28}
                                  disabled
                                  className="form-control min-w-[6rem]"
                                  placeholder="Price"
                                />
                              </div>
                            </td>
                            <td className="!pl-4 text-slate-500">
                              <a href="">
                                <Lucide icon="Trash2" className="w-4 h-4" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="!pr-2">2.</td>
                            <td className="whitespace-nowrap">Samsung</td>
                            <td className="!px-2">
                              <input
                                type="text"
                                value={1}
                                className="form-control min-w-[6rem]"
                                placeholder="Qty"
                              />
                            </td>
                            <td className="!px-2">
                              <input
                                type="text"
                                value={528.28}
                                disabled
                                className="form-control min-w-[6rem]"
                                placeholder="Price"
                              />
                            </td>
                            <td className="!px-2">
                              <div className="input-group">
                                <div className="input-group-text">$</div>
                                <input
                                  type="text"
                                  value={528.28}
                                  disabled
                                  className="form-control min-w-[6rem]"
                                  placeholder="Price"
                                />
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="!pr-2">3.</td>
                            <td className="whitespace-nowrap">IPhone</td>
                            <td className="!px-2">
                              <input
                                type="text"
                                value={1}
                                className="form-control min-w-[6rem]"
                                placeholder="Qty"
                              />
                            </td>
                            <td className="!px-2">
                              <input
                                type="text"
                                value={400.08}
                                disabled
                                className="form-control min-w-[6rem]"
                                placeholder="Price"
                              />
                            </td>
                            <td className="!px-2">
                              <div className="input-group">
                                <div className="input-group-text">$</div>
                                <input
                                  type="text"
                                  value={400.08}
                                  disabled
                                  className="form-control min-w-[6rem]"
                                  placeholder="Price"
                                />
                              </div>
                            </td>
                            <td className="!pl-4 text-slate-500">
                              <a href="">
                                <Lucide icon="Trash2" className="w-4 h-4" />
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <button className="btn btn-outline-primary border-dashed w-full mt-4">
                      <Lucide icon="Plus" className="w-4 h-4 mr-2" /> Add New
                      Product
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END: Product Information */}
          {/* BEGIN: Product Detail */}
          <div className="intro-y box p-5 mt-5">
            <div className="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5">
              <div className="font-medium text-base flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5">
                <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" /> Order Details
              </div>
              <div className="mt-5">
              <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                 
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <div className="sm:grid grid-cols-4 gap-2">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          disabled
                          value={3}
                          placeholder="Total Qty"
                        />
                        <div className="input-group-text">TOTAL PCS</div>
                      </div>
                      <div className="input-group mt-2 sm:mt-0">
                        <input
                          type="text"
                          disabled
                          className="form-control"
                          placeholder="Height"
                          value={1523.98}
                        />
                        <div className="input-group-text">TOTAL AMOUNT USD</div>
                      </div>
                      <div className="input-group mt-2 sm:mt-0">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Length"
                          disabled
                          value={35}
                        />
                        <div className="input-group-text">VAT 5%</div>
                      </div>
                      <div className="input-group mt-2 sm:mt-0">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Length"
                          disabled
                          value={1423.9}
                        />
                        <div className="input-group-text">GROSS TOTAL USD</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END: Product Detail */}
         
         
          {/* END: Weight & Shipping */}
          <div className="flex justify-end flex-col md:flex-row gap-2 mt-5">
            <button
              type="button"
              className="btn py-3 border-slate-300 dark:border-darkmode-400 text-slate-500 w-full md:w-52"
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn py-3 border-slate-300 dark:border-darkmode-400 text-slate-500 w-full md:w-52"
            >
              Save & Add New Product
            </button>
            <button
              type="button"
              className="btn py-3 btn-primary w-full md:w-52"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
