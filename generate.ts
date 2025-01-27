import { appendFileSync, mkdirSync, writeFileSync } from "node:fs";
import { argv } from "node:process";

import { renderFile } from "ejs";

/**
 * Usage: pnpm run generate Style Name
 */

const args = argv.slice(2);
if (!args.length) {
	throw new Error("Name is required");
}

const name = args.join(" ");
const smallName = args.join("-").toLocaleLowerCase();
console.log(`Creating directory ${smallName}`);
mkdirSync(smallName);

renderFile("readme.ejs", { name, smallName }, (err, str) => {
	if (err) throw err;
	console.log("Writing README.md");
	writeFileSync(`${smallName}/README.md`, str);
});

const getPaddedString = (value: number) => value.toString().padStart(2, "0");

const date = new Date();
const year = date.getFullYear().toString().substring(2);
const month = getPaddedString(date.getMonth() + 1);
const day = getPaddedString(date.getDate());
const version = `${year}.${month}.${day}`;

renderFile("user.styl.ejs", { name, smallName, version }, (err, str) => {
	if (err) throw err;
	console.log(`Writing ${smallName}.user.styl`);
	writeFileSync(`${smallName}/${smallName}.user.styl`, str);
});

renderFile("root-readme-entry.ejs", { name, smallName }, (err, str) => {
	if (err) throw err;
	console.log("Writing to README.md");
	appendFileSync("README.md", str);
});
