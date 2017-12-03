var Service = require('./Service.js');
var ChansonDeezer = require('./../noyau/ChansonDeezer.js');
var axios = require('axios');

class ServiceDeezer extends Service {
    constructor() {
        super();
    }

    chercher(requete) {
        let self = this;

        return axios.get('https://api.deezer.com/search?q=' + requete)
        .then(response => {
            return response.data.data.map(self.construireChanson)
        })
        .catch(error => {
          console.log(error);
        });
    }

    construireChanson(chansonJson) {
        let titre = chansonJson.artist.name + " - " + chansonJson.title;

        return axios.get("https://api.deezer.com/oembed?url=http://www.deezer.com/track/" + chansonJson.id + "&width=700&height=92")
        .then(res => {
            return new ChansonDeezer(titre, chansonJson.duration, res.data.html);
        })
        .catch(error => {
          console.log(error);
        });
    }
}

module.exports = ServiceDeezer;