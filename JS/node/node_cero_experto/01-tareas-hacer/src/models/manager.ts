import { ManagerProvider } from "../provider/managerProvider";

export class Manager implements ManagerProvider {
  public createTask(description: string) {}
  public listTasks() {}
}
