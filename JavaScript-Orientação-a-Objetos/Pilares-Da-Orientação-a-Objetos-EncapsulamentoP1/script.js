// Pilar - Encapsulamento
/*
class Carro {
  constructor() {
    this.modelo = "Gol";
    this.cor = "Vermelho";
  }
  frear() {
    console.log("Parar o carro");
  }
}

const carro = new Carro();
carro.frear();
*/

// Encapsulamento, controle de acesso e getters e setters
class ContaBancaria {
  constructor() {
    this._numeroConta = 0;
    this._saldo = 0;
  }

  sacar(valorSaque) {
    this._saldo = this._saldo - valorSaque;
  }

  depositar(valorDeposito) {
    this._saldo = this._saldo + valorDeposito;
  }

  get saldo() {
    return this._saldo;
  }
  set saldo(newSaldo) {
    if (newSaldo > 0) {
      this._saldo = newSaldo;
    }
  }

  get numeroConta() {
    return "Número: " + this._numeroConta;
  }
  set numeroConta(numero) {
    if (numero > 0) {
      this._numeroConta = numero;
    }
  }
}

const conta = new ContaBancaria();
//conta.numeroConta = 60;
//conta.numeroConta = 60;
conta.saldo = 500; //segura
conta.sacar(50); //450
conta.depositar(100); //550

console.log(conta.saldo);
