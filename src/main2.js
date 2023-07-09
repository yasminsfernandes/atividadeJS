var numeros = [1.2,3.5, 5.5, 8.6, 10.5];

function Quadrado(numero) {
    return numero * numero;
}
function RaizQuadrada(numero) {
    return Math.sqrt(numero);
  }
function ParteInteira(numero) {
    return Math.floor(numero);
  }
function arredondarParaBaixo(numero) {
    return Math.floor(numero);
  }
function arredondarParaCima(numero) {
    return Math.ceil(numero);
  }
for (var i = 0; i < numeros.length; i++) {
    var numero = numeros[i];
    console.log("Quadrado: " + Quadrado(numero)); 
    console.log("Raiz quadrada: " + RaizQuadrada(numero)); 
    console.log("Parte inteira: " + ParteInteira(numero)); 
    console.log("Arredondado para baixo: " + arredondarParaBaixo(numero)); 
    console.log("Arredondado para cima: " + arredondarParaCima(numero));
    console.log("_____________________");
}