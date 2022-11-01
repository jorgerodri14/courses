import { Answers } from "inquirer";

export enum ActionsTaskEnum {
  CREATE_TASK = "CREATE::TASK",
}
export interface ActionTask {
  action: (type: ActionsTaskEnum) => void;
}

export interface CreateActionTaskProvider {
  create: () => Promise<void>;
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

export interface Deps {
  [ActionsTaskEnum.CREATE_TASK]: CreateActionTaskProvider["create"];
}
