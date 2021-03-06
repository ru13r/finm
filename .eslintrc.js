module.exports = {
	root: true,
	env: {
		node: true,
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
	rules: {
		'no-console': 'off',
		'no-debugger': 'off',
		'no-unused-vars': 'warn',
		semi: 'error',
	},
	extends: ['plugin:vue/recommended', 'eslint:recommended', 'prettier'],
};
