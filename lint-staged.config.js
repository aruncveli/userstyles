export default {
  "*": "biome check --write --no-errors-on-unmatched",
  ".{ts,js}": "eslint --fix",
  "*.{yml,md}": "prettier --write --ignore-unknown",
};
