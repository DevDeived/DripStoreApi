    export default {
    testEnvironment: "node",
    transform: {
        "^.+\\.[tj]s$": ["babel-jest", { presets: ["@babel/preset-env"] }]
    },
    moduleFileExtensions: ["js", "json"],
    };
