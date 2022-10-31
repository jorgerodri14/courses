import { v4 as uuidv4 } from "uuid";
export class Task {
  private id: string;
  private completed: string | null;

  constructor(private description: string) {
    this.description = description;
    this.id = uuidv4();
    this.completed = null;
  }

  public get taskId(): string {
    return this.id;
  }
}
