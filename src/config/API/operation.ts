import { Method } from "axios";

export const OperationEndpoints = {
  addition: {
    method: "POST" as Method,
    url: "/addition",
    baseUrl: process.env.API_OPERATION_URL
  },
  substraction: {
    method: "POST" as Method,
    url: "/substraction",
    baseUrl: process.env.API_OPERATION_URL
  },
  multiplication: {
    method: "POST" as Method,
    url: "/multiplication",
    baseUrl: process.env.API_OPERATION_URL
  },
  division: {
    method: "POST" as Method,
    url: "/division",
    baseUrl: process.env.API_OPERATION_URL
  },
  squareRoot: {
    method: "POST" as Method,
    url: "/squareRoot",
    baseUrl: process.env.API_OPERATION_URL
  },
  randomString: {
    method: "POST" as Method,
    url: "/randomString",
    baseUrl: process.env.API_OPERATION_URL
  }
};
