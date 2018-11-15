module.exports = {
    extends: "./non-rules-config.js",
    rules: {
        "import/first": "error",
        "import/no-anonymous-default-export": "warn",
        "import/no-absolute-path": "error",
        "import/no-deprecated": "warn",
        "import/no-duplicates": "error",
        "import/no-internal-modules": "off",
        "import/no-mutable-exports": "error",
        "import/no-restricted-paths": "off",
        "import/no-unassigned-import": "off", // Hope we can add this some day.
        "import/no-webpack-loader-syntax": "error",
        "import/no-relative-parent-imports": "warn"
    }
};
