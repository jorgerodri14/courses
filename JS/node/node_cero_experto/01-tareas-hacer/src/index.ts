import { inquirerMenu, pause } from "./helpers/inquire";
import { ActionEnum } from "./services/actions/types";
import { manager } from "./services/manager/manager";
const main = async () => {
  let opcion = "";
  do {
    try {
      opcion = await inquirerMenu();
      await manager.action(opcion as ActionEnum);
      await pause();
    } catch (e) {
      console.log(e);
    }
  } while (opcion !== "7");
};

console.clear();

main();
