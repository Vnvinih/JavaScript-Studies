var hora = new Date().getHours();
var ola;

if (hora < 12) {
  ola = "Bom dia!";
} else if (hora < 18) {
  ola = "Boa tarde!";
} else {
  ola = "Boa noite!";
}

document.getElementById("mensagem").innerHTML = ola;
