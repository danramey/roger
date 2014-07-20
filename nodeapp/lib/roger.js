/*
 * roger
 *
 * Copyright (c) 2013 Dan Ramey
 */

'use strict';

var Mapper = require("./processing/mapper");
var Memory = require("./memory/declarativeCortex");

var Roger = function() {
	
	var me = this;
	
	me.initialize = function(onComplete){
		me.mapper = new Mapper();
		me.mapper.loadPartsOfSpeech(onComplete);
		me.map = [];
	}
	me.read = function(index, text) {
		// console.log(index, text);
		var memory = new Memory();
		me.mapper.parse(memory, me.mapper.partsOfSpeech, text);

		me.map[index] = memory.getMap();
	}; 

	me.getMap = function (index) {
		// console.log(index);
		return me.map[index];
	};

	me.ask = function (query) {
		console.log(query);
		return 'white';
	};

};

module.exports = Roger;