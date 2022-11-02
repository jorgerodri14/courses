import { actionFactory } from "../actions/actionsFactory";
import { ActionEnum, IActionFactory } from "../actions/types";
import { ManagerProvider } from "./provider";

class Manager implements ManagerProvider {
  constructor(private actionFactory: IActionFactory) { }

  public async action(type: ActionEnum) {
    const action = this.actionFactory.getAction(type);
    await action.execute();
  }
}

export const manager = new Manager(actionFactory);
