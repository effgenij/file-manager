import { sayGoodbye } from "../outputs/goodbye.js";
import os from 'os';

export const fileManagerController = (line) => {
    switch(line) {
        case '.exit':
            sayGoodbye();
            process.exit();
        case 'test':
            process.stdout.write(`test${os.EOL}`)
        default:

      }
}