/*Paradigma -> exemplo ou padrão a ser seguido, não se trata
de uma linguagem, mas a forma como você soluciona problemas
usando uma linguagem de programação
*/

// JavaScript e multi paradigma

//Procedural
//funções que manipulam dados
function verificarDisponibilidade(quartos, ocupados) {
  let res = quartos - ocupados;
  console.log("Disponiveis: " + res);
}
/*
let quartos = 20;
let ocupados = 5;
verificarDisponibilidade(quartos, ocupados);
*/

//Orientação a objetos

const hotel = {
  quartos: 20,
  ocupados: 10,

  verificarDisponibilidade: function () {
    let res = this.quartos - this.ocupados;
    console.log("Disponiveis: " + res);
  },
};

hotel.ocupados = 5;
hotel.verificarDisponibilidade();
