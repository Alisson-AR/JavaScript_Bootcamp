 
/* Criando a função Main usando como base o exercício body_mass_index */


function calCularImc (peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return ('Você está abaixo do peso!');
    } else if (imc >= 18.5 && imc < 25 ){
        return ('Seu peso é normal!');
    } else if (imc >= 25 && imc < 38) {
        return ('Você está acima do peso!');
    } else if (imc >= 30 && imc < 48) { 
        return ('Você está obeso!');
    } else {
        return ('Você possui obesidade grave!');
    } 
}

function main() {
    const peso = 65;
    const altura = 1.64;
    
    const imc = calCularImc (peso, altura);
    console.log('Seu IMC é:',imc.toFixed(2));
}

main();
