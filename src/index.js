"use strict";

const isPlainObject = require("lodash.isplainobject");

module.exports = function moredots(src, dst = {}, prefix = "") {
  for (const key in src) {
    if (isPlainObject(src[key])) {
      moredots(src[key], dst, prefix + key + ".");
    } else {
      dst[prefix + key] = src[key];
    }
  }

  return dst;
};
