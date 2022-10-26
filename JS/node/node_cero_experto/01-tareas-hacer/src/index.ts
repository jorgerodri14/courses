import { inquirerMenu, pause } from "./helpers/inquire";
import { Task } from "./models/task";
import { Tasks } from "./models/tasks";
const main = async () => {
  let opcion = "";

  do {
    try {
      opcion = await inquirerMenu();

      console.log('opt-->', opcion)

      await pause()



    } catch (e) {
      console.log(e);
    }
  } while (opcion !== "7");
};

console.clear();

main();
