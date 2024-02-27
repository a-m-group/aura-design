module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    env: {
        node: true,
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        extraFileExtensions: ['.astro'],
    },
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
        // 自定义规则
    },
    ignorePatterns: ['**/node_modules', '**/dist', '**/bundle', '**.astro'],
};
