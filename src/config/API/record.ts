import { Method } from "axios";

export const RecordEndpoints = {
  getRecordList: {
    method: "GET" as Method,
    url: "/record",
    baseUrl: process.env.API_RECORD_URL
  },
  deleteRecord: {
    method: "DELETE" as Method,
    url: "/record/{params.id}",
    baseUrl: process.env.API_RECORD_URL
  }
};
