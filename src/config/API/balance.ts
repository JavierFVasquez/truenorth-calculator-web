import { Method } from "axios";

export const BalanceEndpoints = {
  getBalance: {
    method: "GET" as Method,
    url: "/balance",
    baseUrl: process.env.API_OPERATION_URL
  }
};
