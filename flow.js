module.exports = {
    rules: {
        "flowtype/boolean-style": ["error", "boolean"],
        "flowtype/define-flow-type": "warn",
        "flowtype/delimiter-dangle": ["error", "never"],
        "flowtype/generic-spacing": ["error", "never"],
        "flowtype/no-primitive-constructor-types": "warn",
        "flowtype/no-types-missing-file-annotation": "warn",
        "flowtype/no-weak-types": "warn",
        "flowtype/object-type-delimiter": ["error", "comma"],
        "flowtype/require-parameter-type": "off",
        "flowtype/require-return-type": [
            "off",
            "always",
            {
                annotateUndefined: "never"
            }
        ],
        "flowtype/require-valid-file-annotation": "error",
        "flowtype/semi": ["error", "always"],
        "flowtype/space-after-type-colon": ["error", "always"],
        "flowtype/space-before-generic-bracket": ["error", "never"],
        "flowtype/space-before-type-colon": ["error", "never"],
        "flowtype/type-id-match": ["warn", "^[A-za-z0-9]+Type$"],
        "flowtype/union-intersection-spacing": ["error", "always"],
        "flowtype/use-flow-type": "warn",
        "flowtype/valid-syntax": "warn"
    }
};
