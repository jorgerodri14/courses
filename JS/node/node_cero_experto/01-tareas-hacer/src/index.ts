import { Answers } from "inquirer";
import { inquirerMenu } from "./helpers/inqueFake";

const main = async () => {
  let opt: Answers = {};

    opt = await inquirerMenu();

    console.log('opt-->', opt)

  
};

console.clear();
main();
