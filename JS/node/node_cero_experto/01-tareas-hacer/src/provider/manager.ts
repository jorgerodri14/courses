import { createActionTask } from "../models/createActionTask";
import { ActionsTaskEnum, ActionTask, Deps } from "./actionTask";

class Manager implements ActionTask {
  constructor(private deps: Deps) {}

  public async action(type: ActionsTaskEnum) {
    await this.deps[type]();
  }
}

export const manager = new Manager({
  [ActionsTaskEnum.CREATE_TASK]: () => createActionTask.create(),
});
