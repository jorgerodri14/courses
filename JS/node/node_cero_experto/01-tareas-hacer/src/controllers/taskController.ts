import { writeFile } from "node:fs/promises";
import fs from "fs";
import "colors";
import { Task } from "../models/task";

type List = {
  [k: Task["id"]]: Task;
};

export class TaskController {
  private dir = "./data";
  private file = "tasks.json";
  constructor(private list = {}) {}

  public async createTask(description: string) {
    try {
      const tarea = new Task(description);

      this.list = { ...this.list, [tarea.taskId]: tarea };

      if (!fs.existsSync(this.dir)) {
        fs.mkdirSync(this.dir);
      }

      await writeFile(this.dir + "/" + this.file, JSON.stringify(this.list));
    } catch (err) {
      console.log("Error");
    }
  }
}

export const tasks = new TaskController();
