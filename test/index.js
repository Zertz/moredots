'use strict'

const assert = require('assert')

describe('moredots', () => {
  const moredots = require('../src')

  it('recursively converts objects to dot notation', () => {
    const result = moredots({
      foo: {
        bar: {
          baz: 42
        }
      }
    })

    assert.equal(result['foo.bar.baz'], 42)
  })
})
