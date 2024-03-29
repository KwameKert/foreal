import axios from "axios";
import env from "../env";
export const baseURL = env().baseUrl;

const customAxios = axios.create({
  baseURL: `${baseURL}`,
});

const requestHandler = (request: any) => {
  ///request.headers.post["Content-Type"] = "multipart/form-data";
  request.headers.Authorization = `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjBEUTV5NVN0TTF2VGxUdUhNbGV5USJ9.eyJuaWNrbmFtZSI6Imt3YW1la2VydCIsIm5hbWUiOiJrd2FtZWtlcnRAZ21haWwuY29tIiwicGljdHVyZSI6Imh0dHBzOi8vcy5ncmF2YXRhci5jb20vYXZhdGFyLzhjNGI5ZDE2NzhiNjViOTU1MWM4MGYyYmFhNzhlYjRjP3M9NDgwJnI9cGcmZD1odHRwcyUzQSUyRiUyRmNkbi5hdXRoMC5jb20lMkZhdmF0YXJzJTJGa3cucG5nIiwidXBkYXRlZF9hdCI6IjIwMjItMDYtMDZUMTk6MzM6MjMuNTQ0WiIsImVtYWlsIjoia3dhbWVrZXJ0QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczovL2Rldi14Z2JmYmg5ZS51cy5hdXRoMC5jb20vIiwic3ViIjoiZW1haWx8NjI5NjE0NjI1ZmNlOGRjNjQ0NDA0ODIzIiwiYXVkIjoibWIxVUdVQk85dXMyMHk2dG9vTnRDRWdVQndJSWRkcEEiLCJpYXQiOjE2NTQ1NDQwMDMsImV4cCI6MTY1NDYzMDQwM30.ZT9q-d3YsZCVFJu3RTNeTB2OEif57Q2-56cSiH1LYFb8IlQfMtYwX5hp9a61QOxw6Wk0nD5h7h_82LrsHj9qo5WezHWrbFiuiOcb5mpCXboraVtsJQOuDx1TfnBCf1ihxTSzDfK4NXVPus97oqwijh_GL2Uy5A5EU0mb8l4j_bo1wodQhOBey2Ha2lg5Au5at-09GnxLTJJV9LeTwJYoInVETXirQyJck5CKOzZLH9-aHnhWCFb_n6DP3JrVj-rZdrGQDg62TMoeuPGFB5YykM1QlZgxLxu7Dp59maC3Epxcgt_Qdq9e0KnpgkNDwmULZnvoHw93Kyp2p2whnMHf9Q`;
  return request;
};

const responseHandler = (response: any) => {
  return response;
};

const errorHandler = (error: any) => {
  if (error.response.status === 401) {
    localStorage.removeItem("token");
    //navigate outside
  }
  return Promise.reject(error);
};

customAxios.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

customAxios.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default customAxios;
