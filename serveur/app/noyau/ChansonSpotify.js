var Chanson = require('./Chanson.js');

class ChansonSpotify extends Chanson {
    constructor(titre, duree, iframeHtml) {
        super(titre, duree, iframeHtml);
    }
}

module.exports = ChansonSpotify;