import { createActionTask } from "./createTask";
import { ActionEnum, ActionsCollect, IActionFactory } from "./types";

class ActionFactory implements IActionFactory {
  constructor(private actions: ActionsCollect) {}
  public getAction(action: ActionEnum) {
    return this.actions[action];
  }
}

const actions: ActionsCollect = {
  [ActionEnum.CREATE_TASK]: createActionTask,
};

export const actionFactory = new ActionFactory(actions);
