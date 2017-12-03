import ResultatsRecherche from './ResultatsRecherche.jsx';

export default class Recherche extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resultats: [],
            enChargement: false,
            requete: ""
        };
    }

    gererChangementRequete(evenement) {
        this.setState({ requete: evenement.target.value });
    }

    gererSoumissionRequete(evenement) {
        this.setState({ enChargement: true });
        this.props.gestionnaireRecherche.chercher(this.state.requete)
            .then(chansons => this.setState({ enChargement: false, resultats: chansons }));
        evenement.preventDefault();
    }

    render() {
        return (
            <div className="col panneau">
                <form onSubmit={this.gererSoumissionRequete.bind(this)}>
                    <div className="input-group">
                        <input type="search" className="form-control" placeholder="Chercher de la musique..." value={this.state.requete} onChange={this.gererChangementRequete.bind(this)} />
                        <span className="input-group-btn">
                            <button className="btn btn-primary" type="submit"><i className="fa fa-search"></i></button>
                        </span>
                    </div>
                </form>
                <ResultatsRecherche
                    enChargement={this.state.enChargement}
                    bibliotheque={this.props.bibliotheque}
                    chansons={this.state.resultats}
                    jouer={this.props.jouer}
                    ajouterChanson={this.props.ajouterChanson} />
            </div>
        );
    }
}