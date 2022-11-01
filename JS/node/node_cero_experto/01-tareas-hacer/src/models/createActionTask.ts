import {
  CreateActionTaskProvider,
  ManagerActionProvider,
} from "../provider/actionTask";
import { managerReadInput } from "./managerCreateTask";
import { tasks, Tasks } from "./tasks";

class CreateActionTask implements CreateActionTaskProvider {
  constructor(private manager: ManagerActionProvider, private tasks: Tasks) {}
  async create() {
    const { description } = await this.manager.readInput({
      message: "",
      name: "description",
    });
    this.tasks.crearTarea(description);
  }
}

export const createActionTask = new CreateActionTask(managerReadInput, tasks);
