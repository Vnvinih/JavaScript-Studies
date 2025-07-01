// Funçôes construtoras - Encapsulamento
const Hotel = function () {
  this.nome = "Hotel Beach";
  this.quantidadeSuites = 30;
  let suitesOcupadas = 25;

  this.reservar = function () {
    if (suitesOcupadas < this.quantidadeSuites) {
      suitesOcupadas++;
      console.log("Ocupadas: " + suitesOcupadas);
    } else {
      console.log("Estamos lotados");
    }
  };
  this.mostrarDisponiveis = function () {
    return this.quantidadeSuites - suitesOcupadas;
  };

  this.cancelarReserva = function () {
    if (suitesOcupadas > 0) {
      suitesOcupadas--;
      console.log("Reserva cancelada. Ocupadas: " + suitesOcupadas);
    } else {
      console.log("Nenhuma suíte está ocupada.");
    }
  };
};

const hotel = new Hotel();
hotel.reservar();
hotel.reservar();
hotel.cancelarReserva();
console.log("Suítes disponíveis:", hotel.mostrarDisponiveis());
