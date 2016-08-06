'use strict';

var Promise = require('promise');

module.exports = (function() {

	var spotify = function spotify(args) {
		console.log(args);
		return new Promise(function(resolve, reject) {
			console.log('api:' + result);
			resolve(args);
		});
	};
	return {
		spotify: spotify
	}
})();