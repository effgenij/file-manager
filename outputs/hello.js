import { retrieveUserName } from "../utils/arguments.js";
import os from 'os';

export const sayHello = () => {
  const username = retrieveUserName();
  process.stdout.write(`Welcome to the File Manager, ${username}!${os.EOL}`);
};
