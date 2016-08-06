'use strict';

var matchstick = require('matchstick');
var Promise = require('promise');

module.exports = (function(api) {
	
	var preformat = function preformat(s) {
		var result = s.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
		result = result.replace(/\s{2,}/g," ");
		return result.toLowerCase();
	}

	var parseCommand = function parseCommand(command) {
		console.log('parseCommand');
		command = preformat(command);
		var apiCall = {
			success : false,
			message: "",
			method: null,
			args: {}
		};
		var playSpotifyRandom = matchstick('play spotify', 'template');
		var playSpotifySearch = matchstick('play spotify {term}', 'template');
		var playSpotifySpecific = matchstick('play spotify {type} {term}', 'template');

		if(playSpotifySpecific.match(command)) {	
			apiCall.success = true;
			apiCall.method = 'spotify';
			apiCall.args = playSpotifySpecific.matches;
		} else if(playSpotifySearch.match(command)) {
			apiCall.success = true;
			apiCall.method = 'spotify';
			apiCall.args = playSpotifySearch.matches;
		} else if(playSpotifyRandom.match(command)) {
			apiCall.success = true;
			apiCall.method = 'spotify';
			apiCall.args.random = true;
		}

		// TODO: add support for prompting users for close commands
		// TODO: save those as new command templates
		if(!apiCall.success) {
			apiCall.message = "invalid command"
		}
		return apiCall;
	}

	var executeCommand = function executeCommand(command) {
		console.log('executeCommand');
		return new Promise(function(resolve, reject) {
			
			var apiCall = parseCommand(command);
			console.log(apiCall);
			if(!apiCall.success) {
				reject(apiCall.message);
			}
			if(!api[apiCall.method]) {
				reject("invalid command");
			}
			api[apiCall.method](apiCall.args).then(function(result) {
				console.log('executeCommand:' + result);
				resolve(result);
			}, reject);
		});
	}

	return {
		executeCommand: executeCommand
	};
});