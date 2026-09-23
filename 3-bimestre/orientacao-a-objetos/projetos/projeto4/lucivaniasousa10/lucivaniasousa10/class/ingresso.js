class Ingresso {
    #nomeDoPortador;
    #codigoDoIngresso;

    constructor(nomeDoPortador, codigoDoIngresso) {
        this.#nomeDoPortador = nomeDoPortador;
        this.#codigoDoIngresso = codigoDoIngresso;
    }

    get nomeDoPortador() {
        return this.#nomeDoPortador;
    }

    get codigoDoIngresso() {
        return this.#codigoDoIngresso;
    }

    descricao() {
        return "Ingresso emitido pelo sistema";
    }
}

module.exports = Ingresso;