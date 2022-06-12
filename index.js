import { sayGoodbye } from "./outputs/goodbye.js";
import { fileManagerController, init} from "./controllers/controller.js";
import readline from "readline";


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

init();

rl.on("line", async (line) => fileManagerController(line)).on("close", () =>
  sayGoodbye()
);
