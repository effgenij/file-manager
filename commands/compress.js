import fs from "fs";
import zlib from "zlib";
import { parse, join } from "path";

export const zip = (path, newPath) => {
  //const parsingPath = parse(path);
  //const fileName = `${parsingPath.name}.br`;
  //const destinationPath = join(newPath, fileName);
  const readable = fs.createReadStream(path);
  const writable = fs.createWriteStream(newPath);
  const brotli = zlib.createBrotliCompress();

  readable.pipe(brotli).pipe(writable);
};

export const unZip = (path, newPath) => {
    //const parsingPath = parse(path);
    //const fileName = `${parsingPath.name}.br`;
    //const destinationPath = join(newPath, fileName);
    const readable = fs.createReadStream(path);
    const writable = fs.createWriteStream(newPath);
    const brotli = zlib.createBrotliDecompress();
  
    readable.pipe(brotli).pipe(writable);
  };
  
