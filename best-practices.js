module.exports = {
    "rules": {
        "block-scoped-var": "off",
        complexity: "off",
        "consistent-return": "off",
        curly: ["error", "multi-line"],
        "default-case": "error",
        "dot-notation": "warn",
        eqeqeq: [
            "error",
            "always",
            {
                null: "ignore"
            }
        ],
        "guard-for-in": "error",
        "no-alert": "warn",
        "no-caller": "error",
        "no-div-regex": "off",
        "no-else-return": "error",
        "no-eq-null": "off",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-fallthrough": "error",
        "no-floating-decimal": "error",
        "no-implied-eval": "error",
        "no-iterator": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-loop-func": "error",

        // TODO Conflicts with prettier, have to find a solution
        "no-mixed-operators": [
            "off",
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

        "no-multi-spaces": "error",
        "no-multi-str": "warn",
        "no-native-reassign": "warn",
        "no-new": "warn",
        "no-new-func": "warn",
        "no-new-wrappers": "error",
        "no-octal": "off",
        "no-octal-escape": "off",
        "no-param-reassign": "error",
        "no-process-env": "off",
        "no-proto": "error",
        "no-redeclare": "error",
        "no-return-assign": "error",
        "no-script-url": "off",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-unneeded-ternary": "error",
        "no-unused-expressions": [
            "error",
            {
                allowShortCircuit: true,
                allowTernary: true
            }
        ],
        "no-void": "error",
        "no-warning-comments": "off",
        "no-with": "error",
        radix: "off",
        "vars-on-top": "off",
        "wrap-iife": "off",
        yoda: "error",

        "global-strict": "off",
        "no-extra-strict": "off",
        "strict": "error",

        "no-catch-shadow": "off",
        "no-delete-var": "off",
        "no-label-var": "off",
        "no-shadow": "warn",
        "no-shadow-restricted-names": "off",
        "no-undef": "error",
        "no-undef-init": "off",
        "no-undefined": "off",
        "no-unused-vars": [
            "warn",
            {
                vars: "all",
                args: "none"
            }
        ],
        "no-use-before-define": [
            "warn",
            {
                functions: false,
                classes: true
            }
        ]
    }
};
