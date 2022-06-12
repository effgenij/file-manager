import path from "path";

export const moveUp = (currentPath) => {
    const destinationPath = path.parse(currentPath).dir
    return destinationPath;
};
