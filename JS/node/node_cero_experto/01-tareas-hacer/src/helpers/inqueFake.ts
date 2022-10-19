import  inquirer ,{ type QuestionCollection } from "inquirer";
import 'colors';

const menuOptions: QuestionCollection = [
  {
    type: "list",
    name: "opcion",
    message: "¿Que desea hacer?",
    choices: [
      "Crear tarea",
      "Listar tarea",
      "Listar tareas completadas",
      "Listar tareas pendientes",
      "Completar tarea(s)",
      "Borrar tarea",
    ],
  },
];

export const inquirerMenu = async () => {
  console.clear();
  console.log("===========================".green);
  console.log("   Seleccione una opción   ".green);
  console.log("===========================".green);

  const opt = await inquirer.prompt(menuOptions);

  return opt;
};
