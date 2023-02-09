import * as instance from "axios";

const AxiosClient = instance.create({
  baseURL: "http://localhost:8080/api-firstapp",
});

const requestHandler = (request) => {
  request.headers["Accept"] = "aplication/json";
  request.headers["Content-Type"] = "aplication/json";
  const session = JSON.parse(localStorage.getItem("User")) || null;
  if (session?.isLogged) 
  request.headers['Authorization']=`Bearer ${
    session.token}`;
    return request;
};

const errorResponseHandler= (error)=>{
    return Promise.reject(error);
};

const successResponseHandler = (response)=>{
return Promise.resolve(response.data);
}
AxiosClient.interceptors.request.use(
    requestHandler,
    (error)=>{
        Promise.reject(error)
    }
)


AxiosClient.interceptors.request.use(
    successResponseHandler,
    (error)=>{
    errorResponseHandler(error)
    }
)

export default AxiosClient;