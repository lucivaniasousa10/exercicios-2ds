const VIP = require("./Vip");
const Pista = require("./Pista");
const Camarote = require("./Camarote");

class IngressoFactory {
    static criar(tipo, nomeDoPortador, codigoDoIngresso) {
        switch (tipo.toLowerCase()) {
            case "vip":
                return new VIP(nomeDoPortador, codigoDoIngresso);

            case "pista":
                return new Pista(nomeDoPortador, codigoDoIngresso);

            case "camarote":
                return new Camarote(nomeDoPortador, codigoDoIngresso);

            default:
                throw new Error("Tipo de ingresso inválido");
        }
    }
}

module.exports = IngressoFactory;