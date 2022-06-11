export const retrieveUserName = () => {
  const [_exec, _script, usernameArg] = process.argv;
  const username = usernameArg.split("=")[1];
  const capitalizedUsername = capitalizeFirstLetter(username.toLowerCase());
  return capitalizedUsername;
};

const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);
