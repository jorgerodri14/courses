import { Task } from "./task";

type List = {
  [k: Task['id']]: Task;
}

export class Tasks {
  constructor(private list: List) {
    this.list = {}
  }
}
