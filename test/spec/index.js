const assert = require('assert')
const context = require('../context/')
const testtt = require('../../src/')

const testttTestSuite = {
    context,
    'should be a function': () => {
        assert.equal(typeof testtt, 'function')
    },
    'should call package without error': () => {
        assert.doesNotThrow(() => {
            testtt()
        })
    },
}

module.exports = testttTestSuite
