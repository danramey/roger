"use strict"

var posLocation = "./data/parts_of_speech/";
const _ = require('lodash');
// var crypto = require('crypto');
const readline = require('readline');
const fs = require('fs');



function readFile(path, pos, data) {
	var rl = readline.createInterface({
    	input: fs.createReadStream(path)
	});

    rl.on('line', function (line) {
    	var word = line.toLowerCase();
      if(!data.hasOwnProperty(word)) {
      	data[word] = [];
      }
      // console.log(word, data[word]);
      if(-1 == _.indexOf(data[word], pos)) {
      	data[word].push(pos);
      }
      
    });

    rl.on('close', function() {
    	// write the results
		fs.writeFile("./data/pos.json", JSON.stringify(data), 'utf8', function (err) {
		    if (err) {
		        return console.log(err);
		    }

		    console.log("The pos DB was saved!");
		});

	});

	
}
function loadPOS(pos, dir, data) {
	fs.readdir(dir, (err, files) => {
	  files.forEach(file => {
	    readFile(dir + file, pos, data);
	  });
	});
}

var data = {};

loadPOS("adjective", posLocation + "adjectives/", data);
loadPOS("adverb", posLocation + "adverbs/", data);
loadPOS("conjunction", posLocation + "conjunctions/", data);
loadPOS("interjection", posLocation + "interjections/", data);
loadPOS("noun", posLocation + "nouns/", data);
loadPOS("preposition", posLocation + "prepositions/", data);
loadPOS("pronoun", posLocation + "pronouns/", data);
loadPOS("verb", posLocation + "verbs/", data);

