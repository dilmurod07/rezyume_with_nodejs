import fs from "fs";
import { join } from "path";

export const ReadFileCustom = (filename) => {
  return JSON.parse(
    fs.readFileSync(join(process.cwd(), "src", "model", filename), "utf-8")
  );
};
export const writeFileCustom = (path, data) => {
  fs.writeFileSync(
    join(process.cwd(), "src", "model", path),
    JSON.stringify(data, null, 4)
  );
  return;
};
