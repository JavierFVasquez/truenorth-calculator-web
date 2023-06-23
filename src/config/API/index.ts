import { EndpointListProps } from "../../lib/helpers/axios/interface";
import { BalanceEndpoints } from "./balance";
import { OperationEndpoints } from "./operation";
import { RecordEndpoints } from "./record";

export const BaseURL = import.meta.env.VITE_BASE_API_URL;

export const Endpoints: EndpointListProps = {
  ...RecordEndpoints,
  ...OperationEndpoints,
  ...BalanceEndpoints
};
