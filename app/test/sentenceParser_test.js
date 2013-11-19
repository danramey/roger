'use strict';

var SentenceParser = require('../lib/processing/sentenceParser.js');
var sentenceParser = new SentenceParser();
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

exports['roger'] = {
  setUp: function(done) {
    // setup here
    
    done();
  },
  'no args': function(test) {
    test.expect(1);
    var text = "Mary had a little lamb, whose fleece was white as snow";
    var structure = sentenceParser.findSentenceStructure(text);
    test.equal(structure, 'foo', 'found the sentance structure');
    
    test.done();
  }
};
