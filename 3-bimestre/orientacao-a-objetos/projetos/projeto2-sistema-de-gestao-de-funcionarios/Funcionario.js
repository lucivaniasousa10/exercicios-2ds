class Funcionario {
  static quantidadeFuncionarios = 0;

  #salario;

  constructor(nome, cargo, salario) {
    this.nome = nome;
    this.cargo = cargo;
    this.#salario = salario;

    Funcionario.quantidadeFuncionarios++;
  }

  get salario() {
    return this.#salario;
  }

  alterarSalario(novoSalario) {
    if (novoSalario < 0) {
      return false;
    }

    this.#salario = novoSalario;
    return true;
  }

  apresentar() {
    return `${this.nome} - ${this.cargo}`;
  }

  static getQuantidadeFuncionarios() {
    return Funcionario.quantidadeFuncionarios;
  }
}

module.exports = Funcionario;
