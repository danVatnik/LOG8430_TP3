import { formaterDuree } from './../noyau/utils.js';

export default class ResultatsRecherche extends React.Component {

    jouer(chanson) {
        this.props.jouer(chanson);
    }

    ajouterChansonAListeLecture(listeLecture, chanson, evenement) {
        this.props.ajouterChanson(listeLecture, chanson);
        evenement.preventDefault();
    }

    render() {
        let self = this;

        let { enChargement, chansons } = this.props;

        let html;
        if (enChargement) {
            html = (
                <p className="liste-vide">Chargement en cours...<br /><br /><i className="fa fa-spinner fa-pulse fa-4x fa-fw"></i></p>
            );
        }
        else if (chansons.length == 0) {
            html = (
                <p className="liste-vide">Commencez votre recherche en entrant un terme ci-haut!</p>
            );
        }
        else {
            let resultats = this.props.chansons.map((chanson, index) => {
                let listesLecture = this.props.bibliotheque.listesLecture.map((listeLecture, indexListe) => {
                    return <a key={indexListe} className="dropdown-item" href="#" onClick={this.ajouterChansonAListeLecture.bind(self, listeLecture, chanson)}>{listeLecture.nom}</a>
                });

                return (
                    <tr key={index}>
                        <td>
                            <button type="button" className="btn btn-success btn-sm" onClick={this.jouer.bind(this,chanson)}><i className="fa fa-play"></i></button>
                        </td>
                        <td>
                            <div className="dropwdown">
                                <button type="button" className="btn btn-primary btn-sm" data-toggle="dropdown"><i className="fa fa-plus"></i></button>
                                <div className="dropdown-menu">{listesLecture}</div>
                            </div>
                        </td>
                        <td>{chanson.titre}</td>
                        <td>{formaterDuree(chanson.duree)}</td>
                    </tr>
                );
            });

            html = (
                <table className="resultats-recherche table">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Titre</th>
                            <th>Durée</th>
                        </tr>
                    </thead>

                    <tbody>
                        {resultats}
                    </tbody>
                </table>
            );
        }

        return html;
    }
}