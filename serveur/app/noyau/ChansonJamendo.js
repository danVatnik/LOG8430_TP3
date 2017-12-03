var Chanson = require('./Chanson.js');

class ChansonJamendo extends Chanson {
    constructor(titre, duree, audioURL) {
        super(titre, duree, audioURL);
    }
}

module.exports = ChansonJamendo;