var Chanson = require('./Chanson.js');

class ChansonDeezer extends Chanson {
    constructor(titre, duree, iframeHtml) {
        super(titre, duree, iframeHtml);
    }
}

module.exports = ChansonDeezer;