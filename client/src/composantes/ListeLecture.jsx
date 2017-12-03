import Chanson from './../noyau/Chanson.js';

import ComposantChanson from './Chanson.jsx';

export default class ListeLecture extends React.Component {
    render() {
        let listeLecture = this.props.listeLecture;
        let listeIndex = this.props.index;
        let changerOrdreChansons = this.props.changerOrdreChansons;

        let chansonsHtml;
        if (listeLecture.chansons.length > 0) {
            chansonsHtml = listeLecture.chansons.map((chanson, index) => (
                <ComposantChanson key={index} index={`${listeIndex}--${index}`} chanson={chanson} jouer={this.props.jouer} supprimer={chanson => this.props.supprimerChanson(listeLecture, chanson)} />
            ));
        }
        else {
            chansonsHtml = <li data-id="vide" className="chanson liste-lecture-vide">Liste de lecture vide</li>;
        }

        return (
            <div className="liste-lecture">
                <div className="liste">
                    <span className="icone-gauche"><i className="fa fa-list"></i></span>
                    <span className="contenu">{listeLecture.nom}</span>
                    <span className="icone-droite"><a href="#" onClick={this.props.supprimer}><i className="fa fa-trash text-danger"></i></a></span>
                </div>

                <ReactSortable
                    tag="ul"
                    className="chansons"
                    onChange={(ordre, sortable, evt) => changerOrdreChansons(listeIndex, ordre)}
                    options={{
                        group: 'chansons'
                    }}>
                    {chansonsHtml}
                </ReactSortable>
            </div>
        );
    }
}