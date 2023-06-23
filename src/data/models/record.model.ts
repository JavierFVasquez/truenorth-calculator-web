import { Operation } from "./operation.model";
import { User } from "./user.model";

export interface Record {
  _id: string;
  user: User;
  operation: Operation;
  amount: number;
  userBalance: number;
  createdAt: Date;
  deletedAt: Date;
}
