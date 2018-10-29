module.exports = {
    parser: "babel-eslint",
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
            arrowFunctions: true,
            blockBindings: true,
            classes: true,
            defaultParams: true,
            destructuring: true,
            forOf: true,
            generators: false,
            modules: true,
            objectLiteralComputedProperties: true,
            objectLiteralDuplicateProperties: false,
            objectLiteralShorthandProperties: true,
            objectLiteralShorthandMethods: true,
            spread: true,
            superInFunctions: true,
            templateStrings: true,
            jsx: true
        }
    }
};
