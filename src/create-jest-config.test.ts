import createJestConfig from './create-jest-config'

test('creates default jest config', () => {
  expect(createJestConfig('./rootDir', './pkgDir')).toMatchInlineSnapshot(`
    Object {
      "colors": true,
      "globals": "{\\"ts-jest\\":{\\"tsConfig\\":\\"/Users/brent/dev/jest-runner-vscode/rootDir/tsconfig.json\\"}}",
      "rootDir": "./rootDir",
      "roots": Array [
        "<rootDir>/src",
      ],
      "runInBand": true,
      "setupFilesAfterEnv": Array [
        "/Users/brent/dev/jest-runner-vscode/pkgDir/dist-src/jest-runner-vscode-setup.js",
      ],
      "testEnvironment": "vscode",
      "testRegex": "\\\\.(test|spec)\\\\.ts$",
      "transform": "{\\"^.+\\\\\\\\.ts$\\":\\"ts-jest\\"}",
      "verbose": true,
    }
  `)
})

test('creates jest config with custom setup file', () => {
  process.env.JEST_RUNNER_VSCODE_SETUP =
    '/path/to/custom/setup/jest-runner-vscode-setup.js'

  expect(createJestConfig('./rootDir', './pkgDir')).toMatchInlineSnapshot(`
    Object {
      "colors": true,
      "globals": "{\\"ts-jest\\":{\\"tsConfig\\":\\"/Users/brent/dev/jest-runner-vscode/rootDir/tsconfig.json\\"}}",
      "rootDir": "./rootDir",
      "roots": Array [
        "<rootDir>/src",
      ],
      "runInBand": true,
      "setupFilesAfterEnv": Array [
        "/path/to/custom/setup/jest-runner-vscode-setup.js",
      ],
      "testEnvironment": "vscode",
      "testRegex": "\\\\.(test|spec)\\\\.ts$",
      "transform": "{\\"^.+\\\\\\\\.ts$\\":\\"ts-jest\\"}",
      "verbose": true,
    }
  `)

  delete process.env.JEST_RUNNER_VSCODE_SETUP
})

test('creates jest config with custom test regex', () => {
  process.env.JEST_RUNNER_VSCODE_TEST_REGEX = '/path/to/single/test/file.ts'

  expect(createJestConfig('./rootDir', './pkgDir')).toMatchInlineSnapshot(`
    Object {
      "colors": true,
      "globals": "{\\"ts-jest\\":{\\"tsConfig\\":\\"/Users/brent/dev/jest-runner-vscode/rootDir/tsconfig.json\\"}}",
      "rootDir": "./rootDir",
      "roots": Array [
        "<rootDir>/src",
      ],
      "runInBand": true,
      "setupFilesAfterEnv": Array [
        "/Users/brent/dev/jest-runner-vscode/pkgDir/dist-src/jest-runner-vscode-setup.js",
      ],
      "testEnvironment": "vscode",
      "testRegex": "/path/to/single/test/file.ts",
      "transform": "{\\"^.+\\\\\\\\.ts$\\":\\"ts-jest\\"}",
      "verbose": true,
    }
  `)

  delete process.env.JEST_RUNNER_VSCODE_TEST_REGEX
})
