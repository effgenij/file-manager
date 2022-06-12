import { sayGoodbye } from "../outputs/goodbye.js";
import { sayHello } from "../outputs/hello.js";
import os from "os";
import { parseLine } from "../utils/parsing.js";
import { sayInputError, sayOperationError } from "../outputs/errors.js";
import { OScommand } from "../commands/os.js";
import { sayCWD } from "../outputs/cwd.js";
import { moveUp, changeDirectory, list } from "../commands/navigation.js";
import { calculateHash } from "../commands/hash.js";
import { returnAbsolutPath, pathIsFile } from "../utils/path.js";

let currentPath = os.homedir();

export const init = () => {
  sayHello();
  sayCWD(currentPath);
};

export const fileManagerController = async (line) => {
  const inputs = parseLine(line);
  try {
    switch (inputs.command) {
      case ".exit":
        sayGoodbye();
        process.exit();
      case "up":
        currentPath = moveUp(currentPath);
        sayCWD(currentPath);
        break;
      case "cd":
        const changedPath = changeDirectory(currentPath, inputs.arg1);
        changedPath ? (currentPath = changedPath) : sayInputError();
        sayCWD(currentPath);
        break;
      case "ls":
        await list(currentPath);
        sayCWD(currentPath);
        break;
      case "hash":
        const hashPath = returnAbsolutPath(currentPath, inputs.arg1);
        pathIsFile(hashPath) ? await calculateHash(hashPath) : sayInputError();
        sayCWD(currentPath);
        break;
      case "os":
        inputs.arg1 ? OScommand(inputs.arg1) : sayInputError();
        sayCWD(currentPath);
        break;
      default:
        sayInputError();
        sayCWD(currentPath);
    }
  } catch (err) {
    sayOperationError();
    sayCWD(currentPath);
  }
};
