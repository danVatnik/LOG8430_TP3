var express = require('express');                
var bodyParser = require('body-parser');
var GestionnaireRecherche = require('./app/noyau/GestionnaireRecherche');
var ServiceDeezer = require('./app/services/ServiceDeezer');
var ServiceJamendo = require('./app/services/ServiceJamendo');
var ServiceSpotify = require('./app/services/ServiceSpotify');

var app = express();  
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

var port = process.env.PORT || 8080;
var router = express.Router();

app.use('/chansons', router);
app.listen(port);

var services = [
    new ServiceDeezer(),
    new ServiceJamendo(),
    new ServiceSpotify()
];

var gestionnaireRecherche = new GestionnaireRecherche(services);

router.get('/', function(req, res) {
    gestionnaireRecherche.chercher(req.query.recherche).then(chansons => res.json(chansons));
});