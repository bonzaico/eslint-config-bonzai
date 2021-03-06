module.exports = {
    "plugins": [
        "fp"
    ],

    "extends": [
        "plugin:fp/recommended"
    ],

    "rules": {
        "init-declarations": "error",

        "fp/no-arguments": "error",
        "fp/no-class": "error",
        "fp/no-delete": "error",
        "fp/no-events": "error",
        "fp/no-get-set": "error",
        "fp/no-let": "error",
        "fp/no-loops": "error",
        "fp/no-mutating-assign": "error",
        "fp/no-mutating-methods": "error",
        "fp/no-proxy": "error",
        "fp/no-rest-parameters": "error",
        "fp/no-this": "error",
        "fp/no-throw": "error",
        "fp/no-valueof-field": "error",

        "fp/no-mutation": [
            "error",
            {
                "commonjs": true,
                "exceptions": []
            }
        ],

        "fp/no-nil": "error",

        "fp/no-unused-expression": [
            "warn",
            {
                "allowUseStrict": true
            }
        ]
    }
};
