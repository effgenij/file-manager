import { retrieveUserName } from "../utils/arguments.js";

export const sayGoodbye = () => {
  const username = retrieveUserName();
  process.stdout.write(`Thank you for using File Manager, ${username}!`);
};
