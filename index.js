import { sayHello } from './outputs/hello.js';
import { sayCWD } from './outputs/cwd.js';
import os from 'os';
import readline from 'readline';

sayHello();
sayCWD(os.homedir);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.on('line', async (line) => console.log(line))
  .on('close', () => {console.log(`Goodbay`)});