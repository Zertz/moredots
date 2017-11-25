# moredots [![Build Status](https://travis-ci.org/Zertz/moredots.png)](https://travis-ci.org/Zertz/moredots) [![NPM version](https://badge.fury.io/js/moredots.png)](http://badge.fury.io/js/moredots) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Recursively converts objects to dot notation.

```js
npm i moredots --save
```

## Usage

```js
const moredots = require('moredots')

const result = moredots({
  foo: {
    bar: {
      baz: 42
    }
  }
})

// result = {
//   'foo.bar.baz': 42
// }
```

## Contributing

I'd love for you to contribute and make moredots even better than it is today!

### Getting started

```
git clone https://github.com/Zertz/moredots.git
npm install
npm test
```
