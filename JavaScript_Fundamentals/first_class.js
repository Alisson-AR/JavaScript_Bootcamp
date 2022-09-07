/*Criar um programa que calcule o custo de combustível em uma viagem.
    Utilizar três variáveis, sendo elas: 
    - Valor do combustível;
    - Valor médio do consumo do carro;
    - Distância da viagem; 

Por fim imprimir no console o valor que será gasto em combustivel para a viagem. */

    console.log('CALCULO DE GASTO DO COMBUSTIVEL:');
    let gasolina = 6.98;
    let consumo = 10; //Faz 10km por litro
    let km = 460; //Kms que serão percorridos

    const vlitro = ((km/consumo) * gasolina);
     
    console.log("SERA NECESSARIO DESENBOLSAR R$", vlitro.toFixed(2), "\nPARA REALIZAR A VIAGEM");

/*Observar o uso do toFixed que possibilita definir o número desejado de casas decimais
tornando o vlitro em uma string*/

