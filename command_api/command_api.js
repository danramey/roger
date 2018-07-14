'use strict';

var Promise = require('promise');

var spotifyController = require('./media/spotify_controller');

module.exports = (function() {

	var spotify = function spotify(args) {
		console.log(args);
		return new Promise(function(resolve, reject) {

			if('song' == args.type) {
				spotifyController.playSong(args.term).then(resolve,reject);
			}
			
		});
	};
	return {
		spotify: spotify
	}
})();