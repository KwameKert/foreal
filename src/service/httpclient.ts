import axios from "axios";

const customAxios = axios.create({
  baseURL: `http://localhost:3001/api`,
});

const requestHandler = (request: any) => {
  request.headers.Authorization = `Bearer ${getToken()}`;
  return request;
};

const responseHandler = (response: any) => {
  return response;
};

const errorHandler = (error: any) => {
  console.log("error ", error.response.status);
  if (error.response.status === 401) {
    localStorage.removeItem("token");
    //navigate outside
  }
  return Promise.reject(error);
};

function getToken() {
  return localStorage.getItem("token");
}

customAxios.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

customAxios.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default customAxios;
