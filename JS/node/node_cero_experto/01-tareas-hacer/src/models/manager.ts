import { ManagerProvider } from "../provider/managerProvider";
import { Tasks } from "./tasks";

export class ManagerTask implements ManagerProvider {
  constructor(private tasks: Tasks) {}
  public createTask(description: string) {
    this.tasks.crearTarea(description);
  }
  public listTasks() {}
}
