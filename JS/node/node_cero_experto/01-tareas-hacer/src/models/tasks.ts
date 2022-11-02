import { writeFile } from "node:fs/promises";
import fs from "fs";
import { Task } from "./task";
import "colors";

type List = {
  [k: Task["id"]]: Task;
};

export class Tasks {
  private dir = "./data";
  private file = "tasks.json";
  constructor(private list = {}) {}

  public async crearTarea(description: string) {
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

export const tasks = new Tasks();
