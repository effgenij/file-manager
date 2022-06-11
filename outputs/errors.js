import os from "os";

export const sayInputError = () => {
  process.stdout.write(`Invalid input${os.EOL}`);
};

export const sayOperationError = () => {
  process.stdout.write(`Operation failed${os.EOL}`);
};
