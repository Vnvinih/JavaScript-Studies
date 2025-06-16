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
  }

  dormir() {
    console.log("dormir");
  }
}

class Cao extends Animal {
  // SubClasse
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

// Instancia
const cao = new Cao();
const passaro = new Passaro();

// cao.correr();
// cao.latir();
passaro.voar();
passaro.correr();
//passaro.cor = "Amarelo";
//console.log(passaro.cor);

/*
cao.correr();
cao.latir();
passaro.correr();
passaro.voar();
*/
