import { sayHello } from "./outputs/hello.js";
import { sayGoodbye } from "./outputs/goodbye.js";
import { sayCWD } from "./outputs/cwd.js";
import { fileManagerController } from "./controllers/controller.js";
import readline from "readline";
import os from 'os';

sayHello();
sayCWD(os.homedir);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", async (line) => fileManagerController(line)).on("close", () =>
  sayGoodbye()
);
