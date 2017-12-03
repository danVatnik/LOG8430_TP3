/**
 * Représente une liste de chansons avec un nom.
 */
export default class ListeLecture {
    /**
     * Créer une liste de lecture avec un nom.
     * @param {String} nom Nom de la liste de lecture
     */
    constructor(nom) {
        this.nom = nom;
        this.chansons = [];
    }

    /**
     * Ajouter une chanson à la fin de la liste de lecture
     * @param {Chanson} chanson Chanson à ajouter
     */
    ajouterChanson(chanson) {
        this.chansons.push(chanson);
    }

    /**
     * Supprimer une chanson de la liste de lecture. Si elle n'existe pas,
     * aucune erreur n'est retournée et aucun changement n'est apporté à la
     * liste.
     * @param {Chanson} chanson Chanson à supprimer
     */
    supprimerChanson(chanson) {
        const index = this.chansons.indexOf(chanson);

        // Si la chanson a été trouvée dans la liste de lecture, la supprimer.
        if (index !== -1) {
            this.chansons.splice(index, 1);
        }
    }
}