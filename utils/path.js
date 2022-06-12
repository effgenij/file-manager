import path from "path";
import fs from "fs";

export const returnAbsolutPath = (currentPath, newPath) => {
  return path.isAbsolute(newPath) ? newPath : path.join(currentPath, newPath);
}

export const pathIsDirectory = (destinationPath) => {
    const stats = fs.statSync(destinationPath);
    return stats.isDirectory();
}

export const pathIsFile = (destinationPath) => !pathIsDirectory(destinationPath);