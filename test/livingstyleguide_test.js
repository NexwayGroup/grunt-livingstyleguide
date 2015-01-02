'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.livingstyleguide = {

  setUp: function (done) {
    // setup here if necessary
    done();
  },
  inputConfig: function (test) {
    test.expect(1);

    var actual = grunt.file.exists('test/fixtures/styleguide.lsg');
    test.ok(actual, 'underscore partial files should be ignored');

    test.done();
  },
  fakeConfig: function (test) {
    test.expect(1);

    var actual = grunt.file.exists('test/fixtures/styleguidle.lsg'); // fake file
    var expected = false;
    test.equal(actual, expected, 'should describe what the default behavior is.');

    test.done();
  },
  outputFile: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/styleguide.html');
    var expected = grunt.file.read('test/expected/styleguide.html');
    test.equal(actual, expected, 'should describe what the default behavior is.');

    test.done();
  }
};
