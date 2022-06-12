import path from "path";
import fs from "fs";

export const moveUp = (currentPath) => {
  const destinationPath = path.parse(currentPath).dir;
  return destinationPath;
};

export const changeDirectory = (currentPath, newPath) => {
  const destinationPath = path.isAbsolute(newPath) ? newPath : path.join(currentPath, newPath);
  const stats = fs.statSync(destinationPath);
  return stats.isDirectory() ? destinationPath : undefined;
};

export const list = (currentPath) => {};
