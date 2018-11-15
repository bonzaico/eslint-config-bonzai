module.exports = {
    "plugins": [
        "fp"
    ],

    "extends": [
        "plugin:fp/recommended"
    ],

    "rules": {
        "fp/no-arguments": "off",
        "fp/no-class": "off",
        "fp/no-delete": "off",
        "fp/no-events": "off",
        "fp/no-get-set": "off",
        "fp/no-let": "off",
        "fp/no-loops": "warn",
        "fp/no-mutating-assign": "off",
        "fp/no-mutating-methods": "warn",
        "fp/no-proxy": "off",
        "fp/no-rest-parameters": "off",
        "fp/no-this": "off",
        "fp/no-throw": "off",
        "fp/no-valueof-field": "off",
        "fp/no-nil": "warn",
        "fp/no-unused-expression": "off",

        "fp/no-mutation": [
            "warn",
            {
                "commonjs": true,
                "exceptions": []
            }
        ]
    }
};
