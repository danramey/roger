'use strict';


var fs = require('fs');
var lib_debug = require('debug');
var debug = lib_debug('app:debug');
var error = lib_debug('app:error');

var patternParser = require('./pattern_parser.js')(debug);

// var elements;


function readUTF8(file) {
	fs.readFile(file, 'utf8', function(err, data) {
		if(err) throw err;
		//debug(data);
		var result = patternParser.findPatterns(data.split(''));
		// debug(result);
	});
}

function readBinary(file) {
	fs.readFile(file, function(err, data) {
		if(err) throw err;
		// debug(data;
		var result = patternParser.findPatterns(data);
		// debug(result);
	});
}

readUTF8('test_data/stephen-hawking-black-holes.txt');
// readBinary('test_data/stephen-hawking-black-holes.txt');
