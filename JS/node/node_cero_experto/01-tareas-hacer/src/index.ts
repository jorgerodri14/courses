import { inquirerMenu, pause } from "./helpers/inquire";
const main = async () => {
  let opcion = "";


  do {
    try {
      opcion = await inquirerMenu();


      await pause()



    } catch (e) {
      console.log(e);
    }
  } while (opcion !== "7");
};

console.clear();

main();
