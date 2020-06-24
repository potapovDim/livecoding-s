const waits = require('./waits');
const makeSingleton = require('./make.singleton');


module.exports = {
  ...waits,
  ...makeSingleton
}
