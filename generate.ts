import { argv } from "node:process";
import { mkdirSync, writeFileSync, appendFileSync } from "node:fs";
import { renderFile } from "ejs";

const name = argv[2];
if (!name) {
  throw new Error("Name is required");
}

const smallName = name.toLocaleLowerCase().replaceAll(" ", "-");
console.log(`Creating directory ${smallName}`);
mkdirSync(smallName);

renderFile("readme.ejs", { name, smallName }, (err, str) => {
  if (err) throw err;
  console.log(`Writing README.md`);
  writeFileSync(`${smallName}/README.md`, str);
});

const date = new Date();
const year = date.getFullYear().toString().substring(2);
const month = date.getMonth().toString().padStart(2, "0");
const day = date.getDate().toString().padStart(2, "0");
const version = `${year}.${month}.${day}`;

renderFile("user.styl.ejs", { name, smallName, version }, (err, str) => {
  if (err) throw err;
  console.log(`Writing ${smallName}.user.styl`);
  writeFileSync(`${smallName}/${smallName}.user.styl`, str);
});

renderFile("root-readme-entry.ejs", { name, smallName }, (err, str) => {
  if (err) throw err;
  console.log(`Writing to README.md`);
  appendFileSync(`README.md`, str);
});
