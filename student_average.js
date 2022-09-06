/*
    Fazer um algoritmo que dado as 3 notas tiradas po rum aluna, calucule e imprima a sua media 
    e a sua classificação conforme a tabela abaixo:

    Média = (nota1 + nota2 + nota3) / 3;
    
    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7 aprovado:
*/

const nota1 = 9;
const nota2 = 7;
const nota3 = 5;
const media = (nota1 + nota2 + nota3) / 3;



if (media < 5) {
    console.log('O aluno foi reprovado');
} else if (media > 5 && media < 7) {
    console.log('O aluno está de recuperação');
} else {
    console.log('O aluno foi aprovado');
}
