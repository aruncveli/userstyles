import {
  appendFileSync,
  mkdirSync,
} from "node:fs";
import { argv } from "node:process";

import { compile } from "handlebars";

import version from "./calver.js";

/**
 * Usage: bun generate Style Name
 */

const args = argv.slice(2);
if (!args.length) {
  throw new Error("Name is required");
}

const name = args.join(" ");
const smallName = args.join("-").toLocaleLowerCase();
console.log(`Creating directory sites/${smallName}`);
mkdirSync(`sites/${smallName}`);

const read = (name: string) =>
  Bun.file(`${import.meta.dir}/${name}`).text();

const [readme, userCss, rootEntry] = await Promise.all([
  read("readme.hbs"),
  read("user.css.hbs"),
  read("root-readme-entry.hbs"),
]).then(files => files.map(file => compile(file)));

console.log(`Writing sites/${smallName}/README.md`);
await Bun.write(`sites/${smallName}/README.md`, readme!({ name, smallName }));

console.log(`Writing sites/${smallName}/${smallName}.user.css`);
await Bun.write(
  `sites/${smallName}/${smallName}.user.css`,
  userCss!({ name, smallName, version }),
);

console.log("Adding entry to root README.md table");
appendFileSync("README.md", rootEntry!({ name, smallName }));
