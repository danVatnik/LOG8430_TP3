import Chanson from "./Chanson.js"

export default class GestionnaireRecherche {
    constructor() {
    }

    chercher(requete) {
        let self = this;
        return $.ajax({
            type: "get",
            url: "http://localhost:8080/chansons?recherche=" + requete,
        }).then(function(chansons) {
            return chansons.map(self.construireChanson);
        });
    }

    construireChanson(chansonJson) {
        return new Chanson(chansonJson.titre, chansonJson.duree, chansonJson.iframeHtml);
    }
}