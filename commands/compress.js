import fs from "fs";

export const zip = (path, newPath) => {

  const readable = fs.createReadStream(path);
  const writable = fs.createWriteStream(destinationPath);
  const brotli = zlib.createBrotliCompress();

  readable.pipe(brotli).pipe(writable);
};
