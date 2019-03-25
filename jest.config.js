
module.exports = {
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    "moduleNameMapper": {
        "\\.(css)$": "<rootDir>/__mocks__/styleMock.js"
    },
    "roots": [
        "<rootDir>/src/tests"
    ],
    "setupTestFrameworkScriptFile": "<rootDir>/src/enzyme.config.ts",
    "testEnvironment": "node",
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
}