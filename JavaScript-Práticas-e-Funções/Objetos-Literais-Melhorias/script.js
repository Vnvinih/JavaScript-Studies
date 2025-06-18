// Objetos literais - melhorias

let nome = "Notebook";
let preco = "1200";

/*
const produto = {
  nome,
  preco,
  exibirProduto() {
    console.log(`${this.nome}, ${this.preco}, ${this.categoria}`);
  },
};
*/

class Produto {
  constructor() {
    this.nome = "Notebook";
    this.preco = 1200;
  }
}

const produto = new Produto();

const pro = produto;
pro.preco = 2000;
produto.preco = 3000

console.log(pro.preco);

/*
produto.categoria = "Eletrônicos";
produto.exibirPreco = function () {
  console.log(`Preço: ${this.preco}`);
};

produto.nome = "Notebook";

produto.exibirPreco();
*/
// console.log(produto.categoria);
/*
produto.exibirProduto();
console.log(produto.nome);
*/
