import { Record } from "../../data/models/record.model";
import { getAPIMethod } from "../../lib/helpers/axios/axios";

export const addition = async ({
  operand1,
  operand2
}: {
  operand1?: number;
  operand2?: number;
}): Promise<Record> => {
  const response = await getAPIMethod({
    name: "addition",
    data: {
      operand1,
      operand2
    }
  });
  return response.data;
};
export const substraction = async ({
  operand1,
  operand2
}: {
  operand1?: number;
  operand2?: number;
}): Promise<Record> => {
  const response = await getAPIMethod({
    name: "substraction",
    data: {
      operand1,
      operand2
    }
  });
  return response.data;
};
export const multiplication = async ({
  operand1,
  operand2
}: {
  operand1?: number;
  operand2?: number;
}): Promise<Record> => {
  const response = await getAPIMethod({
    name: "multiplication",
    data: {
      operand1,
      operand2
    }
  });
  return response.data;
};
export const division = async ({
  operand1,
  operand2
}: {
  operand1?: number;
  operand2?: number;
}): Promise<Record> => {
  const response = await getAPIMethod({
    name: "division",
    data: {
      operand1,
      operand2
    }
  });
  return response.data;
};
export const squareRoot = async ({
  operand1,
  operand2
}: {
  operand1?: number;
  operand2?: number;
}): Promise<Record> => {
  const response = await getAPIMethod({
    name: "squareRoot",
    data: {
      operand1,
      operand2
    }
  });
  return response.data;
};
export const randomString = async ({
  operand1,
  operand2
}: {
  operand1?: number;
  operand2?: number;
}): Promise<Record> => {
  const response = await getAPIMethod({
    name: "randomString",
    data: {
      operand1,
      operand2
    }
  });
  return response.data;
};

export default {
  addition,
  substraction,
  multiplication,
  division,
  squareRoot,
  randomString
};
