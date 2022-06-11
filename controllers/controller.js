import { sayGoodbye } from "../outputs/goodbye.js";
import os from 'os';
import { parseLine } from "../utils/parsing.js";
import { sayInputError } from "../outputs/errors.js";
import { OScommand } from "../commands/os.js";
import { sayCWD } from "../outputs/cwd.js";


export const fileManagerController = (line) => {
    const inputs = parseLine(line);
    switch(inputs.command) {
        case '.exit':
            sayGoodbye();
            process.exit();
        case 'test':
            process.stdout.write(`test${os.EOL}`);
            sayCWD(os.homedir);
            break;
        case 'os':
            inputs.arg1 ? OScommand(inputs.arg1) : sayInputError();
            sayCWD(os.homedir);
            break;
        default:
            sayInputError();
      }
}