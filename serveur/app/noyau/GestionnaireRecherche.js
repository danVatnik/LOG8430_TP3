var axios = require('axios');

class GestionnaireRecherche {
    constructor(services) {
        this.services = services;
    }

    chercher(requete) {
        let promessesServices = this.services.map(services => services.chercher(requete));

        return axios.all(promessesServices)
            .then(listesResultats => [].concat(...listesResultats))
            .then(listePromesses => Promise.all(listePromesses))
            .catch(error => {
                console.log(error);
          });
    }
}

module.exports = GestionnaireRecherche;