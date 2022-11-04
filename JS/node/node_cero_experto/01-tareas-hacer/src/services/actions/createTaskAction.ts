import { tasks, TaskController } from "../../controllers/taskController";
import { ActionCommandProvider } from "../../providers/actions";
import { ManagerActionProvider } from "../../providers/manager";
import { managerReadInput } from "../manager/managerReadInput";

export class CreateTaskAction implements ActionCommandProvider {
  constructor(
    private manager: ManagerActionProvider,
    private tasks: TaskController
  ) {}
  public async execute() {
    const { description } = await this.manager.readInput({
      message: "",
      name: "description",
    });
    await this.tasks.createTask(description);
  }
}

export const createTaskAction = new CreateTaskAction(managerReadInput, tasks);
