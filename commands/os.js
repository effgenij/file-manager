import os from "os";
import { sayInputError, sayOperationError } from "../outputs/errors.js";

export const OScommand = (argument) => {
  try {
    switch (argument) {
      case "--EOL":
        process.stdout.write(JSON.stringify(os.EOL));
        break;
      case "--cpus":
        const cpuCores = os.cpus();
        process.stdout.write(`Total CPU cores: ${cpuCores.length}${os.EOL}`);
        cpuCores.map((item) =>
          process.stdout.write(
            `Model: ${item.model}, Clock rate: ${item.speed / 1000} GHz${
              os.EOL
            }`
          )
        );
        break;
      case "--homedir":
        process.stdout.write(os.homedir());
        break;
      case "--username":
        process.stdout.write(os.userInfo().username);
        break;
      case "--architecture":
        process.stdout.write(os.arch());
        break;
      default:
        sayInputError();
    }
  } catch (e) {
    sayOperationError();
  }
};
