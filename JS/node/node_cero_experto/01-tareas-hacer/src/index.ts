import { inquirerMenu, pause } from "./helpers/inquire";
import { ActionsTaskEnum } from "./provider/actionTask";
import { manager } from "./provider/manager";
const main = async () => {
  let opcion = "";

  do {
    try {
      opcion = await inquirerMenu();
      await manager.action(opcion as ActionsTaskEnum);
      await pause();
    } catch (e) {
      console.log(e);
    }
  } while (opcion !== "7");
};

console.clear();

main();
