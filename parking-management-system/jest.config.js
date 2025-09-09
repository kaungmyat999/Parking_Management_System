module.exports = {
  testEnvironment: "node",
  collectCoverage: true,
  // setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  coverageDirectory: "<rootDir>/coverage",
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$",
  moduleFileExtensions: ["js", "jsx", "json", "node"]
};