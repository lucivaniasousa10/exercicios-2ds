const Ingresso = require("./ingresso");

class VIP extends Ingresso {
    constructor(nomeDoPortador, codigoDoIngresso) {
        super(nomeDoPortador, codigoDoIngresso);

        this.registros = [];
    }

    descricao() {
        return "Ingresso VIP validado na entrada";
    }

    adicionarRegistro(registro) {
        this.registros.push(registro);
    }
}

module.exports = VIP;
