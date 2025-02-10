export default {
	"*": [
		"biome check --write --no-errors-on-unmatched",
		"eslint --fix",
		"prettier --write --ignore-unknown",
	],
};
