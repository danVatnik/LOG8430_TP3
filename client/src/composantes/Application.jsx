import Bibliotheque from './Bibliotheque.jsx';
import Recherche from './Recherche.jsx';
import Lecteur from './Lecteur.jsx';

export default class Application extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            chanson: null,
            bibliotheque: props.app.bibliotheque,
            elementEnAttente: null // En attente de réordonnancement
        };
    }

    jouer(chanson) {
        this.setState({ chanson: chanson });
    }

    ajouterChanson(listeLecture, chanson) {
        listeLecture.ajouterChanson(chanson);
        this.setState({ bibliotheque: this.state.bibliotheque });
    }

    supprimerChanson(listeLecture, chanson) {
        listeLecture.supprimerChanson(chanson);
        this.setState({ bibliotheque: this.state.bibliotheque });
    }

    creerListeLecture(nomNouvelleListe) {
        this.state.bibliotheque.creerListe(nomNouvelleListe);
        this.setState({ bibliotheque: this.state.bibliotheque });
    }

    changerOrdreChansons(noListeChangee, nouvelOrdre) {
        let { bibliotheque, elementEnAttente } = this.state;
        let nouvelleListeChansons = [];

        // Créer la nouvelle liste de lecture
        nouvelOrdre.forEach(identifiantChanson => {
            if (identifiantChanson != "vide") {
                let [noListe, noChanson] = identifiantChanson.split("--");

                if (noListe == noListeChangee) {
                    nouvelleListeChansons.push(bibliotheque.listesLecture[noListe].chansons[noChanson]);
                }
                else {
                    // Prendre l'élément mis en attente de réordonnancement
                    nouvelleListeChansons.push(elementEnAttente);
                }
            }
        });

        // Vérifier si un élément a été supprimé de la liste originale
        let nouvelElementEnAttente = null;
        bibliotheque.listesLecture[noListeChangee].chansons.forEach((chanson, index) => {
            if (!nouvelOrdre.includes(`${noListeChangee}--${index}`)) {
                nouvelElementEnAttente = chanson;
            }
        });

        bibliotheque.changerListe(noListeChangee, nouvelleListeChansons);
        this.setState({ bibliotheque: bibliotheque, elementEnAttente: nouvelElementEnAttente });
    }

    supprimerListeLecture(listeLecture) {
        this.state.bibliotheque.supprimerListe(listeLecture);
        this.setState({ bibliotheque: this.state.bibliotheque });
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <Lecteur chanson={this.state.chanson} />

                    <div className="row">
                        <Bibliotheque
                            bibliotheque={this.state.bibliotheque}
                            creerListeLecture={this.creerListeLecture.bind(this)}
                            changerOrdreChansons={this.changerOrdreChansons.bind(this)}
                            supprimerListeLecture={this.supprimerListeLecture.bind(this)}
                            supprimerChanson={this.supprimerChanson.bind(this)}
                            jouer={this.jouer.bind(this)} />
                        <Recherche
                            bibliotheque={this.state.bibliotheque}
                            gestionnaireRecherche={this.props.app.obtenirGestionnaireRecherche()}
                            jouer={this.jouer.bind(this)}
                            ajouterChanson={this.ajouterChanson.bind(this)} />
                    </div>
                </div>
            </div>
        );
    }
}
