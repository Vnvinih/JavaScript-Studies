// Herança - Reutilização e manutenção
// Classe: Cão, Passaro

class Animal {
  // SuperClasse
  constructor() {
    this.cor = "";
    this.tamanho = 0;
    this.peso = 0;
  }
  correr() {
    console.log("correr");
    console.log("como");
    console.log("um");
    // 30 linhas
  }

  dormir() {
    console.log("dormir");
  }
}

class Cao extends Animal {
  // SubClasse
  constructor() {
    super();
    this.tamanhoOrelha = 0;
  }
  correr() {
    super.correr();
    console.log("cao");
    // 5 linhas
  }

  latir() {
    console.log("latir");
  }
}

class Passaro extends Animal {
  // SubClasse
  voar() {
    console.log("voar");
  }
}

class Papagaio extends Passaro {
  falar() {
    console.log("falar");
  }
}

// Instancia
const cao = new Cao();
// const passaro = new Passaro();
// const papagaio = new Papagaio();

cao.correr();

/*
papagaio.correr(); // Animal
papagaio.voar();
papagaio.falar();
*/

// cao.correr();
// cao.latir();
// passaro.voar();
// passaro.correr();
//passaro.cor = "Amarelo";
//console.log(passaro.cor);

/*
cao.correr();
cao.latir();
passaro.correr();
passaro.voar();
*/
