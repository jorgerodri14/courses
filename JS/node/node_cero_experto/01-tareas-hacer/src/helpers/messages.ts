import "colors";
import { readlineConsole } from "./readline";

export const showMenu = (): Promise<string> => {
  return new Promise((resolve) => {
    console.log("===========================".green);
    console.log("   Seleccione una opción   ".green);
    console.log("===========================".green);

    console.log(`${"1.".green} Crear tarea`);
    console.log(`${"2.".green} Listar tarea`);
    console.log(`${"3.".green} Listar tareas completadas`);
    console.log(`${"4.".green} Listar tareas pendientes`);
    console.log(`${"5.".green} Completar tarea(s)`);
    console.log(`${"6.".green} Borrar tarea`);
    console.log(`${"0.".green} Salir \n`);

    readlineConsole({
      question: "Seleccione una opción: ",
      cb: ({ readline, opt }) => {
        readline.close();
        resolve(opt)
      },
    });
  });
};

export const pausa = () => {
  return new Promise(resolve=>{
    readlineConsole({
      question: `\nPresione ${"ENTER".yellow} para continuar\n`,
      cb: ({ readline, opt }) => {
        readline.close();
        resolve(opt)
      },
    });  
  })
};
