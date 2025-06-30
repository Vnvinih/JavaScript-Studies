// Funçôes construtoras
const Hotel = function () {
  this.nome = "Hotel Beach";
  this.quantidadeSuites = 30;
  this.suitesOcupadas = 25;

  this.reservar = function () {
    this.suitesOcupadas++;
    console.log("Ocupadas: " + this.suitesOcupadas);
  };
};

const hotel = new Hotel();
hotel.reservar();
