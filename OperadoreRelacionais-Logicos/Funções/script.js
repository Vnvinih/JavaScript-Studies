/*
1) Desligar a torneira;
2) Pedir copo de água;
3) Ir ao mercado comprar arroz;
4) Calcular média;
*/

//1) Desligar a torneira;
function desligarTorneira() {
    console.log("desligar torneira")
}

desligarTorneira()

//2) Pedir copo de água;
function pedirCopoAgua() {
    return "Copo agua"
}

let retorno = pedirCopoAgua()
console.log(retorno)

//3) Ir ao mercado comprar arroz;
function irMercadoComprarArroz(dinheiro) {
    return "arroz"
    
}

//4) Calcular média;
function calcularMedia(nota1, nota2) {

    let totalNotas = nota1 + nota2
    let media = totalNotas / 2

    return media
    
}

let media = calcularMedia(8,8)
console.log(media)


let retorno = irMercadoComprarArroz(10)
console.log(retorno)
