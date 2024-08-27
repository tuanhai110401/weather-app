import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.meteosource.com/api/v1/free/",
});

// request interceptor
instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
// response interceptor
instance.interceptors.response.use(
  function (response) {
    // console.log("interceptor>>", response);
    return response.data;
  },
  function (error) {
    return error && error.response && error.response.data
      ? error.response.data
      : Promise.reject(error);
  }
);
export default instance;
