var Service = require('./Service.js');
var ChansonJamendo = require('./../noyau/ChansonJamendo.js');
var axios = require('axios');

class ServiceJamendo extends Service {
    constructor() {
        super();
    }

    chercher(requete) {
        let self = this;

        return axios.get("https://api.jamendo.com/v3.0/tracks/?client_id=544a2f4b&search=" + requete)
        .then(function(chansons) {
            return chansons.data.results.map(self.construireChanson);
        });
    }

    construireChanson(chansonJson) {
        let duree  = chansonJson.duration;
        let titre = chansonJson.name + " - " + chansonJson.artist_name;
        let html = "<audio controls><source src='" + chansonJson.audio + "' type='audio/mpeg'>Your browser does not support the audio element.</audio>";
        return new ChansonJamendo(titre, duree, html);
    }
}

module.exports = ServiceJamendo;