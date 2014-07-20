/*
 * roger
 *
 * Copyright (c) 2013 Dan Ramey
 */

'use strict';

var DeclarativeCortex = function() {
	
	var me = this;
	me.map = [];

	me.addSubject = function() {
		
	}; 

	me.getMap = function () {
		
		return [
			{
				"name":"Mary",
				"type":"person",
				"has" :[
					{
						"type":"lamb",
						"size":"little",
						"has" :[
							{
								"type"  : "fleece",
								"color" : "white"
							}
						]
					}
				]
				
			}
		];
	};

	me.recall = function (query) {
		console.log(query);
		return false;
	};

};

module.exports = DeclarativeCortex;