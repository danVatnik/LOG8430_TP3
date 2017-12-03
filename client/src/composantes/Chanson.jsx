import React from 'react';
import { formaterDuree } from './../noyau/utils.js';

/**
 * Composant graphique représentant une chanson dans une liste de lecture.
 */
export default class Chanson extends React.Component {
    /**
     * Demander à ce qu'une chanson soit jouée.
     * @param {Chanson} chanson
     */
    jouer(chanson) {
        this.props.jouer(chanson);
    }

    /**
     * Demander à ce qu'une chanson soit supprimée de sa liste de lecture.
     * @param {Chanson} chanson
     */
    supprimer(chanson) {
        this.props.supprimer(chanson);
    }

    /**
     * Rendre le composant graphique.
     */
    render() {
        let chanson = this.props.chanson;

        return (
            <li data-id={this.props.index} className="chanson">
                <div className="liste">
                    <span className="icone-gauche"><button type="button" className="btn btn-success btn-sm" onClick={this.jouer.bind(this, chanson)}><i className="fa fa-play"></i></button></span>
                    <span className="contenu">{chanson.titre} <span className="duree">({formaterDuree(chanson.duree)})</span></span>
                    <span className="icone-droite"><a href="#" onClick={this.supprimer.bind(this, chanson)}><i className="fa fa-trash text-danger"></i></a></span>
                </div>
            </li>
        );
    }
}