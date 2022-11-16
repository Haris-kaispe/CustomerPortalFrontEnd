import axios from "axios";
// import * as dotenv from 'dotenv'

import toastr from "toastr";
import "toastr/build/toastr.min.css";

import * as Const from "../constants/Constants";
// dotenv.config()

//apply base url for axios
// process.env.REACT_APP_BASE_URL ||
const API_URL = "https://customer-portal-kaispe.herokuapp.com/api";

const axiosApi = axios.create({
  baseURL: API_URL,
});

axiosApi.interceptors.response.use(
  (res) => {
    // Add configurations here
    if (res.status === 201) {
      toastr.success("Record Created", "success");
    } else if (res.status === 200 && res.config.method != "get") {
      toastr.success("Record Updated Successfully", "Record Updated");
    } else if (res.status === 202) {
      toastr.info("Record Deleted successfully", "Record Delete");
    } else if (res.status === 204) {
      toastr.info("Record Not Found", "Record Not Found");
    } else if (res.status === 401) {
      toastr.error("Record Not Found", "Record Not Found");
    }
    return res;
  },
  (err) => {
    const { data, status } = err.response;

    if (status === 401) {
      //unAuthorized
      toastr.error(data.message, "Unauthorized");
    } else {
      toastr.error("Some thing went wrong", "error");
    }
    return Promise.reject(err);
  }
);

const token = window.localStorage.getItem(Const.ACCESS_TOKEN);
console.log(token);

//  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInVzZXJJZCI6IlVJRDEwIiwiaWQiOiI2MzUyN2E1NTU1ZGZjN2E4MDc5YTVlNGUiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjgwNjM2NjksImV4cCI6MTY2ODE0NjQ2OX0.j00XiJnbRUnY1n5okuk5oKm-bkMM8jPdZYi55jqY9QU";

export async function get(
  url,
  config = { headers: { Authorization: `Bearer ${token}` } }
) {
  return await axiosApi.get(url, config).then((response) => response.data);
}

export async function post(
  url,
  data,
  config = { headers: { Authorization: `Bearer ${token}` } }
) {
  return axiosApi
    .post(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export async function postwithnotoken(url, data, config = {}) {
  return axiosApi
    .post(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export async function postformData(
  url,
  data,
  config = {
    headers: {
      Authorization: `Bearer ${token}`,
      //,
      // "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
  }
) {
  return axiosApi
    .postForm(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export async function put(url, data, config = {}) {
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export async function del(url, config = {}) {
  return await axiosApi
    .delete(url, { ...config })
    .then((response) => response.data);
}
