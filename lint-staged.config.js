export default {
  "*.{js,ts,json,css}": "biome check --write --no-errors-on-unmatched",
  "*.{yml,md}": "prettier --write --ignore-unknown",
  "*.css": "bun scripts/bumpVersion.ts",
};
