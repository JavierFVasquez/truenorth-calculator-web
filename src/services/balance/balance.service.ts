import { User } from "../../data/models/user.model";
import { getAPIMethod } from "../../lib/helpers/axios/axios";

export const getBalanceService = async (): Promise<User> => {
  const response = await getAPIMethod({
    name: "getBalance"
  });
  return response.data;
};

export default {
  getBalanceService
};
