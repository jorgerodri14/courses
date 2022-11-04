import { TaskController, tasks } from "../../controllers/taskController";
import { ActionCommandProvider } from "../../providers/actions";

export class ListTasksAction implements ActionCommandProvider {
  constructor(private tasks: TaskController) {}

  public async execute() {
    await this.tasks.listTasks();
  }
}

export const listTasksAction = new ListTasksAction(tasks);
