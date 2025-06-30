// Tratamento de erros com Try Catch

function contarQauantidadedeLetras(produto) {
  try {
    console.log(produto.nome.length);
    console.log("teste");
  } catch (erro) {
    tratarErro(erro);
    //console.log("Erro ao processar");
  } /*finally {
    console.log("finally");
  }*/
}

function tratarErro(erro) {
  throw new Error("Còdigo erro: 164");
}

const produto = {
  nme: "Notebook",
  preco: 12090,
};

contarQauantidadedeLetras(produto);
