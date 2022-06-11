import { retrieveUserName } from "../utils/arguments.js";

export const sayHello = () => {
  const username = retrieveUserName();
  process.stdout.write(`Welcome to the File Manager, ${username}!`);
};
