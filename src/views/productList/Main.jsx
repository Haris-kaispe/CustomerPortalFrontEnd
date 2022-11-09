import {
  Lucide,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  Modal,
  ModalBody,
} from "@/base-components";
import { faker as $f } from "@/utils";
import * as $_ from "lodash";
import classnames from "classnames";
import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";

import {
  getProductList as onGetProductList,
  addNewProductList as onAddNewProductList,
  updateProductList as onUpdateProductList,
  deleteProductList as onDeleteProductList,
} from "../../store/actions";

function Main() {
  const dispatch = useDispatch();

  const { productList } = useSelector((state) => ({
    productList: state.ProductListReducer?.productList,
  }));

  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);
  const [getProductList, setProductList] = useState([]);
  const [getCurrentPage, setCurrentPage] = useState(1);
  const [getPerPage, setPerPage] = useState({ value: "10", label: "10" });
  const [getName, setName] = useState("");

  useEffect(() => {
    if (getPerPage.value != productList.limit) {
      setCurrentPage(1);
      var params = `?perPage=${getPerPage.value}&page=1`;
    } else {
      var params = `?perPage=${getPerPage.value}&page=${getCurrentPage}`;
    }
    //   var params = `?perPage=${getPerPage}&page=${getCurrentPage}`;
    if (productList.hasOwnProperty("message")) {
    } else if (
      !productList.hasOwnProperty("docs") ||
      getCurrentPage != productList.page ||
      getPerPage.value != productList.limit
    )
      dispatch(onGetProductList(params));

    setProductList(productList);
  }, [productList, getCurrentPage, getPerPage]);

  const options = [
    { value: 10, label: "10" },
    { value: 25, label: "25" },
    { value: 35, label: "35" },
    { value: 50, label: "50" },
  ];

  const handleNameSearch = () => {
    let param = `?perPage=${getPerPage.value}&page=1`;

    param += getName ? `&name=${getName}` : "";

    dispatch(onGetProductList(param));
  };

  return (
    <>
      <h2 className="intro-y text-lg font-medium mt-10">Product List</h2>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
          <div className="hidden md:block mx-auto text-slate-500">
            Showing{" "}
            {getCurrentPage > 1
              ? getPerPage.value * (getCurrentPage - 1) + 1
              : 1}{" "}
            to{" "}
            {productList.totalDocs < getPerPage.value
              ? productList.totalDocs
              : getPerPage.value}{" "}
            of {productList.totalDocs} entries
          </div>
          <div className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
            <div className="w-56 relative text-slate-500">
              <input
                type="text"
                className="form-control w-48 box pr-10 "
                placeholder="Search"
                onKeyUp={(e) => {
                  setName(e.target.value);
                }}
              />
              <Lucide
                icon="Search"
                className="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"
                onClick={() => handleNameSearch()}
              />
            </div>
          </div>
        </div>
        {/* BEGIN: Users Layout */}
        {$_.take(productList.docs, productList.totalDocs).map(
          (value, index) => (
            <div
              key={index}
              className="intro-y col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3"
            >
              <div className="box">
                <div className="p-5">
                  <div className="h-40 2xl:h-56 image-fit rounded-md overflow-hidden before:block before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-10 before:bg-gradient-to-t before:from-black before:to-black/10">
                    <img
                      target="_blank"
                      alt="Image Not Found"
                      className="rounded-md"
                      src={value.productImage[0].url}
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src =
                          "https://fiberopticassy.com/wp-content/uploads/sites/13/2021/09/white-image-copia.png";
                      }}
                    />
                    {/* {faker.trueFalse[0] && (
                    <span className="absolute top-0 bg-pending/80 text-white text-xs m-5 px-2 py-1 rounded z-10">
                      Featured
                    </span>
                  )} */}
                    <div className="absolute bottom-0 text-white px-5 pb-6 z-10">
                      <a href="" className="block font-medium text-base">
                        {value.name}
                      </a>
                      <span className="text-white/90 text-xs mt-3">
                        {value.category}
                      </span>
                    </div>
                  </div>
                  <div className="text-slate-600 dark:text-slate-500 mt-5">
                    <div className="flex items-center">
                      <Lucide icon="Link" className="w-4 h-4 mr-2" /> Price: $
                      {value.price}
                    </div>
                    <div className="flex items-center mt-2">
                      <Lucide icon="Layers" className="w-4 h-4 mr-2" />{" "}
                      Remaining Stock:
                      {value.status}
                    </div>
                    <div className="flex items-center mt-2">
                      <Lucide icon="CheckSquare" className="w-4 h-4 mr-2" />{" "}
                      Status:
                      {value.status}
                    </div>
                  </div>
                </div>
                <div className="flex justify-center lg:justify-end items-center p-5 border-t border-slate-200/60 dark:border-darkmode-400">
                  <a
                    className="flex items-center text-primary mr-auto"
                    href="#"
                  >
                    <Lucide icon="Eye" className="w-4 h-4 mr-1" /> Preview
                  </a>
                  <a className="flex items-center mr-3" href="#">
                    <Lucide icon="CheckSquare" className="w-4 h-4 mr-1" />{" "}
                    Select
                  </a>
                </div>
              </div>
            </div>
          )
        )}
        {/* END: Users Layout */}
        {/* BEGIN: Pagination */}
        <div className="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
          <nav className="w-full sm:w-auto sm:mr-auto">
            <ul className="pagination">
              {productList.hasPrevPage ? (
                <>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#123"
                      onClick={() => setCurrentPage(1)}
                    >
                      <Lucide icon="ChevronsLeft" className="w-4 h-4" />
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      onClick={() => setCurrentPage(productList.prevPage)}
                    >
                      <Lucide icon="ChevronLeft" className="w-4 h-4" />
                    </a>
                  </li>

                  <li className="page-item">
                    {/* <a className="page-link" href="#" onClick ={setCurrentPage(orderManagement.nextPage)} > */}

                    <a
                      className="page-link"
                      href="#"
                      onClick={() => setCurrentPage(productList.prevPage)}
                    >
                      {productList.prevPage}
                    </a>
                  </li>
                </>
              ) : null}
              <li className="page-item active">
                <a className="page-link" href="#">
                  {productList.page}
                </a>
              </li>
              {productList.hasNextPage ? (
                <>
                  <li className="page-item">
                    {/* <a className="page-link" href="#" onClick ={setCurrentPage(orderManagement.nextPage)} > */}

                    <a
                      className="page-link"
                      href="#"
                      onClick={() => setCurrentPage(productList.nextPage)}
                    >
                      {productList.nextPage}
                    </a>
                  </li>

                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      onClick={() => setCurrentPage(productList.nextPage)}
                    >
                      <Lucide icon="ChevronRight" className="w-4 h-4" />
                    </a>
                  </li>

                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#123"
                      onClick={() => setCurrentPage(productList.totalPages)}
                    >
                      <Lucide icon="ChevronsRight" className="w-4 h-4" />
                    </a>
                  </li>
                </>
              ) : null}
            </ul>
          </nav>
          <Select
            defaultValue={getPerPage}
            onChange={(e) =>
              setPerPage({ value: `${e.value}`, label: `${e.value}` })
            }
            options={options}
          />
          {/* <select className="w-20 form-select box mt-3 sm:mt-0"  onChange={(t) => setPerPage(t.target.value)}>
            <option value =) "10" {getPerPage == "10" ? "selected" : ""}>10</option>
            <option value = "25" {getPerPage == "25" ? "selected" : ""}>25</option>
            <option value = "35" {getPerPage == "35" ? "selected" : ""}>35</option>
            <option value = "50" {getPerPage == "50" ? "selected" : ""}>50</option>
          </select> */}
        </div>
        {/* END: Pagination */}
      </div>
      {/* BEGIN: Delete Confirmation Modal */}
      <Modal
        show={deleteConfirmationModal}
        onHidden={() => {
          setDeleteConfirmationModal(false);
        }}
      >
        <ModalBody className="p-0">
          <div className="p-5 text-center">
            <Lucide
              icon="XCircle"
              className="w-16 h-16 text-danger mx-auto mt-3"
            />
            <div className="text-3xl mt-5">Are you sure?</div>
            <div className="text-slate-500 mt-2">
              Do you really want to delete these records? <br />
              This process cannot be undone.
            </div>
          </div>
          <div className="px-5 pb-8 text-center">
            <button
              type="button"
              onClick={() => {
                setDeleteConfirmationModal(false);
              }}
              className="btn btn-outline-secondary w-24 mr-1"
            >
              Cancel
            </button>
            <button type="button" className="btn btn-danger w-24">
              Delete
            </button>
          </div>
        </ModalBody>
      </Modal>
      {/* END: Delete Confirmation Modal */}
    </>
  );
}

export default Main;
