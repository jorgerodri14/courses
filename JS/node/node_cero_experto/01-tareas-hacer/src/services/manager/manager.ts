import { ActionEnum, ActionFactoryProvider } from "../../providers/actions";
import { ManagerProvider } from "../../providers/manager";
import { actionFactory } from "../actions/actionsFactory";

class Manager implements ManagerProvider {
  constructor(private actionFactory: ActionFactoryProvider) {}

  public async action(type: ActionEnum) {
    const action = this.actionFactory.getAction(type);
    await action.execute();
  }
}

export const manager = new Manager(actionFactory);
