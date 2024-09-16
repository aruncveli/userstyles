export default {
  "*.{j|t}s": ["eslint --fix"],
  "*.*!.user.styl": ["prettier --write"],
  "*.user.styl": ["stylelint --fix", "stylelint"],
};
