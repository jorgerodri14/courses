import { Task } from "./task";
type List = {
  [k: Task['id']]: Task;
}

export class Tasks {
  constructor(private list: List) {
    this.list = {}
  }


  public crearTarea(description: string) {
    const tarea = new Task(description);

    this.list = { ...this.list, [tarea.taskId]: tarea }
  }
}
