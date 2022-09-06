/* 
    Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de
    etiqueta e a escolha da condição de pagamento.
    Faça o uso do código da tabela a seguir para ler qual a condição de pagamento escolhida e para efetuar o
    cálculo adequado.

    Código Condição de pagamento:
    1 = À vista Débito, recebe 10% de desconto;
    2 = À vista no dinheiro ou PIX, recebe 15% de desconto;
    3 = Em duas vezes, preço normal de etiqueta sem juros;
    4 = Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const produto = 100;
const metodoPag = 6;


if (metodoPag === 1) {
    desconto = (produto * 0.1);
    console.log(produto - desconto);
} else if (metodoPag === 2) {
    desconto = (produto * 0.15);
    console.log(produto - desconto); 
} else if (metodoPag === 3) {
    console.log(produto);
} else if (metodoPag === 4) {
    juros = (produto * 0.1);
    console.log(produto + juros);
} else if (metodoPag < 1 || metodoPag > 4) {
    console.log('Código de método de pagamento inválido!');
}
