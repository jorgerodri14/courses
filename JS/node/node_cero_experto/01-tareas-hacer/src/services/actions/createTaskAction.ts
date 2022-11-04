import { tasks, TaskController } from "../../controllers/taskController";
import { managerReadInput } from "../manager/managerReadInput";
import { ManagerActionProvider } from "../manager/provider";
import { ActionCommand } from "./types";

export class CreateTaskAction implements ActionCommand {
  constructor(
    private manager: ManagerActionProvider,
    private tasks: TaskController
  ) {}
  async execute() {
    const { description } = await this.manager.readInput({
      message: "",
      name: "description",
    });
    await this.tasks.createTask(description);
  }
}

export const createTaskAction = new CreateTaskAction(managerReadInput, tasks);
