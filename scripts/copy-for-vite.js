import { cpSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = join(root, "public");

if (!existsSync(publicDir)) {
  mkdirSync(publicDir, { recursive: true });
}

cpSync(join(root, "problems.json"), join(publicDir, "problems.json"));
cpSync(join(root, "problems"), join(publicDir, "problems"), { recursive: true });

console.log("Copied problems.json and problems/ to public/");
