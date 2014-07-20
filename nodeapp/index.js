'use strict';

var Roger = require('./lib/roger.js');
var roger = new Roger();
roger.initialize(function(){
	var text = "Mary had a little lamb, whose fleece was white as snow";
    roger.read('mary_had_a_lamb',text);

    console.log(roger.getMap('mary_had_a_lamb'));
});
