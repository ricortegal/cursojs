const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    rl.question('Adivina el número entre 1 y 100: ', (respuesta) => {
        attempts++;
        respuesta = parseInt(respuesta, 10);

        if (respuesta == randomNumber) {
            console.log(`¡Correcto! Lo adivinaste en ${attempts} intentos.`);
            rl.close();
        } else if (respuesta > randomNumber) {
            console.log('Demasiado alto. Inténtalo de nuevo.');
            checkGuess();
        } else {
            console.log('Demasiado bajo. Inténtalo de nuevo.');
            checkGuess();
        }
    });
}

checkGuess();
