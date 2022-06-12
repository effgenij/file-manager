import { createHash } from "crypto";
import { readFile } from "fs/promises";

export const calculateHash = async (path) => {
    const content = await readFile(path);
    const hex = createHash("sha256").update(content).digest("hex");
    process.stdout.write(hex);
};
