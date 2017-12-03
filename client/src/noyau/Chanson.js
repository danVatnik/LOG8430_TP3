/**
 * Représente une chanson de n'importe quel service.
 */
export default class Chanson {
    /**
     * Construire une chanson avec un titre et une durée.
     * @param {String} titre Titre de la chanson (avec l'artiste)
     * @param {Number} duree Durée de la chanson (en secondes)
     * @param {string} iframeHtml Code HTML permettant de faire jouer la chanson
     */
    constructor(titre, duree, iframeHtml) {
        this.titre = titre;
        this.duree = duree;
        this.iframeHtml = iframeHtml;
    }
}