import axios from "axios";
import { CreateAxiosMethodProps, GetURIProps } from "./interface";
import { store } from "../../../data/redux/reducers";
import { BaseURL, Endpoints } from "../../../config/API";

const axiosInstance = axios.create({
  // baseURL: api.baseUrl,
  timeout: 40000
});

const getURI = ({ url, params = {} }: GetURIProps) => {
  const matches = url.match(/\{params.(\w+)}/g);
  if (matches) {
    matches.forEach(match => {
      const name = match.replace("{params.", "").replace("}", "");
      url = url.replace(match, params[name]);
    });
  }
  return url;
};

export const getAPIMethod = async (requestParams: CreateAxiosMethodProps) => {
  const { name, pathParams } = requestParams;
  const endpointObject = Endpoints[name];

  const token = store.getState().auth.token;

  return axiosInstance({
    baseURL: endpointObject.baseUrl || BaseURL,
    method: endpointObject.method,
    url: getURI({ url: endpointObject.url, params: pathParams }),
    ...requestParams,
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      ...requestParams.headers
    }
  });
};

export default axiosInstance;
