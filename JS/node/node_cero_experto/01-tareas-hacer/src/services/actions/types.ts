export enum ActionEnum {
  CREATE_TASK = "CREATE::TASK",
}

export interface IActionFactory {
  getAction: (action: ActionEnum) => ActionCommand;
}

export interface ActionCommand {
  execute: () => Promise<void>;
}

export type ActionsCollect = {
  [K in ActionEnum]: ActionCommand;
};
