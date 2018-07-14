/* jshint node: true */
'use strict';

var fs = require( 'fs' );
var readline = require( 'readline' );
var stream = require( 'stream' );

var instream = fs.createReadStream( 'data/sample3.txt' );
var outstream = new stream();
var rl = readline.createInterface( instream, outstream);

var pos_db = require( './data/pos.json' );

var XRegExp = require('xregexp');

var data = [];

function printTokens( sentance ) {
  console.log('text: ' + sentance.text);
  sentance.tokens.forEach(function( token ) {
    console.log(token.word);
    if(token.pos) {
      console.log( '{' + token.pos.join(',') + '}' );
    }
    if(token.tags && token.tags.length > 0 ) {
      console.log(token.tags);
    }
  });
}

function analyzeWord( word, index ) {

  var token = word.toLowerCase();
  var pos; 
  var tags = [];

  if(0 !== index) {
    // not the first word
    if( word.charAt(0) !== word.charAt(0).toLowerCase() ) {
      // first char is uppercase
      // assume this is a proper noun
      pos = ['noun'];
      tags.push('poper-noun');
    }
  } else {
    pos = pos_db[token];
  }

  	return {
      tags: tags,
  		word: word,
  		pos: pos
  	};
}

function analyzeStatement( statement ) {

  // TODO: account for position of words
	var tokens = [];
  // TODO: handle single quotes
  // pull out quoted statements
  var subStatements = XRegExp.matchRecursive(statement, '\\"', '\\"', 'g');
  subStatements.forEach(function(subStatement) {
    var subR = analyzeStatement(subStatement);
    tokens = tokens.concat(subR.tokens);
    cleanedStatement = statement.replace('"' + subStatement +'"', '')
  });
  var cleanedStatement = subStatements.replace
  	var words = statement.split( ' ' );
  	words.forEach(function( word, index ) {
  		
  		var r = analyzeWord(word, index);

      tokens.push(r);

  	});
  	return {
  		text: statement,
      tokens: tokens,
  	};
	
}

rl.on('line', function( line ) {
  // process line here
  // TODO: does not account for sentances across lines
  var sentances = line.split( '. ' );
  sentances.forEach( function( sentance ) {
    var statements = sentance.split( '; ' );
    statements.forEach( function( statement ) {
    	var r = analyzeStatement( statement );
      printTokens( r );
    	data.push( r );
    });
  });

});

rl.on( 'close', function() {
  // do something on finish here
  // console.log( data );
});
