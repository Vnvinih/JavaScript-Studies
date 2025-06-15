//Notação Literal
/*
const hotel = {
  quartos: 20,
  ocupados: 10,
  piscinas: 2,

  verificarDisponibilidade: function () {
    let res = this.quartos - this.ocupados;
    return "Disponiveis: " + res;
  },
};
hotel.quartos = 25;
hotel["quartos"] = 30;
delete hotel.piscinas;
console.log(hotel.piscinas);
*/

//Notação de construtor (OBJETO EM BRANCO)
/*const hotel = new Object();
hotel.quartos = 20;
hotel.ocupados = 10;
hotel.verificarDisponibilidade = function () {
  let res = this.quartos - this.ocupados;
  return "Disponiveis: " + res;
};
//console.log(hotel.quartos);
*/
//Criando classes (mais simples)

class Hotel {
  constructor() {
    this.quartos = 20;
    this.ocupados = 10;
  }

  verificarDisponibilidade() {
    let res = this.quartos - this.ocupados;
    return "Disponiveis: " + res;
  }
}

const hotel = new Hotel();
hotel.verificarDisponibilidade();
//console.log(hotel.quartos);
