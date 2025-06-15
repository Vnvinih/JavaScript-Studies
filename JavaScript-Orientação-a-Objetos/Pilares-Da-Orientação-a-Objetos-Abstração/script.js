// Pilar 1 - Abstração
/* 
Modelo, Entidade, Identidade,
Caracteristicas e Ações
*/

/*class Carro {
  constructor() {
    this.marca = "Volkswagen";
    this.modelo = "Gol";
    this.cor = "prata";
    this.placa = "EMJ-2565";
  }
  ligar() {}
}

const carro = new Carro();
carro.modelo = "Golf";
console.log(carro.modelo);

const carro2 = new Carro();
console.log(carro2.modelo);
*/

// Loja Virtual
class Produto {
  constructor() {
    //Roupas
    this.tamanho = "M";
    this.cor = "Vermelho";
    this.preço = "45,90";

    //Eletronicos
    this.altura = "50cm";
    this.largura = "30cm";
  }
}
