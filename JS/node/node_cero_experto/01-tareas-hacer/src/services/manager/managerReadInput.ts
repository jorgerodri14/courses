import inquirer, { type QuestionCollection } from "inquirer";
import { ManagerActionProvider } from "../../providers/manager";

class ManagerReadInput implements ManagerActionProvider {
  async readInput({ message, name }: { message: string; name: string }) {
    const question: QuestionCollection = {
      type: "input",
      name,
      message,
      validate(value) {
        if (value.length === 0) {
          return "Introduzca algo..";
        }
        return true;
      },
    };

    return await inquirer.prompt(question);
  }
}

export const managerReadInput = new ManagerReadInput();
