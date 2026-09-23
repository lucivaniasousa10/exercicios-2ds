const Ingresso = require("./Ingresso");

class Camarote extends Ingresso {
    descricao() {
        return "Ingresso de camarote validado na entrada";
    }
}

module.exports = Camarote;