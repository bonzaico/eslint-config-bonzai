module.exports = {
    "rules": {
        "indent": [
            "error",
            4,
            {
                "SwitchCase": "warn"
            }
        ],
        "block-spacing": ["error", "always"],
        "brace-style": "error",
        "camelcase": "error",
        "comma-spacing": "error",
        "comma-style": ["error", "last"],
        "consistent-this": "off",
        "eol-last": "error",
        "func-call-spacing": ["error", "never"],
        "func-names": "off",
        "func-style": "off",
        "key-spacing": [
            "error",
            {
                "beforeColon": false,
                "afterColon": true
            }
        ],
        "linebreak-style": "error",
        "max-nested-callbacks": [
            "warn",
            {
                "max": 5
            }
        ],
        "new-cap": [
            "error",
            {
                "newIsCap": true,
                "capIsNew": false
            }
        ],
        "new-parens": "error",
        "no-array-constructor": "off",
        "no-inline-comments": "off",
        "no-lonely-if": "error",
        "no-mixed-spaces-and-tabs": "error",
        "no-multiple-empty-lines": "error",
        "no-nested-ternary": "off",
        "no-new-object": "off",
        "semi-spacing": "error",
        "no-spaced-func": "error",
        "no-ternary": "off",
        "no-trailing-spaces": "error",
        "no-underscore-dangle": "off",
        "no-extra-parens": ["error", "functions"],
        "one-var": "off",
        "operator-assignment": "off",
        "padded-blocks": ["error", "never"],
        "quotes": ["error", "double"],
        "semi": "error",
        "sort-vars": "off",
        "space-before-function-paren": [
            "error",
            {
                "named": "never",
                "anonymous": "always"
            }
        ],
        "keyword-spacing": "error",
        "space-before-blocks": "error",
        "object-curly-spacing": ["error", "always"],
        "array-bracket-spacing": ["error", "never"],
        "space-in-parens": ["error", "never"],
        "space-infix-ops": "error",
        "space-return-throw-case": "off",
        "space-unary-ops": "off",
        "spaced-line-comment": "off",
        "wrap-regex": "off",

        // specify the maximum depth that blocks can be nested (off by default)
        "max-depth": ["error", 4],

        // specify the maximum length of a line in your program (off by default)
        "max-len": [
            "warn",
            90,
            4,
            {
                ignoreComments: true,
                ignoreTrailingComments: true,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true
            }
        ],

        // limits the number of parameters that can be used in the function declaration. (off by default)
        "max-params": ["error", 7],

        // specify the maximum number of statement allowed in a function (off by default)
        "max-statements": ["warn", 40],

        // disallow use of bitwise operators (off by default)
        "no-bitwise": "error",

        // disallow use of unary operators ++ and -- (off by default)
        "no-plusplus": "off"
    }
};
