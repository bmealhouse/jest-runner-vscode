# `jest-runner-vscode`

[![npm version](https://img.shields.io/npm/v/jest-runner-vscode.svg)](https://npmjs.org/package/jest-runner-vscode)
[![npm downloads](https://img.shields.io/npm/dm/jest-runner-vscode.svg)](https://npmjs.org/package/jest-runner-vscode)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![build status](https://travis-ci.com/bmealhouse/jest-runner-vscode.svg?branch=master)](https://travis-ci.com/bmealhouse/jest-runner-vscode)

> Run VS Code tests using Jest test framework

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
      "name": "Extension Tests",
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
        "JEST_RUNNER_VSCODE_TEST_REGEX": ""
      }
    },
    {
      "name": "Extension Tests (Current File)",
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
        "JEST_RUNNER_VSCODE_TEST_REGEX": "${file}"
      }
    }
  ]
}
```

## Environment variables

**`JEST_RUNNER_VSCODE_TEST_REGEX`**<br/>
The pattern Jest uses to detect test files.

**`JEST_RUNNER_VSCODE_SETUP`**<br/>
The path to a module that runs some code to configure or set up the testing framework before each test. You can use this to mock VS Code APIs, such as forcing the `getConfiguration` API to use an in-memory cache vs. interacting the file system.

> **Example `launch.json`:**
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
