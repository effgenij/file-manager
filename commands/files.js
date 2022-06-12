/*
cat path_to_file
add new_file_name
rn path_to_file new_filename
cp path_to_file path_to_new_directory
mv path_to_file path_to_new_directory
rm path_to_file
*/
import fs from "fs";
import { writeFile, rename, rm } from "fs/promises";
import { parse, join } from "path";

export const catFile = (path) => {
  const readStream = fs.createReadStream(path);
  readStream.on("data", (data) => {
    process.stdout.write(data.toString());
  });
};

export const addFile = async (path) => {
  await writeFile(path, "");
};

export const renameFile = async (path, newName) => {
  await rename(path, newName);
};

export const copy = async (path, newPath) => {
  const parsingPath = parse(path);
  const fileName = `${parsingPath.name}${parsingPath.ext}`;
  const destinationPath = join(newPath, fileName);
  const readable = fs.createReadStream(path);
  const writable = fs.createWriteStream(destinationPath);
  readable.pipe(writable);
};

export const remove = async (path) => {
    await rm(path);
};

export const move = async (path, newPath) => {
  const parsingPath = parse(path);
  const fileName = `${parsingPath.name}${parsingPath.ext}`;
  const destinationPath = join(newPath, fileName);
  const readable = fs.createReadStream(path);
  const writable = fs.createWriteStream(destinationPath);
  readable.pipe(writable);
  await remove(path);
};
