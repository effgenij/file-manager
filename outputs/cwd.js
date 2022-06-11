import os from 'os';

export const sayCWD = (directoryPath) => {
  process.stdout.write(`You are currently in ${directoryPath}${os.EOL}`);
};
