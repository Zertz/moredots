const isPlainObject = require('lodash.isplainobject')

{
  let moredots = function (src, dst = {}, prefix = '') {
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
