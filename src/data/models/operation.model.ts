export type OperationType =
  | "ADDITION"
  | "SUBSTRACTION"
  | "MULTIPLICATION"
  | "DIVISION"
  | "SQUARE_ROOT"
  | "RANDOM_STRING";

export interface Operation {
  operation: OperationType;
  operand1: number;
  operand2: number;
  result: number;
  stringResult: string;
  cost: number;
}
