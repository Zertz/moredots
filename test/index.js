"use strict";

const assert = require("assert");
const moredots = require("../src");

describe("moredots", () => {
  it("recursively converts objects to dot notation", () => {
    const result = moredots({
      foo: {
        bar: {
          baz: 42,
        },
      },
    });

    assert.strictEqual(result["foo.bar.baz"], 42);
  });
});
