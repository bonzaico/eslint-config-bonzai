module.exports = {
    env: {
        browser: true,
        node: false,
        jest: false
    },
    extends: [
        "eslint:recommended",
        "./stylistic.js",
        "./best-practices.js",
        "./possible-errors.js",
        "./node.js",
        "./weak-fp.js",
        "./import/index.js",
        "./es6/index.js"
    ],
    rules: {}
};
