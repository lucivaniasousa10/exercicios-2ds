const Ingresso = require("./Ingresso");

class Pista extends Ingresso {
    descricao() {
        return "Ingresso de pista validado na entrada";
    }
}

module.exports = Pista;
