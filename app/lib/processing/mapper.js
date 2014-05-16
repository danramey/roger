/*
 * roger
 *
 * Copyright (c) 2013 Dan Ramey
 */

'use strict';

var SentenceParser = require("./sentenceParser");
var fs = require('fs');
var path = require('path');

var Mapper = function() {
	
	var me = this;
	var sentenceParser = new SentenceParser();
	me.partsOfSpeech = {};

	var readLines = function(input, func, onComplete) {
		var remaining = '';

		input.on('data', function(data) {
			remaining += data;
			var index = remaining.indexOf('\n');
			while (index > -1) {
				var line = remaining.substring(0, index);
				remaining = remaining.substring(index + 1);
				func(line);
				index = remaining.indexOf('\n');
			}
		});

		input.on('end', function() {
			if (remaining.length > 0) {
				func(remaining);
			}
			onComplete();
		});
	};

	var processPartOfSpeech = function (data) {
		var pair = data.split("\\");
		if(pair[0] && pair[1]){
			if(!me.partsOfSpeech[pair[0]] || !Array.isArray(me.partsOfSpeech[pair[0]])){
				me.partsOfSpeech[pair[0]] = [];
			}
			me.partsOfSpeech[pair[0]].push(pair[1]);
		}
	};

	me.loadPartsOfSpeech = function (onComplete) {
		console.log('loadPartsOfSpeech');

		// fs.readFile(path.resolve(__dirname, '../../words/mposp10/mobypos.txt'), 'UTF-8', callback);

		var input = fs.createReadStream(path.resolve(__dirname, '../../words/mposp10/mobypos.txt'));
		readLines(input, processPartOfSpeech, onComplete);
	};


	me.parse = function(memory, pos, text) {
		console.log(text);
		var statements = sentenceParser.splitStatements(text);

		for (var i = statements.length - 1; i >= 0; i--) {
			
			sentenceParser.parse(memory, pos, statements[i]);
		}
		return memory;
	}; 

};

module.exports = Mapper;