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

	me.findPartsOfSpeech = function(pos, text) {
		//todo: handle commas semicolons, and other punctuation
		var structure = [];
		var text = text.replace(/,/g,"");
		var words = text.split(" ");
		for (var i = words.length - 1; i >= 0; i--) {
			if(!pos[words[i]]){
				console.log('unknown word:'+words[i]);
				continue;
			}
			structure.push(pos[words[i]][0]);
		}
		return [structure.join(" ")];
	};
	
	me.parse = function(memory, pos, text) {
		
		var structure = me.findSentenceStructure(pos, text);

		console.log(structure);
		return memory;
	}; 

	me.findSentenceStructure = function (pos, text) {
		if(!text){
			return false;
		}
		var statements = me.splitStatements(text);
		for (var i = statements.length - 1; i >= 0; i--) {
			var structures = me.findPartsOfSpeech(pos, statements[i]);
			for (var j = structures.length - 1; j >= 0; j--) {
				console.log(structures[j]);
				

				// for (var k = templates.length - 1; k >= 0; k--) {
				// 	if(structures[j] === templates[k]){
				// 		return templates[k];
				// 	}
				// }
			}
		}
		return false;
	};
	

};

module.exports = SentenceParser;