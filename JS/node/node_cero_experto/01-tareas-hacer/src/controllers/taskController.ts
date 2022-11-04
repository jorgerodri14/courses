import { readFile, writeFile } from "node:fs/promises";
import fs from "fs";
import "colors";
import { Task } from "../models/task";

type List = {
  [k: Task["id"]]: Task;
};

export class TaskController {
  private dir = "./data";
  private file = "tasks.json";
  private path = this.dir + "/" + this.file;
  private list: List | null = null;

  public async createTask(description: string) {
    try {
      const existPath = fs.existsSync(this.path);

      if (existPath && !this.list) {
        const list = await readFile(this.path, {
          encoding: "utf8",
        });
        this.list = JSON.parse(list);
      }

      if (!existPath) {
        fs.mkdirSync(this.dir);
      }

      const tarea = new Task(description);

      this.list = this.list
        ? { ...this.list, [tarea.taskId]: tarea }
        : { [tarea.taskId]: tarea };

      await writeFile(this.path, JSON.stringify(this.list));
    } catch (err) {
      console.log(err);
    }
  }
}

export const tasks = new TaskController();
