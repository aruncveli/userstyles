import { $ } from "bun";

import version from "./calver.js";

process.argv.slice(2).forEach(async (arg) => {
  const versionLineBlame = await $`git blame -L4,4 ${arg}`.text();
  if (!versionLineBlame.includes(version)) {
    await $`sed --in-place '4s/.*/@version ${version}/' ${arg}`;
  }
});
