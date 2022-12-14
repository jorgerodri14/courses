import { Answers } from "inquirer";
import { ActionEnum } from "../actions/types";

export interface ManagerProvider {
  action: (type: ActionEnum) => Promise<void>;
}

export interface ManagerActionProvider {
  readInput: ({
    message,
    name,
  }: {
    message: string;
    name: string;
  }) => Promise<Answers>;
}
