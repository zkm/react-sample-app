# React Sample App

[![CI](https://github.com/zkm/react-sample-app/actions/workflows/ci.yml/badge.svg)](https://github.com/zkm/react-sample-app/actions/workflows/ci.yml)
[![live demo](https://img.shields.io/website?url=https%3A%2F%2Fzkm.github.io%2Freact-sample-app%2F&label=live%20demo)](https://zkm.github.io/react-sample-app/)
[![License: GPL-3.0](https://img.shields.io/badge/license-GPL--3.0-blue)](LICENSE)

![React 19](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white)
![webpack 5](https://img.shields.io/badge/webpack-5-8DD6F9?logo=webpack&logoColor=black)
![Babel](https://img.shields.io/badge/Babel-F9DC3E?logo=babel&logoColor=black)
![Jest](https://img.shields.io/badge/Jest-C21325?logo=jest&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)
![Yarn 4](https://img.shields.io/badge/Yarn-4-2C8EBB?logo=yarn&logoColor=white)
![Node.js 20](https://img.shields.io/badge/Node.js-20-5FA04E?logo=nodedotjs&logoColor=white)

This repository is an example to-do list app built using modern React (v19), ReactDOM, Jest, and React Testing Library.

## Requirements

- Node.js (v18 or newer recommended)
- Yarn (recommended; install via `npm install -g yarn`)

After cloning the repository, run:

```
yarn install
```

## Running

To start the development server and build the app, run:

```
yarn server
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

The server logs all requests to STDOUT. The Express server is defined in `server.js`.

## Testing

All tests use Jest and React Testing Library.

To run all tests once:

```
yarn test
```

To run tests in watch mode:

```
yarn test-watch
```

Test files are located in `test/components/` and cover all major app functionality.

## Modernization Notes

- All React components use functional components and hooks.
- The app is compatible with React 19 and modern browsers.
- Legacy dependencies (PhantomJS, Jasmine, old React APIs) have been removed.
- The build uses Browserify and UglifyJS for bundling.
