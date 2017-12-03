import ListeLecture from './ListeLecture.js';

/**
 * Représente une collection de liste de lectures.
 */
export default class Bibliotheque {
    /**
     * Créer une bibliothèque vide.
     */
    constructor() {
        this.listesLecture = [];
    }

    /**
     * Ajouter une nouvelle liste de lecture à la bibliothèque en lui donnant un
     * nom.
     * @param {String} nom Nom de la nouvelle liste de lecture
     * @return {ListeLecture} La liste de lecture nouvellement créée
     */
    creerListe(nom) {
        let liste = new ListeLecture(nom);
        this.listesLecture.push(liste);

        return liste;
    }

    /**
     * Remplacer la liste des chansons d'une liste de lecture par une autre.
     *
     * Note : ceci est utile pour réordonner les chansons d'une liste de
     * lecture.
     * @param {Number} index Index de la liste de lecture à changer
     * @param {Chanson[]} listeChansons Nouvelle liste de chansons pour cette
     *     liste de lecture
     */
    changerListe(index, listeChansons) {
        this.listesLecture[index].chansons = listeChansons;
    }

    /**
     * Supprimer une liste de lecture de la bibliothèque. Si elle n'existe pas,
     * aucune erreur n'est retournée et aucun changement n'est apporté à la
     * bibliothèque.
     * @param {ListeLecture} liste Liste de lecture à supprimer.
     */
    supprimerListe(liste) {
        const index = this.listesLecture.indexOf(liste);

        // Si la liste de lecture a été trouvée dans la bibliothèque, la
        // supprimer.
        if (index !== -1) {
            this.listesLecture.splice(index, 1);
        }
    }
}