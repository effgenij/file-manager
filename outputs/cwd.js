import os from 'os';

export const sayCWD = (directoryPath) => {
  process.stdout.write(`${os.EOL}${os.EOL}You are currently in ${directoryPath}${os.EOL}`);
};
