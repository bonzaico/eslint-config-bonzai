module.exports = {
    "rules": {
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "brace-style": 2,
        "camelcase": 0,
        "comma-spacing": 2,
        "comma-style": [2, "last"],
        "consistent-this": 0,
        "eol-last": 2,
        "func-call-spacing": [2, "never"],
        "func-names": 0,
        "func-style": 0,
        "key-spacing": [
            2,
            {
                "beforeColon": false,
                "afterColon": true
            }
        ],
        "linebreak-style": 2,
        "max-nested-callbacks": [
            1,
            {
                "max": 5
            }
        ],
        "new-cap": [
            2,
            {
                "newIsCap": true,
                "capIsNew": false
            }
        ],
        "new-parens": 0,
        "no-array-constructor": 0,
        "no-inline-comments": 0,
        "no-lonely-if": 2,
        "no-mixed-spaces-and-tabs": 2,
        "no-multiple-empty-lines": 2,
        "no-nested-ternary": 0,
        "no-new-object": 0,
        "semi-spacing": 2,
        "no-spaced-func": 2,
        "no-ternary": 0,
        "no-trailing-spaces": 2,
        "no-underscore-dangle": 0,
        "no-extra-parens": [2, "functions"],
        "one-var": 0,
        "operator-assignment": 0,
        "padded-blocks": [2, "never"],
        "quotes": [2, "double"],
        "semi": 2,
        "sort-vars": 0,
        "space-before-function-paren": [
            2,
            {
                "named": "never",
                "anonymous": "always"
            }
        ],
        "keyword-spacing": 2,
        "space-before-blocks": 2,
        "object-curly-spacing": [2, "always"],
        "array-bracket-spacing": [2, "never"],
        "space-in-parens": [2, "never"],
        "space-infix-ops": 2,
        "space-return-throw-case": 0,
        "space-unary-ops": 0,
        "spaced-line-comment": 0,
        "wrap-regex": 0,

        // specify the maximum depth that blocks can be nested (off by default)
        "max-depth": [2, 4],

        // specify the maximum length of a line in your program (off by default)
        "max-len": [
            1,
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
        "max-params": [2, 7],

        // specify the maximum number of statement allowed in a function (off by default)
        "max-statements": [1, 40],

        // disallow use of bitwise operators (off by default)
        "no-bitwise": 2,

        // disallow use of unary operators ++ and -- (off by default)
        "no-plusplus": 0
    }
};
