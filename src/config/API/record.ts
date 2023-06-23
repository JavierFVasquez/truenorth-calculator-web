import { Method } from "axios";

export const RecordEndpoints = {
  getRecordList: {
    method: "GET" as Method,
    url: "/record",
    baseUrl: import.meta.env.VITE_API_RECORD_URL
  },
  deleteRecord: {
    method: "DELETE" as Method,
    url: "/record/{params.id}",
    baseUrl: import.meta.env.VITE_API_RECORD_URL
  }
};
