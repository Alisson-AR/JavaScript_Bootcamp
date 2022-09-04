//Verificar se o numero é par

const num = 360;

const numeroPar = (num % 2) === 0;

    if (num === 0) { 
        console.log("Este número é inválido");

    }else if (numeroPar) {
        console.log("Este número é par!"); 
    }
    else {
        console.log("Este número é impar!"); 
    }
    