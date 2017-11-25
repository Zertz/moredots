'use strict'

const isPlainObject = require('lodash.isplainobject')

{
  const moredots = function (src, dst, prefix) {
    dst = typeof dst === 'undefined' ? {} : dst
    prefix = typeof prefix === 'undefined' ? '' : prefix

    for (var key in src) {
      if (isPlainObject(src[key])) {
        moredots(src[key], dst, prefix + key + '.')
      } else {
        dst[prefix + key] = src[key]
      }
    }

    return dst
  }

  module.exports = moredots
}
