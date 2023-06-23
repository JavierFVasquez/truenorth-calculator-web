import { Method } from "axios";

export const BalanceEndpoints = {
  getBalance: {
    method: "GET" as Method,
    url: "/balance",
    baseUrl: import.meta.env.VITE_API_OPERATION_URL
  }
};
