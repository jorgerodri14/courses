import { createTaskAction } from "./createTaskAction";
import { ActionEnum, ActionsCollect, IActionFactory } from "./types";

class ActionFactory implements IActionFactory {
  constructor(private actions: ActionsCollect) {}
  public getAction(action: ActionEnum) {
    return this.actions[action];
  }
}

const actions: ActionsCollect = {
  [ActionEnum.CREATE_TASK]: createTaskAction,
};

export const actionFactory = new ActionFactory(actions);
