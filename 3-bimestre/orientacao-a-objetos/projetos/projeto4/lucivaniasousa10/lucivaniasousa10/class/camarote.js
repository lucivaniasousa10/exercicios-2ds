const Ingresso = require("./ingresso");

class Camarote extends Ingresso {
    descricao() {
        return "Ingresso de camarote validado na entrada";
    }
}

module.exports = Camarote;