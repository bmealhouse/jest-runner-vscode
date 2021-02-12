# `jest-runner-vscode`

[![npm version](https://img.shields.io/npm/v/jest-runner-vscode.svg)](https://npmjs.org/package/jest-runner-vscode)
[![npm downloads](https://img.shields.io/npm/dm/jest-runner-vscode.svg)](https://npmjs.org/package/jest-runner-vscode)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> Run VS Code tests using Jest Testing Framework

## This project has moved

`jest-runner-vscode` has moved to [vscode-jest-test-runner](https://github.com/bmealhouse/vscode-jest-test-runner).

## Table of contents

- [Installation](#installation)
- [Setup](#setup)
- [Environment variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Installation

### yarn

```sh
yarn add jest jest-runner-vscode --dev
```

### npm

```sh
npm i jest jest-runner-vscode --save-dev
```

## Setup

### Example `launch.json`

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Jest: All tests",
      "type": "extensionHost",
      "request": "launch",
      "runtimeExecutable": "${execPath}",
      "stopOnEntry": false,
      "sourceMaps": true,
      "smartStep": true,
      "args": [
        "--disable-extensions",
        "--extensionDevelopmentPath=${workspaceFolder}",
        "--extensionTestsPath=${workspaceFolder}/node_modules/jest-runner-vscode"
      ],
      "skipFiles": ["<node_internals>/**/*.js"],
      "outFiles": ["${workspaceFolder}/dist/**/*.js"],
      "preLaunchTask": "npm: compile",
      "internalConsoleOptions": "openOnSessionStart",
      "env": {
        "JEST_RUNNER_VSCODE_TEST_REGEX": "",
        "JEST_RUNNER_VSCODE_UPDATE_SNAPSHOTS": "false"
      }
    },
    {
      "name": "Jest: Current file",
      "type": "extensionHost",
      "request": "launch",
      "runtimeExecutable": "${execPath}",
      "stopOnEntry": false,
      "sourceMaps": true,
      "smartStep": true,
      "args": [
        "--disable-extensions",
        "--extensionDevelopmentPath=${workspaceFolder}",
        "--extensionTestsPath=${workspaceFolder}/node_modules/jest-runner-vscode"
      ],
      "skipFiles": ["<node_internals>/**/*.js"],
      "outFiles": ["${workspaceFolder}/dist/**/*.js"],
      "preLaunchTask": "npm: compile",
      "internalConsoleOptions": "openOnSessionStart",
      "env": {
        "JEST_RUNNER_VSCODE_TEST_REGEX": "${file}",
        "JEST_RUNNER_VSCODE_UPDATE_SNAPSHOTS": "false"
      }
    },
      {
      "name": "Jest: Update all snapshots",
      "type": "extensionHost",
      "request": "launch",
      "runtimeExecutable": "${execPath}",
      "stopOnEntry": false,
      "sourceMaps": true,
      "smartStep": true,
      "args": [
        "--disable-extensions",
        "--extensionDevelopmentPath=${workspaceFolder}",
        "--extensionTestsPath=${workspaceFolder}/node_modules/jest-runner-vscode"
      ],
      "skipFiles": ["<node_internals>/**/*.js"],
      "outFiles": ["${workspaceFolder}/dist/**/*.js"],
      "preLaunchTask": "npm: compile",
      "internalConsoleOptions": "openOnSessionStart",
      "env": {
        "JEST_RUNNER_VSCODE_TEST_REGEX": "",
        "JEST_RUNNER_VSCODE_UPDATE_SNAPSHOTS": "true"
      }
    },
    {
      "name": "Jest: Update snapshots in current file",
      "type": "extensionHost",
      "request": "launch",
      "runtimeExecutable": "${execPath}",
      "stopOnEntry": false,
      "sourceMaps": true,
      "smartStep": true,
      "args": [
        "--disable-extensions",
        "--extensionDevelopmentPath=${workspaceFolder}",
        "--extensionTestsPath=${workspaceFolder}/node_modules/jest-runner-vscode"
      ],
      "skipFiles": ["<node_internals>/**/*.js"],
      "outFiles": ["${workspaceFolder}/dist/**/*.js"],
      "preLaunchTask": "npm: compile",
      "internalConsoleOptions": "openOnSessionStart",
      "env": {
        "JEST_RUNNER_VSCODE_TEST_REGEX": "${file}",
        "JEST_RUNNER_VSCODE_UPDATE_SNAPSHOTS": "true"
      }
    }
  ]
}
```

## Environment variables

### `JEST_RUNNER_VSCODE_TEST_REGEX`

The pattern Jest uses to detect test files.

> **Example `env` settings:**
>
> ```json
> "env": {
>   "JEST_RUNNER_VSCODE_TEST_REGEX": "${file}",
> }
> ```

### `JEST_RUNNER_VSCODE_UPDATE_SNAPSHOTS`

Use this to re-record every snapshot that fails during this test run. Can be used together with `JEST_RUNNER_VSCODE_TEST_REGEX` to re-record snapshots.

> **Example `env` settings:**
>
> ```json
> "env": {
>   "JEST_RUNNER_VSCODE_UPDATE_SNAPSHOTS": "true",
> }
> ```

### `JEST_RUNNER_VSCODE_SETUP`

The path to a module that runs some code to configure or set up the testing framework before each test. You can use this to mock VS Code APIs, such as forcing the `getConfiguration` API to use an in-memory cache vs. interacting with the file system ([see shifty example](https://github.com/bmealhouse/vscode-shifty/blob/master/src/test-utils/jest-runner-vscode-setup.ts)).

> **Example `env` settings:**
>
> ```json
> "env": {
>   "JEST_RUNNER_VSCODE_SETUP": "${workspaceFolder}/dist/test-utils/jest-runner-vscode-setup.js",
> }
> ```

## Contributing

1. [Fork](https://help.github.com/en/articles/fork-a-repo) this repository to your own GitHub account and then [clone](https://help.github.com/en/articles/cloning-a-repository) it to your local device
1. Install the dependecies using `yarn`
1. Link the package to the global module directory: `yarn link`
1. Run `yarn test --watch` and start making your changes
1. You can use `yarn link jest-runner-vscode` to test your changes in a local project
1. Ensure any changes are documented in `CHANGELOG.md`

## License

MIT © Brent Mealhouse
