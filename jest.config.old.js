module.export = {
  verbose: true,
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  coverageReporters: ["json", "lcov", "text", "clover"],
  moduleFileExtensions: ["js", "ts"],
  testEnironment: "node",
  coverageDirector: "./target/coverage",
};
