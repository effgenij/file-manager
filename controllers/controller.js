import { sayGoodbye } from "../outputs/goodbye.js";
import { sayHello } from "../outputs/hello.js";
import os from 'os';
import { parseLine } from "../utils/parsing.js";
import { sayInputError } from "../outputs/errors.js";
import { OScommand } from "../commands/os.js";
import { sayCWD } from "../outputs/cwd.js";
import { moveUp, changeDirectory } from "../commands/navigation.js";

let currentPath = os.homedir();

export const init = () => {
  sayHello();
  sayCWD(currentPath);
}

export const fileManagerController = (line) => {
    const inputs = parseLine(line);
    switch(inputs.command) {
        case '.exit':
            sayGoodbye();
            process.exit();
        case 'up':
            currentPath = moveUp(currentPath);
            sayCWD(currentPath);
            break;
        case 'cd':
            currentPath = changeDirectory(currentPath, inputs.arg1);
            sayCWD(currentPath);
            break;
        case 'test':
            process.stdout.write(`test${os.EOL}`);
            sayCWD(currentPath);
            break;
        case 'os':
            inputs.arg1 ? OScommand(inputs.arg1) : sayInputError();
            sayCWD(currentPath);
            break;
        default:
            sayInputError();
      }
}