import {
  ActionEnum,
  ActionFactoryProvider,
  ActionsCollectProvider,
} from "../../providers/actions";
import { createTaskAction } from "./createTaskAction";
import { listTasksAction } from "./listTasksActions";

class ActionFactory implements ActionFactoryProvider {
  constructor(private actions: ActionsCollectProvider) {}
  public getAction(action: ActionEnum) {
    return this.actions[action];
  }
}

const actions: ActionsCollectProvider = {
  [ActionEnum.CREATE_TASK]: createTaskAction,
  [ActionEnum.LIST_TASK]: listTasksAction,
};

export const actionFactory = new ActionFactory(actions);
