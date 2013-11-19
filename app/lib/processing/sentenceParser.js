/*
 * roger
 *
 * Copyright (c) 2013 Dan Ramey
 */

'use strict';

var SentenceParser = function() {
	
	var me = this;
	var templates = [
		"{subject} {verb}",
		"{subject} {copula} {verb}",
		"{subject} {auxiliary-verb} {verb}",
		"{subject} {auxiliary-verb} {verb}",
		"{subject} {verb} {adjective}",
		"{subject} {verb} ",
		"{subject} {verb}",
		"{subject} {verb}",
		"{subject} {verb}"
	];

	me.splitStatements = function(text) {
		//todo: handle spaces, semicolons?
		return text.split(".");
	};
	
	me.parse = function(memory, text) {
		
		var structure = me.findSentanceStructure( text);

		console.log(structure);
		return memory;
	}; 

	me.findSentenceStructure = function (text) {
		console.log(text);
		return templates[0];
	};

};

module.exports = SentenceParser;