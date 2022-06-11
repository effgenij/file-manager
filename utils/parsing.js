export const parseLine = (line) => {
  const inputs = line.split(" ");
  const [command, arg1, arg2] = inputs;
  const inputObject = { command, arg1, arg2 };
  return inputObject;
};
