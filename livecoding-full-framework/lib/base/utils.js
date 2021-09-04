// @ts-check
const {deepStrictEqual} = require('assert');

function isEqual(itemA, itemB) {
  try {
    deepStrictEqual(itemA, itemB)
    return true
  } catch {
    return false;
  }
}

module.exports = {
  isEqual,
}