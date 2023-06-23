import { EndpointListProps } from "../../lib/helpers/axios/interface";
import { BalanceEndpoints } from "./balance";
import { OperationEndpoints } from "./operation";
import { RecordEndpoints } from "./record";

export const BaseURL = process.env.BASE_API_URL;

export const Endpoints: EndpointListProps = {
  ...RecordEndpoints,
  ...OperationEndpoints,
  ...BalanceEndpoints
};
