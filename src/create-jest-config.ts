import * as path from 'path'

export default (rootDir: string, pkgDir: string): object => ({
  rootDir,
  roots: ['<rootDir>/src'],
  verbose: true,
  colors: true,
  transform: JSON.stringify({'^.+\\.ts$': 'ts-jest'}),
  runInBand: true, // required due to the way the "vscode" module is injected
  testRegex:
    process.env.JEST_RUNNER_VSCODE_TEST_REGEX || '\\.(test|spec)\\.ts$', // eslint-disable-line @typescript-eslint/prefer-nullish-coalescing
  testEnvironment: 'vscode',
  setupFilesAfterEnv: [
    process.env.JEST_RUNNER_VSCODE_SETUP || // eslint-disable-line @typescript-eslint/prefer-nullish-coalescing
      path.resolve(pkgDir, './dist-src/jest-runner-vscode-setup.js'),
  ],
  moduleFileExtensions: ['ts', 'tsx'],
  globals: JSON.stringify({
    'ts-jest': {
      tsConfig: path.resolve(rootDir, './tsconfig.json'),
    },
  }),
})