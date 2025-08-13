# React Sample App

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
