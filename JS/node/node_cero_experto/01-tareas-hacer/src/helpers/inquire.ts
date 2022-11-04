import inquirer, { type QuestionCollection } from "inquirer";
import "colors";
import { ActionEnum } from "../providers/actions";

const menuOptions: QuestionCollection = [
  {
    type: "list",
    name: "opcion",
    message: "¿Que desea hacer?",
    choices: [
      {
        value: ActionEnum.CREATE_TASK,
        name: "1. Crear tarea",
      },
      {
        value: ActionEnum.LIST_TASK,
        name: "2. Listar tarea",
      },
      {
        value: "3",
        name: "3. Listar tareas completadas",
      },
      {
        value: "4",
        name: "4. Listar tareas pendientes",
      },
      {
        value: "5",
        name: "5. Completar tarea(s)",
      },
      {
        value: "6",
        name: "6. Borrar tarea",
      },
      {
        value: "7",
        name: "7. Salir",
      },
    ],
  },
];

export const inquirerMenu = async () => {
  console.clear();
  console.log("===========================".green);
  console.log("   Seleccione una opción   ".green);
  console.log("===========================".green);

  const { opcion } = await inquirer.prompt(menuOptions);
  return opcion;
};

export const pauseInput: QuestionCollection = {
  type: "input",
  name: "pause",
  message: `\nPresione ${"ENTER".yellow} para continuar\n`,
};

export const pause = async () => {
  const { advance } = await inquirer.prompt(pauseInput);

  return advance;
};
