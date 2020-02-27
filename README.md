# Google Toolbox WebExtension
180+ Google products readily available at your fingertips!

| Category      | Measurement                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Pipeline      | [![CircleCI](https://img.shields.io/circleci/project/github/ayltai/google-toolbox-webextension/master.svg?style=flat)](https://circleci.com/gh/ayltai/google-toolbox-webextension)                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Quality       | [![Code Quality](https://img.shields.io/codacy/grade/a1cbda9c677e45adae4c3ff829cb20ce.svg?style=flat)](https://app.codacy.com/app/AlanTai/google-toolbox-webextension/dashboard) [![Sonar Quality Gate](https://img.shields.io/sonar/quality_gate/ayltai_google-toolbox-webextension?server=https%3A%2F%2Fsonarcloud.io)](https://sonarcloud.io/dashboard?id=ayltai_google-toolbox-webextension) [![Sonar Violations (short format)](https://img.shields.io/sonar/violations/ayltai_google-toolbox-webextension?format=short&server=https%3A%2F%2Fsonarcloud.io)](https://sonarcloud.io/dashboard?id=ayltai_google-toolbox-webextension)            |
| Coverage      | [![Code Coverage](https://img.shields.io/codecov/c/github/ayltai/google-toolbox-webextension.svg?style=flat)](https://codecov.io/gh/ayltai/google-toolbox-webextension) [![Sonar Coverage](https://img.shields.io/sonar/coverage/ayltai_google-toolbox-webextension?server=https%3A%2F%2Fsonarcloud.io)](https://sonarcloud.io/dashboard?id=ayltai_google-toolbox-webextension)                                                                                                                                                                                                                                                                     |
| Rating        | [![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=ayltai_google-toolbox-webextension&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=ayltai_google-toolbox-webextension) [![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=ayltai_google-toolbox-webextension&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=ayltai_google-toolbox-webextension) [![Sonar Tech Debt](https://img.shields.io/sonar/tech_debt/ayltai_google-toolbox-webextension?server=https%3A%2F%2Fsonarcloud.io)](https://sonarcloud.io/dashboard?id=ayltai_google-toolbox-webextension) |
| Security      | [![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=ayltai_google-toolbox-webextension&metric=security_rating)](https://sonarcloud.io/dashboard?id=ayltai_google-toolbox-webextension) [![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=ayltai_google-toolbox-webextension&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=ayltai_google-toolbox-webextension)                                                                                                                                                                                                                     |
| Miscellaneous | ![Maintenance](https://img.shields.io/maintenance/yes/2020) [![Release](https://img.shields.io/github/release/ayltai/google-toolbox-webextension.svg?style=flat)](https://github.com/ayltai/google-toolbox-webextension/releases) [![License](https://img.shields.io/github/license/ayltai/google-toolbox-webextension.svg?style=flat)](https://github.com/ayltai/google-toolbox-webextension/blob/master/LICENSE)                                                                                                                                                                                                                                  |

A Firefox/Chrome/Edge extension that provides a customizable list of shortcuts to 186 Google services.

Available at: https://addons.mozilla.org/addon/google-toolbox/

[![Buy me a coffee](https://img.shields.io/static/v1?label=Buy%20me%20a&message=coffee&color=important&style=for-the-badge&logo=buy-me-a-coffee&logoColor=white)](https://buymeacoff.ee/ayltai)

![Screenshot 1](design/screenshot-1.png)

![Screenshot 2](design/screenshot-2.png)

![Screenshot 3](design/screenshot-3.png)

## Features
* Shows a list of shortcuts to 186 Google services
* Fully customizable drag-and-drop shortcut ordering
* Support two styles: compact and cozy

## Getting started
You can build this project using macOS or Linux.

### Install
1. Install [NodeJS](https://nodejs.org)
2. Install dependencies
   ```sh
   npm i -D
   ```

### Build
```sh
npm run build
```

### Run
```sh
npm start
```

## Acknowledgements
This software is made with the support of open source projects:
* [NodeJS](https://nodejs.org)
* [React](https://github.com/facebook/react)
* [Create React App](https://github.com/facebook/create-react-app)
* [Material UI](https://material-ui.com)
* [React Sortable HOC](https://github.com/clauderic/react-sortable-hoc)
* [ESLint](https://eslint.org)
* [Stylelint](https://stylelint.io)
* [Enzyme](https://airbnb.io/enzyme)
* [web-ext](https://github.com/mozilla/web-ext)

... and closed source services:
* [CircleCI](https://circleci.com)
* [SonarCloud](https://sonarcloud.io)
