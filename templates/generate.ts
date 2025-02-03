import { appendFileSync, mkdirSync, writeFileSync } from "node:fs";
import { argv } from "node:process";

import { renderFile } from "ejs";

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

renderFile("templates/readme.ejs", { name, smallName }, (err, str) => {
	if (err) throw err;
	console.log(`Writing sites/${smallName}/README.md`);
	writeFileSync(`sites/${smallName}/README.md`, str);
});

const date = new Date();
const year = date.getFullYear().toString().substring(2);
const month = date.getMonth() + 1;
const day = date.getDate();
const version = `${year}.${month}.${day}`;

renderFile(
	"templates/user.css.ejs",
	{ name, smallName, version },
	(err, str) => {
		if (err) throw err;
		console.log(`Writing sites/${smallName}/${smallName}.user.css`);
		writeFileSync(`sites/${smallName}/${smallName}.user.css`, str);
	},
);

renderFile(
	"templates/root-readme-entry.ejs",
	{ name, smallName },
	(err, str) => {
		if (err) throw err;
		console.log("Adding entry to root README.md table");
		appendFileSync("README.md", str);
	},
);
