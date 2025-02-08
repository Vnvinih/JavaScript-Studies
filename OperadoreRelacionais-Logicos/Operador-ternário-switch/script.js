/* Operador ternário & switch 

let opcao = 1 

if( opcao == 1 ) {
    console.log("Saldo conta");

}else if ( opcao == 2) {
    console.log("Cartão de crédito");

}else if ( opcao == 3) {
    console.log("Descontos indevidos");

}else{
    console.log("Falar com atendente");

} */

/* Switch */ 

let opcao = 1

switch( opcao ) {
    case 1 :
        console.log("Saldo conta")
        break
    case 2 :
        console.log("Cartão de crédito");
        break
    default:
        console.log("Opção inválida");

}

/* Operador ternário */

let idade = 15

idade >= 18 ? "Maior idade" : "Menor idade"
