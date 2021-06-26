# moredots [![NPM version](https://badge.fury.io/js/moredots.png)](http://badge.fury.io/js/moredots)

Recursively converts objects to dot notation.

```js
npm install moredots
```

## Usage

```js
const moredots = require("moredots");

const result = moredots({
  foo: {
    bar: {
      baz: 42,
    },
  },
});

// result = {
//   'foo.bar.baz': 42
// }
```

### Getting started

```
git clone https://github.com/Zertz/moredots.git
yarn
yarn test
```
