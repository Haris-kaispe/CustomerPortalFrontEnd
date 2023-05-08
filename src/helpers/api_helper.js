<<<<<<< HEAD
import "toastr/build/toastr.min.css";

import axios from "axios";
import toastr from "toastr";

//apply base url for axios
const API_URL = import.meta.env.VITE_BASE_URL;
const currentPath = document.location.pathname.split("/")[1];

const axiosApi = axios.create({
  baseURL: API_URL + currentPath
=======
import axios from "axios";

import toastr from "toastr";
import "toastr/build/toastr.min.css";

//apply base url for axios
const API_URL = import.meta.env.VITE_BASE_URL || "https://customer-portal-alpha.vercel.app/api";

const axiosApi = axios.create({
  baseURL: API_URL
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
});

const token = JSON.parse(localStorage.getItem("authUser")) || "";

axiosApi.defaults.headers.common["Authorization"] = `Bearer ${token.accessToken}`;

axiosApi.interceptors.response.use(
  (res) => {
    // Add configurations here
    if (
      res.status === 201 &&
      res.config.url === "/order-management" &&
      res.config.method == "post"
    ) {
      toastr.success("Record has been created successfully");
<<<<<<< HEAD
    } else if (
      res.status === 200 &&
      res.config.url === "/auth/loginViaAzureSSO" &&
      res.config.method === "post"
    ) {
    } else if (
      res.status === 200 &&
      res.config.url === "/auth/signin" &&
      res.config.method === "post"
    ) {
    } else if (res.status === 200 && res.config.url === "/users" && res.config.method === "post") {
      toastr.error(res.data.data);
    } else if (res.status === 201) {
      toastr.success("Record Created", "success");
    } else if (res.status === 200 && res.config.url === "/signin") {
=======
    } else if (res.status === 201) {
      toastr.success("Record Created", "success");
    } else if (res.status === 200 && res.config.url === "/signin") {
      console.log("do nothing");
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
    } else if (res.status === 200 && res.config.method != "get") {
      toastr.success("Record Updated Successfully", "Record Updated");
    } else if (res.status === 202) {
      toastr.info("Record Deleted successfully", "Record Delete");
    } else if (
      res.config.url === "/paymentDetails/export/allPayments" ||
      res.config.url === "/order-management/export/AllOrders"
    ) {
      //toastr.info("Record Not Found", "Record Not Found");
    } else if (res.status === 204) {
<<<<<<< HEAD
    } else if (res.status === 204) {
=======
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      toastr.info("Record Not Found");
    } else if (res.status === 401) {
      toastr.error("Record Not Found");
    }
    return res;
  },
  (err) => {
    if (err.response) {
      const { data, status } = err.response;

      if (status === 401) {
        //unAuthorized
        toastr.error(data.message, "Unauthorized");
<<<<<<< HEAD
      } else if (status === 400) {
        //bad request
        //  toastr.error(data.message, "Bad Request");
      } else if (status === 403) {
        // Token Expired
        toastr.error(data.message, "Token Expired");
        localStorage.clear();
        window.location.href = "/login";
      } else if (status === 404) {
        // Not Found
        window.location.pathname = "/s/error-page";
=======
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
      } else {
        toastr.error("Some thing went wrong", "error");
      }
      return Promise.reject(err);
    } else {
      // toastr.error("Some thing went wrong", "error");
      // return { message: "ERROR" };
    }
  }
);

export async function get(url, config = {}) {
  return await axiosApi.get(url, config).then((response) => response.data);
}

export async function post(url, data, config = {}) {
  return axiosApi.post(url, { ...data }, { ...config }).then((response) => response.data);
}

export async function postwithnotoken(url, data, config = {}) {
<<<<<<< HEAD
=======
  console.log("records 12345", url, { ...data });
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
  let res = await axiosApi
    .post(url, { ...data }, { ...config })
    .then((response) => response.data)
    .catch((err) => err);
  axiosApi.defaults.headers.common["Authorization"] = `Bearer ${res.accessToken}`;
  return res;
}

export async function postformData(url, data, config = {}) {
<<<<<<< HEAD
  return axiosApi.post(url, data, { ...config }).then((response) => response.data);
=======
  let res = await axiosApi.post(url, { ...data }, { ...config }).then((response) => response.data);
  return axiosApi.postForm(url, { ...data }, { ...config }).then((response) => response.data);
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
}

export async function put(url, data, config = {}) {
  return axiosApi.put(url, { ...data }, { ...config }).then((response) => response.data);
}

<<<<<<< HEAD
// patch request
export async function patch(url, data, config = {}) {
  return axiosApi.patch(url, { ...data }, { ...config }).then((response) => response.data);
}

=======
>>>>>>> f8a4dd6030653996833187bae2a7f6b6a31dae75
export async function del(url, config = {}) {
  return await axiosApi.delete(url, { ...config }).then((response) => response.data);
}
