// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // automock: false,
  // bail: 0,
  // browser: false,
  // cacheDirectory: ./tmp/jest_rs.,
  clearMocks: true,
  // collectCoverage: false,
  // collectCoverageFrom: null,
  coverageDirectory: 'coverage',
  // coveragePathIgnorePatterns: [
  //   ./node_modules/.
  // ],
  // coverageReporters: [
  //   .json.,
  //   .text.,
  //   .lcov.,
  //   .clover.
  // ],
  // coverageThreshold: null,
  // dependencyExtractor: null,
  // errorOnDeprecated: false,
  // forceCoverageMatch: [],
  // globalSetup: null,
  // globalTeardown: null,
  // globals: {},
  moduleDirectories: [
    'node_modules',
    '<rootDir>/resources/react',
  ],
  modulePaths: [
    '<rootDir>/resources/react',
    'node_modules',
  ],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/file.ignore.mock.js',
    '\\.(css|less)$': '<rootDir>/styling.ignore.mock.js',
  },
  // modulePathIgnorePatterns: [],
  // notify: false,
  // notifyMode: .failure-change.,
  preset: 'ts-jest',
  // projects: null,
  // reporters: undefined,
  // resetMocks: false,
  // resetModules: false,
  // resolver: null,
  // restoreMocks: false,
  // rootDir: null,
  roots: [
    '<rootDir>/resources/',
  ],
  // runner: .jest-runner.,
  // testing environment before each test
  setupFiles: ['./enzyme.config.js'],
  setupFilesAfterEnv: [
  ],
  snapshotSerializers: [],
  testEnvironment: 'jsdom',
  // testEnvironmentOptions: {},
  // testLocationInResults: false,
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)',
    '/__tests__/.*\\.test.(ts|tsx)$',
  ],
  // testPathIgnorePatterns: [
  //   ./node_modules/.
  // ],
  // testRegex: '/__tests__/.*\\.test.(ts|tsx)$',
  // testResultsProcessor: null,
  // testRunner: .jasmine2.,
  // testURL: .http://localhost.,
  // timers: .real.,
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  // transformIgnorePatterns: [
  //   ./node_modules/.
  // ],
  // unmockedModulePathPatterns: undefined,
  verbose: true,
  // watchPathIgnorePatterns: [],
  // watchman: true,
};
