import path from "path";
import fs from "fs";
import { readdir } from "fs/promises";
import os from "os";

export const moveUp = (currentPath) => {
  const destinationPath = path.parse(currentPath).dir;
  return destinationPath;
};

export const changeDirectory = (currentPath, newPath) => {
  try {
    const destinationPath = path.isAbsolute(newPath)
      ? newPath
      : path.join(currentPath, newPath);
    const stats = fs.statSync(destinationPath);
    return stats.isDirectory() ? destinationPath : undefined;
  } catch {
    return undefined;
  }
};

export const list = async (currentPath) => {
  const items = await readdir(currentPath);
  let result = "";
  items.map((item) => {
    result += `${item}${os.EOL}`;
  });
  process.stdout.write(result);
};
