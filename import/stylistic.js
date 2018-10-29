module.exports = {
    extends: "./non-rules-config.js",
    rules: {
        "import/extensions": "error",
        "import/newline-after-import": "error",
        "import/no-named-as-default": "error",
        "import/no-amd": "error",
        "import/no-commonjs": "off",
        "import/no-named-default": "error",
        "import/no-namespace": "off",
        "import/no-nodejs-modules": "off",
        "import/unambiguous": "warn",
        "import/order": [
            "warn",
            {
                groups: [
                    "builtin",
                    ["external", "internal"],
                    "parent",
                    ["sibling", "index"]
                ]
            }
        ]
    }
};
