module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
      '^.+\\.ts?$': 'ts-jest',
    },
    testRegex: '(/__tests__/.test|spec).ts?$',
    moduleFileExtensions: ['ts', 'js'],
    setupFilesAfterEnv: [ '<rootDir>/tests/unit/setup.js' ],
    coverageDirectory: '<rootDir>/reports/unit',
    modulePathIgnorePatterns: [
      'src/index.ts',
      'src/api/controllers/index.ts',
      'src/api/middlewares/index.ts',
      'src/ioc/inversify.config.ts',
      'src/ioc/types.ts',
      'src/api/retrievers/index.ts',
    ],
    coverageReporters: ['text', 'html'],
    testEnvironment: 'node',
    coverageThreshold: {
      global: {
        branches: 60,
        functions: 60,
        lines: 60,
        statements: 60
      }
    },
    collectCoverageFrom: ['src/**/*.ts'],
    reporters: [
      "default",
      [
        "jest-junit",
        {
          "suiteName": "jest tests",
          "outputDirectory": "<rootDir>/reports/unit",
          "outputName": "junit.xml",
          "uniqueOutputName": "false",
          "classNameTemplate": "{classname}-{title}",
          "titleTemplate": "{classname}-{title}",
          "ancestorSeparator": " › ",
          "suiteNameTemplate": "{filename}"
        }
      ]
    ]
  
  };
  