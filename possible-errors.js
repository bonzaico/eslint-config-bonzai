const ERR = "error";
const WARN = "warn";
const OFF = "off";

module.exports = {
    "rules": {
        // disallow trailing commas in object literals
        "comma-dangle": [ERR, "never"],

        // disallow assignment in conditional expressions
        "no-cond-assign": ERR,

        // disallow use of console (off by default in the node environment)
        "no-console": WARN,

        // disallow use of constant expressions in conditions
        "no-constant-condition": ERR,

        // disallow control characters in regular expressions
        "no-control-regex": OFF,

        // disallow use of debugger
        "no-debugger": ERR,

        // disallow duplicate keys when creating object literals
        "no-dupe-keys": ERR,

        // disallow empty statements
        "no-empty": ERR,

        // disallow the use of empty character classes in regular expressions
        "no-empty-class": OFF,

        // disallow assigning to the exception in a catch block
        "no-ex-assign": OFF,

        // disallow double-negation boolean casts in a boolean context
        "no-extra-boolean-cast": ERR,

        // disallow unnecessary semicolons
        "no-extra-semi": ERR,

        // disallow overwriting functions written as function declarations
        "no-func-assign": ERR,

        // disallow function or variable declarations in nested blocks
        "no-inner-declarations": [ERR, "functions"],

        // disallow invalid regular expression strings in the RegExp constructor
        "no-invalid-regexp": ERR,

        // disallow irregular whitespace outside of strings and comments
        "no-irregular-whitespace": ERR,

        // disallow negation of the left operand of an in expression
        "no-negated-in-lhs": WARN,

        // disallow the use of object properties of the global object (Math and JSON) as functions
        "no-obj-calls": ERR,

        // disallow multiple spaces in a regular expression literal
        "no-regex-spaces": WARN,

        // disallow reserved words being used as object literal keys (off by default)
        "quote-props": OFF,

        // disallow sparse arrays
        "no-sparse-arrays": ERR,
        // disallow unreachable statements after a return throw continue or break statement
        "no-unreachable": ERR,

        // disallow comparisons with the value NaN
        "use-isnan": ERR,

        // Ensure JSDoc comments are valid (off by default)
        "valid-jsdoc": OFF,

        // Ensure that the results of typeof are compared against a valid string
        "valid-typeof": ERR
    }
};
