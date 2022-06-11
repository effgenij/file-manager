export const retrieveUserName = () => {
    const [_exec, _script, usernameArg] = process.argv;
    const username = usernameArg.split('=')[1];
    return username;
}