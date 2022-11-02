import { managerReadInput } from "../manager/managerReadInput";
import { tasks, Tasks } from "../../models/tasks";
import { ManagerActionProvider } from "../manager/provider";
import { ActionCommand } from "./types";

export class CreateActionTask implements ActionCommand {
  constructor(private manager: ManagerActionProvider, private tasks: Tasks) {}
  async execute() {
    const { description } = await this.manager.readInput({
      message: "",
      name: "description",
    });
    this.tasks.crearTarea(description);
  }
}

export const createActionTask = new CreateActionTask(managerReadInput, tasks);
