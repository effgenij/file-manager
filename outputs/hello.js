import { retrieveUserName } from '../utils/arguments.js';

export const sayHello = () => {
    const username = retrieveUserName();
    const capitalizedUsername = capitalizeFirstLetter(username.toLowerCase());
    console.log(`Welcome to the File Manager, ${capitalizedUsername}!`);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
