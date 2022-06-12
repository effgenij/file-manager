import { sayGoodbye } from "../outputs/goodbye.js";
import { sayHello } from "../outputs/hello.js";
import os from "os";
import { parseLine } from "../utils/parsing.js";
import { sayInputError, sayOperationError } from "../outputs/errors.js";
import { OScommand } from "../commands/os.js";
import { sayCWD } from "../outputs/cwd.js";
import { moveUp, changeDirectory, list } from "../commands/navigation.js";
import { calculateHash } from "../commands/hash.js";
import {
  returnAbsolutPath,
  pathIsFile,
  pathIsDirectory,
} from "../utils/path.js";
import {
  catFile,
  addFile,
  renameFile,
  copy,
  remove,
  move,
} from "../commands/files.js";
import { zip, unZip } from "../commands/compress.js";

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
      case "cat":
        const catPath = returnAbsolutPath(currentPath, inputs.arg1);
        pathIsFile(catPath) ? catFile(catPath) : sayInputError();
        sayCWD(currentPath);
        break;
      case "add":
        const addPath = returnAbsolutPath(currentPath, inputs.arg1);
        await addFile(addPath);
        sayCWD(currentPath);
        break;
      case "rn":
        const rnOriginalPath = returnAbsolutPath(currentPath, inputs.arg1);
        const rnPath = returnAbsolutPath(currentPath, inputs.arg2);
        pathIsFile(rnOriginalPath)
          ? renameFile(rnOriginalPath, rnPath)
          : sayInputError();
        sayCWD(currentPath);
        break;
      case "cp":
        const cpOriginalPath = returnAbsolutPath(currentPath, inputs.arg1);
        const cpPath = returnAbsolutPath(currentPath, inputs.arg2);
        pathIsFile(cpOriginalPath) && pathIsDirectory(cpPath)
          ? await copy(cpOriginalPath, cpPath)
          : sayInputError();
        sayCWD(currentPath);
        break;
      case "mv":
        const mvOriginalPath = returnAbsolutPath(currentPath, inputs.arg1);
        const mvPath = returnAbsolutPath(currentPath, inputs.arg2);
        pathIsFile(mvOriginalPath) && pathIsDirectory(mvPath)
          ? await move(mvOriginalPath, mvPath)
          : sayInputError();
        sayCWD(currentPath);
        break;
      case "rm":
        const rmPath = returnAbsolutPath(currentPath, inputs.arg1);
        pathIsFile(rmPath) ? remove(rmPath) : sayInputError();
        sayCWD(currentPath);
        break;
      case "compress":
        const compressOriginalPath = returnAbsolutPath(
          currentPath,
          inputs.arg1
        );
        const compressPath = returnAbsolutPath(currentPath, inputs.arg2);
        pathIsFile(compressOriginalPath)
          ? zip(compressOriginalPath, compressPath)
          : sayInputError();
        sayCWD(currentPath);
        break;
      case "decompress":
        const decompressOriginalPath = returnAbsolutPath(
          currentPath,
          inputs.arg1
        );
        const decompressPath = returnAbsolutPath(currentPath, inputs.arg2);
        pathIsFile(decompressOriginalPath)
          ? unZip(decompressOriginalPath, decompressPath)
          : sayInputError();
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
