const Ingresso = require("./ingresso");

class Pista extends Ingresso {
    descricao() {
        return "Ingresso de pista validado na entrada";
    }
}

module.exports = Pista;
