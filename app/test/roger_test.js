'use strict';

var Roger = require('../lib/roger.js');
var roger = new Roger();
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
    var text = "Mary had a little lamb, whose fleece was white as snow";
    roger.read('mary_had_a_lamb',text);
    done();
  },
  'no args': function(test) {
    test.expect(4);
    var textMap = roger.getMap('mary_had_a_lamb');
    console.log(textMap);
    test.equal(textMap[0].name, 'Mary', 'should find Mary');
    test.equal(textMap[0].has[0].type, 'lamb', 'should find the lamb');
    test.equal(textMap[0].has[0].has[0].color, 'white', 'should find the white fleece');

    //ask a question
    test.equal(roger.ask("What color is Mary's lamb?"), 'white');

    test.done();
  }
};
