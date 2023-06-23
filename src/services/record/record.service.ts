import { PaginationRequest } from "../../data/models/pagination.model";
import { Record } from "../../data/models/record.model";
import { getAPIMethod } from "../../lib/helpers/axios/axios";

export const getRecordListService = async ({
  pagination
}: {
  pagination: PaginationRequest;
}): Promise<Record[]> => {
  const response = await getAPIMethod({
    name: "getRecordList",
    params: {
      ...pagination
    }
  });
  return response.data;
};

export const deleteRecordService = async ({
  id
}: {
  id: string;
}): Promise<Record> => {
  const response = await getAPIMethod({
    name: "deleteRecord",
    pathParams: {
      id
    }
  });
  return response.data;
};

export default {
  getRecordListService,
  deleteRecordService
};
