/* Introdução a funções e calculo de área de quadrado.



1- Retornar nomes:                     */
 
 function whatIsYourName(name) {
    console.log('My name is: ' + name);
}

whatIsYourName('Jonas');
whatIsYourName('Luis');



/* 2- Exercício área do quadrado:     */

function quadrado(lado) {
    return lado * lado;
}

const areaQuadrado = quadrado(5);
console.log (areaQuadrado); 



/* 3- Exercício de calculo de juros:     */

function incrementaJuros (valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros /100)*valor;
    return valor + percentualJuros;
}
console.log (incrementaJuros(10,100));