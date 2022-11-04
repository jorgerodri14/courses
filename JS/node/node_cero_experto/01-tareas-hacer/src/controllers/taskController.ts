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
      if (this.existPath && !this.list) {
        this.list = await this.retriveTasks();
      }

      if (!this.existPath) {
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

  public async listTasks() {
    try {
      if (this.existPath) {
        const list = await this.retriveTasks();
        console.log(list);
        return;
      }
      console.log("Lista vacía");
    } catch (e) {
      console.log(e);
    }
  }

  private async retriveTasks() {
    const list = await readFile(this.path, {
      encoding: "utf8",
    });
    return JSON.parse(list);
  }

  private get existPath() {
    return fs.existsSync(this.path);
  }
}

export const tasks = new TaskController();
