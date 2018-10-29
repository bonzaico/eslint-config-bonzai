module.exports = {
    "rules": {
        "block-scoped-var": 0,
        complexity: 0,
        "consistent-return": 0,
        curly: [2, "multi-line"],
        "default-case": 2,
        "dot-notation": 1,
        eqeqeq: [
            2,
            "always",
            {
                null: "ignore"
            }
        ],
        "guard-for-in": 2,
        "no-alert": 1,
        "no-caller": 2,
        "no-div-regex": 0,
        "no-else-return": 2,
        "no-eq-null": 0,
        "no-eval": 2,
        "no-extend-native": 0,
        "no-extra-bind": 2,
        "no-fallthrough": 2,
        "no-floating-decimal": 2,
        "no-implied-eval": 2,
        "no-iterator": 2,
        "no-labels": 2,
        "no-lone-blocks": 2,
        "no-loop-func": 2,

        // TODO Conflicts with prettier, have to find a solution
        "no-mixed-operators": [
            0,
            {
                allowSamePrecedence: true,
                groups: [
                    ["+", "-", "*", "/", "%", "**"],
                    ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
                    ["&&", "||"],
                    ["in", "instanceof"]
                ]
            }
        ],

        "no-multi-spaces": 2,
        "no-multi-str": 1,
        "no-native-reassign": 1,
        "no-new": 1,
        "no-new-func": 1,
        "no-new-wrappers": 2,
        "no-octal": 0,
        "no-octal-escape": 0,
        "no-param-reassign": 2,
        "no-process-env": 0,
        "no-proto": 2,
        "no-redeclare": 2,
        "no-return-assign": 2,
        "no-script-url": 0,
        "no-self-compare": 2,
        "no-sequences": 0,
        "no-unneeded-ternary": "error",
        "no-unused-expressions": [
            2,
            {
                allowShortCircuit: true,
                allowTernary: true
            }
        ],
        "no-void": 2,
        "no-warning-comments": 0,
        "no-with": 2,
        radix: 0,
        "vars-on-top": 0,
        "wrap-iife": 0,
        yoda: 2,

        "global-strict": 0,
        "no-extra-strict": 0,
        "strict": 2,

        "no-catch-shadow": 0,
        "no-delete-var": 0,
        "no-label-var": 0,
        "no-shadow": 1,
        "no-shadow-restricted-names": 0,
        "no-undef": 2,
        "no-undef-init": 0,
        "no-undefined": 0,
        "no-unused-vars": [
            1,
            {
                vars: "all",
                args: "none"
            }
        ],
        "no-use-before-define": [
            1,
            {
                functions: false,
                classes: true
            }
        ]
    }
};
