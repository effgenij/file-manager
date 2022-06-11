import { sayGoodbye } from "../outputs/goodbye.js";
import os from 'os';
import { parseLine } from "../utils/parsing.js";
import { sayInputError } from "../outputs/errors.js";


export const fileManagerController = (line) => {
    const inputs = parseLine(line);
    switch(inputs.command) {
        case '.exit':
            sayGoodbye();
            process.exit();
        case 'test':
            process.stdout.write(`test${os.EOL}`);
            break;
        default:
            sayInputError();
      }
}