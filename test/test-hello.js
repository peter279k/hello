var assert = require('assert');
var hello = require('../hello.js')();

describe('Hello', function() {
    describe('#indexOf()', function() {
        it('should return the hello world string', function() {
            assert.equal('hello world', hello());
        });
    });
});