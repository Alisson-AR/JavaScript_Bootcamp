/*Criar um programa que calcule o custo de combustível em uma viagem.
    Utilizar cinco variáveis, sendo elas: 
    - Valor da gasolina;
    - Valor do etanol;
    - Tipo de combustivel que está no carro;
    - Valor médio do consumo do carro;
    - Distância da viagem; 

Por fim imprimir no console o valor que será gasto em combustivel para a viagem. */

console.log('CALCULO DE GASTO DO COMBUSTIVEL:');
const vgasolina = 5.95; //valor gasolina
const vetanol = 2.85; //valor etanol
const consumo = 10; //Faz 10km por litro
const km = 500; //Kms que serão percorridos
tipoCombustivel = 'Gasolina';

if (tipoCombustivel === 'Gasolina'){
    const vlitro = ((km/consumo) * vgasolina);
    console.log("SERA NECESSARIO DESENBOLSAR R$", vlitro.toFixed(2),"\nPARA REALIZAR A VIAGEM");
} else { (tipoCombustivel === 'Etanol')
    const vlitro = ((km/consumo) * vetanol);
    console.log("SERA NECESSARIO DESENBOLSAR R$", vlitro.toFixed(2),"\nPARA REALIZAR A VIAGEM");
}


/*Observar o uso do toFixed que possibilita definir o número desejado de casas decimais
tornando o vlitro em uma string*/