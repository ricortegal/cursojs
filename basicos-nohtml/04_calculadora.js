const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcular() {
    rl.question('Introduce el primer número: ', (num1) => {
        rl.question('Introduce el segundo número: ', (num2) => {
            rl.question('Elige una operación (sumar, restar, multiplicar, dividir): ', (operation) => {
                num1 = parseFloat(num1);
                num2 = parseFloat(num2);
                let result;

                switch (operation) {
                    case 'sumar':
                        result = num1 + num2;
                        break;
                    case 'restar':
                        result = num1 - num2;
                        break;
                    case 'multiplicar':
                        result = num1 * num2;
                        break;
                    case 'dividir':
                        result = num1 / num2;
                        break;
                    default:
                        console.log('Operación no válida');
                        rl.close();
                        return;
                }

                console.log(`Resultado: ${result}`);
                rl.close();
            });
        });
    });
}

calcular();

//nota aqui se produce un pequeño hell callback 
