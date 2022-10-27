import { exec } from "child_process";
import { writeFileSync } from "fs";
// @ts-ignore
import { request } from "./request.ts";

const [_path1, _path2, functionName] = process.argv;

if (!functionName) throw Error("Must specify function name");

writeFileSync("local-invoke/request.json", request);

exec(`./local-invoke.sh ${functionName}`, (_err, _stdout, _stderr) => {
  console.log(`locally invoked function ${functionName}`);
  console.log(_stdout);
});
