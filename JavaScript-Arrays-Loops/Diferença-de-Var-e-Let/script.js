// Var vs let]
/*
var -> Escopo global, função
let -> Escopo global, função, bloco
*/

//var numero = 10; // Global
/*{
  var numero = 5;
  console.log(numero);
}*/

function calcular() {
  var numero = 12;
}

//calcular();
//numero = 20;
console.log(numero);
