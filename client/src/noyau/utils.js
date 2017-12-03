/**
 * Formater une durée fournie en secondes sous forme de minutes et de secondes.
 * @param {Number} duree Temps en secondes
 * @return {String} Chaîne de caractères au format `mm:ss`
 */
export function formaterDuree(duree) {
    let secondes = Math.round(duree % 60);
    let minutes = Math.floor(duree / 60);

    return `${minutes}:${secondes.toString().padStart(2, "0")}`;
}