var Service = require('./Service.js');
var ChansonSpotify = require('./../noyau/ChansonSpotify.js');
var ChansonJamendo = require('./../noyau/ChansonJamendo.js');
var axios = require('axios');
var Buffer = require('buffer');
var btoa = require('btoa')
var request = require('request')

class ServiceSpotify extends Service {
    constructor() {
        super();
        let self = this;
        
        var headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            "Authorization":  "Basic " + btoa("d25dbaca45c7415f94f5b0994c05b8ff" + ":" + "c099d5e3e56d4cd9a1547d7b6284125c")
        }

        var data = {
            "grant_type": "client_credentials"
        }

        request.post({
          headers: {
              'content-type' : 'application/x-www-form-urlencoded',
              "Authorization":  "Basic " + btoa("d25dbaca45c7415f94f5b0994c05b8ff" + ":" + "c099d5e3e56d4cd9a1547d7b6284125c")
        },
          url:     'https://accounts.spotify.com/api/token',
          body:    "grant_type=client_credentials"
        }, function(error, response, body){
            self.token = JSON.parse(body).access_token 
        });
    }

    chercher(requete) {
        let self = this;
        if(this.token != null){

            return new Promise((resolve, reject) => {
                request.get({
                    headers: {
                        "Authorization":  "Bearer " + this.token
                  },
                    url: 'https://api.spotify.com/v1/search?q=' + requete + '&type=track',
                    
                  }, function(error, response, body){
                     resolve(JSON.parse(body).tracks.items.map(self.construireChanson));
                  });
            });
        }

        return Promise.resolve({});
    }

    construireChanson(chansonJson) {
        let duree = chansonJson.duration_ms / 1000;
        let titre = chansonJson.name + " - " + chansonJson.artists[0].name
        let iframeHtml = "<iframe src='https://open.spotify.com/embed?uri=spotify:track:"+ chansonJson.id +"' width='300' height='80' frameborder='0' allowtransparency='true'></iframe>"
        return new ChansonSpotify(titre, duree, iframeHtml);
    }
}

module.exports = ServiceSpotify;
