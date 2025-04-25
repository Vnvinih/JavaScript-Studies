let nomes = [
  "vinicius",
  "grazielly",
  "Jamilton",
  "josé",
  "maria",
  "joão",
  "guilherme",
  "vinicius",
];

function pesquisarNomes() {
  let nomePesquisa = document.getElementById("campoNome").value;
  let itensLista = "";
  for (indice in nomes) {
    let nome = nomes[indice];
    if (nomePesquisa == nome) {
      itensLista += `
        <li class="list-group-item">
            ${nome}
        </li>`;
    }
  }
  document.getElementById("lista").innerHTML = itensLista;
}

function carregarNomes() {
  let itensLista = "";
  for (indice in nomes) {
    let nome = nomes[indice];
    itensLista += `
        <li class="list-group-item">
            ${nome}
        </li>`;

    //alert(itensLista);
  }
  document.getElementById("lista").innerHTML = itensLista;
}
