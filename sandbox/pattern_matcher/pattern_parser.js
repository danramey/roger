'use strict';

module.exports = (function(debug) {
	
	var findPatterns = function (data) {
		
		var elements = extractElements(data);
		// debug(data);
		extractPatterns(data, elements);
		return elements;
	};

	var extractElements = function(data) {
		var elements = {};

		data.forEach(function(d, i) {
			if(!elements[d]) {
				elements[d] = {
					count: 0,
					occurrences: []
				}
			}
			elements[d].occurrences.push(i);
			elements[d].count ++;
		});
		// elements = sortElements(elements);
		return elements;
	};

	// var sortElements = function(elements) {
	// 	for (var key in elements) {
	// 		// debug(key, elements);
	// 	}
	// 	debug(elements);
	// 	return elements;
	// };

	var extractPatterns = function(data, elements) {
		var patterns = [];
		var pattern = "";
		var lastValue;
		for (var key in elements) {

			lastValue = data[elements[key].occurrences[0] + 1];
			pattern = key;
			// debug(elements[key].occurrences);
			// compare each occurance to the other occurances
			elements[key].occurrences.forEach(function(i){
				lastValue = elements[key].occurrences[0];
				debug(data[i]);
				// find other occurances with the same pattern

			});
		}
	};

	return {
		findPatterns: findPatterns
	}


});