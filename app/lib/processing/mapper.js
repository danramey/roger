/*
 * roger
 *
 * Copyright (c) 2013 Dan Ramey
 */

'use strict';

var SentenceParser = require("./sentenceParser");

var Mapper = function() {
	
	var me = this;
	var sentenceParser = new SentenceParser();

	me.parse = function(memory, text) {
		console.log(text);
		var statements = sentenceParser.splitStatements(text);

		for (var i = statements.length - 1; i >= 0; i--) {
			
			sentenceParser.parse(memory,statements[i]);
		}
		return memory;
	}; 

};

module.exports = Mapper;