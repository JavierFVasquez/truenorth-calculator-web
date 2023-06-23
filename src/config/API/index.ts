import { EndpointListProps } from "../../lib/helpers/axios/interface";
import { BalanceEndpoints } from "./balance";
import { OperationEndpoints } from "./operation";
import { RecordEndpoints } from "./record";

export const BaseURL = "http://localhost:3000/";
// export const BaseURL = "https://54t4g2pui3.execute-api.us-east-1.amazonaws.com";

export const Endpoints: EndpointListProps = {
  ...RecordEndpoints,
  ...OperationEndpoints,
  ...BalanceEndpoints
};
