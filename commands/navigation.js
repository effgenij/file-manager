import path from "path";
import fs from "fs";
import { readdir } from "fs/promises";
import os from "os";
import { returnAbsolutPath, pathIsDirectory } from "../utils/path.js"

export const moveUp = (currentPath) => {
  const destinationPath = path.parse(currentPath).dir;
  return destinationPath;
};

export const changeDirectory = (currentPath, newPath) => {
  try {
    const destinationPath = returnAbsolutPath(currentPath, newPath);
    return pathIsDirectory(destinationPath) ? destinationPath : undefined;
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
