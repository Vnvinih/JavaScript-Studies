/*
    while(condição){
        Executa enquanto a condição é verdadeira
    }
*/

let postagens = [
  "Hoje passeando por Recife",
  "Passeando pelo antigo",
  "Hoje fiz um curso de back-end",
  "Estudando Java!",
  "Estudando Python",
];

// length: estrutura que conta os itens dentro de um array.

const totalPostages = postagens.length;
console.log(totalPostages);

let numero = 0;
// 0 1 2 3
while (numero < totalPostages) {
  console.log("IMAGEM " + numero);
  console.log(postagens[numero]);
  console.log("-----");
  numero = numero + 1;
}

/*while (numero <= 4) {
  console.log("pedaço pizza " + numero);
  numero = numero + 1;
}*/
