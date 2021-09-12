// @ts-check
const {isObject, toArray} = require('sat-utils');
const {attachFailedApplicationCodition} = require('../reporter');
const yargs = require('yargs/yargs')
const {hideBin} = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

const mochaIt = global.it;

const fixturesHolder = {};

/**
 * @typedef {() => Promise<void>|void} testCaseBody
 */

function wrapTestCaseBody(testCaseTitle, testCaseBodyCallback) {
  return (async function() {
    try {
      await testCaseBodyCallback.call(this, fixturesHolder)
    } catch(error) {
      await attachFailedApplicationCodition(`FAILED ${testCaseTitle}`);
      throw error
    }
  }).bind(this)
}
/**
 * @param {string} testCaseTitle test case title
 * @param {{tags: string|string[]}|testCaseBody} testCaseBodyCallbackOrOptions test case body
 * @param {testCaseBody} [testCaseBodyCallback] test case body
 */
function it(testCaseTitle, testCaseBodyCallbackOrOptions,  testCaseBodyCallback) {
  // @ts-ignore
  const {tags} = argv;

  if(tags && arguments.length === 2) return

  if(!isObject(testCaseBodyCallbackOrOptions)) {
    // @ts-ignore
    testCaseBodyCallback = testCaseBodyCallbackOrOptions
  } else {
    // @ts-ignore
    const {tags: testCaseTags} = testCaseBodyCallbackOrOptions;
    if(tags && testCaseTags) {
      const testCaseTagsArr = toArray(testCaseTags)
      const runArgTagsArr = tags.toString().split(',');
      const doesTestCaseHaveRequiredTags = testCaseTagsArr.some((testCaseTag) => runArgTagsArr.includes(testCaseTag));
      if(!doesTestCaseHaveRequiredTags) {
        return
      }
    }
  }

  mochaIt(testCaseTitle, wrapTestCaseBody(testCaseTitle, testCaseBodyCallback))
}

/**
 * @param {string} testCaseTitle test case title
 * @param {{tags: string|string[]}|testCaseBody} testCaseBodyCallbackOrOptions test case body
 * @param {testCaseBody} [testCaseBodyCallback] test case body
 */
it.only = function(testCaseTitle, testCaseBodyCallbackOrOptions, testCaseBodyCallback) {
  if(!isObject(testCaseBodyCallbackOrOptions)) {
    // @ts-ignore
    testCaseBodyCallback = testCaseBodyCallbackOrOptions
  }

  mochaIt.only(testCaseTitle, wrapTestCaseBody(testCaseTitle, testCaseBodyCallback))
}

it.initFixtures = function(fixturesData) {
  if(isObject(fixturesData)) {
    return Object.assign(fixturesHolder, fixturesData)
  }
  throw new TypeError('fixturesData should be an abject')
}

module.exports = {
  it,
}