module.exports = {
    env: {
        commonjs: true,
        es2021: true,
        node: true,
    },
    extends: "standard-with-typescript",
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
    },
    rules: {
        indent: [4, "tab"],
        "no-tabs": 0,
    },
};
