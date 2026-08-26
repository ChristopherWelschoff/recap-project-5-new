const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ["node_modules", "<rootDir>/"],
  moduleNameMapper: {
    "\\.svg$": "<rootDir>/__mocks__/svgMock.jsx",
  },
  testEnvironment: "jest-environment-jsdom",
};

// Put the SVG component mock before Next.js's default file mock.
module.exports = async (...args) => {
  const config = await createJestConfig(customJestConfig)(...args);
  config.moduleNameMapper = {
    "\\.svg$": "<rootDir>/__mocks__/svgMock.jsx",
    ...config.moduleNameMapper,
  };
  return config;
};
