'use strict';

var request = require('request'); 
var client_id = '9e86220109ea407b9abc5699818e7495'; // Your client id
var client_secret = 'd10a0dd01c334b45a3d087fef5885964'; // Your secret
var redirect_uri = '/'; // Your redirect uri

module.exports = (function () {
    // var audio = new Audio();

    var auth_token = (new Buffer(client_id + ':' + client_secret).toString('base64'));

    var generateRandomString = function(length) {
      var text = '';
      var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

      for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    };

    var stateKey = 'spotify_auth_state';

    function authorize(req, res) {

      var state = generateRandomString(16);
      res.cookie(stateKey, state);

      // your application requests authorization
      var scope = 'user-read-private user-read-email';
      res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
          response_type: 'code',
          client_id: client_id,
          scope: scope,
          redirect_uri: redirect_uri,
          state: state
        }));
    }

    function getToken() {
        return new Promise(function(resolve, reject) {
            console.log('getToken');
            var authOptions = {
              url: 'https://accounts.spotify.com/api/token',
              form: {
                code: code,
                redirect_uri: redirect_uri,
                grant_type: 'authorization_code'
              },
              headers: {
                'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
              },
              json: true
            };

            request.post(authOptions, function(error, response, body) {
              if (!error && response.statusCode === 200) {
                console.log('resolve');
                resolve(response, body);
              } else {
                console.log('reject');
                reject(response, error);
              }
            });
        });
    }

    function searchTracks(query) {

        return new Promise(function(resolve, reject) {

            var options = {
                url: 'https://api.spotify.com/v1/search',
                data: {
                    q: query,
                    type: 'track'
                },
                headers: {
                    'Authorization': 'Basic ' + auth_token
                },
                json: true
            };

            request.get(options, function(error, response, body) {
              console.log(error, response, body);
              if(error) {
                reject(error);
              }
              resolve(body);
                //        if (response.tracks.items.length) {
                //             var track = response.tracks.items[0];
                //             audio.src = track.preview_url;
                //             audio.play();
                //             communicateAction('<div>Playing ' + track.name + ' by ' + track.artists[0].name + '</div><img width="150" src="' + track.album.images[1].url + '">');
                //         }
            });
        });

        // $.ajax({
        //     url: 'https://api.spotify.com/v1/search',
        //     data: {
        //         q: query,
        //         type: 'track'
        //     },
        //     success: function (response) {
        //         if (response.tracks.items.length) {
        //             var track = response.tracks.items[0];
        //             audio.src = track.preview_url;
        //             audio.play();
        //             communicateAction('<div>Playing ' + track.name + ' by ' + track.artists[0].name + '</div><img width="150" src="' + track.album.images[1].url + '">');
        //         }
        //     }
        // });
    }

    function playSong(songName, artistName) {
        // var query = songName;
        // if (artistName) {
        //     query += ' artist:' + artistName;
        // }

        // return searchTracks(query);
        console.log('playSong');
        getToken().then(makeApiRequest, function(response, body) {
            res.redirect('/#' +
            querystring.stringify({
                error: 'invalid_token'
            }));
        });
    }

    function makeApiRequest(response, body) {


        var access_token = body.access_token,
            refresh_token = body.refresh_token;

        var options = {
          url: 'https://api.spotify.com/v1/me',
          headers: { 'Authorization': 'Bearer ' + access_token },
          json: true
        };

        // use the access token to access the Spotify Web API
        request.get(options, function(error, response, body) {
          console.log(body);
        });

    }

    // function communicateAction(text) {
    //     var rec = document.getElementById('conversation');
    //     rec.innerHTML += '<div class="action">' + text + '</div>';
    // }

    // function recognized(text) {
    //     var rec = document.getElementById('conversation');
    //     rec.innerHTML += '<div class="recognized"><div>' + text + '</div></div>';
    // }

    // if (annyang) {
    //     // Let's define our first command. First the text we expect, and then the function it should call
    //     var commands = {
    //         'stop': function () {
    //             audio.pause();
    //         },
    //             'play track *song': function (song) {
    //             recognized('Play track ' + song);
    //             playSong(song);
    //         },
    //             'play *song by *artist': function (song, artist) {
    //             recognized('Play song ' + song + ' by ' + artist);
    //             playSong(song, artist);
    //         },
    //             'play song *song': function (song) {
    //             recognized('Play song ' + song);
    //             playSong(song);
    //         },
    //             'play *song': function (song) {
    //             recognized('Play ' + song);
    //             playSong(song);
    //         },

    //             ':nomatch': function (message) {
    //             recognized(message);
    //             communicateAction('Sorry, I don\'t understand this action');
    //         }
    //     };

    //     // Add our commands to annyang
    //     annyang.addCommands(commands);

    //     // Start listening. You can call this here, or attach this call to an event, button, etc.
    //     annyang.start();
    // }

    // annyang.addCallback('error', function () {
    //     communicateAction('error');
    // });
    return {
        playSong: playSong,
        authorize: authorize
    }
})();