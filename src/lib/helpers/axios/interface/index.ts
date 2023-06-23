import { AxiosRequestConfig, Method } from "axios";

export interface ParamsProps {
  [name: string]: string;
}

export interface Endpoint {
  url: string;
  method: Method;
  baseUrl?: string;
}
export interface EndpointListProps {
  [name: string]: Endpoint;
}

export interface GetURIProps {
  url: string;
  params?: ParamsProps;
}

export interface CreateAxiosMethodProps extends AxiosRequestConfig<unknown> {
  name: string;
  pathParams?: ParamsProps;
}
