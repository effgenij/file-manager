import path from "path";

export const moveUp = (currentPath) => {
    const destinationPath = path.parse(currentPath).dir
    return destinationPath;
};

export const changeDirectory = (currentPath, newPath) => {
    if(path.isAbsolute(newPath)) {
        return newPath;
    }
    const destinationPath = path.join(currentPath, newPath);    
    return destinationPath;
};
