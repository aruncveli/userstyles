import { argv } from "node:process";
import { mkdirSync, writeFileSync } from "node:fs";
import { renderFile } from "ejs";

const name = argv[2];
if (!name) {
  throw new Error("Name is required");
}
mkdirSync(name);

renderFile("template.README.ejs", { name }, (err, str) => {
  if (err) throw err;
  console.log(`Writing README.md`);
  writeFileSync(`${name}/README.md`, str);
});

renderFile("template.user.styl.ejs", { name }, (err, str) => {
  if (err) throw err;
  console.log(`Writing ${name}.user.styl`);
  writeFileSync(`${name}/${name}.user.styl`, str);
});
