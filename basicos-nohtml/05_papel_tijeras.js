const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const elecciones = ['piedra', 'papel', 'tijeras'];

function ejecutarJuego() {
    rl.question('Elige piedra, papel o tijeras: ', (eleccionUsuario) => {
        eleccionUsuario = eleccionUsuario.toLowerCase();
        if (!elecciones.includes(eleccionUsuario)) {
            console.log('Elección no válida. Inténtalo de nuevo.');
            ejecutarJuego();
            return;
        }

        const eleccionComputadora = elecciones[Math.floor(Math.random() * elecciones.length)];
        console.log(`La computadora eligió: ${eleccionComputadora}`);

        if (eleccionUsuario === eleccionComputadora) {
            console.log('Es un empate.');
        } else if (
            (eleccionUsuario === 'piedra' && eleccionComputadora === 'tijeras') ||
            (eleccionUsuario === 'papel' && eleccionComputadora === 'piedra') ||
            (eleccionUsuario === 'tijeras' && eleccionComputadora === 'papel')
        ) {
            console.log('¡Ganaste!');
        } else {
            console.log('Perdiste.');
        }

        rl.question('¿Quieres jugar de nuevo? (sí/no): ', (respuesta) => {
            if (respuesta.toLowerCase() === 'si' || respuesta.toLocaleLowerCase() === 's') {
                ejecutarJuego();
            } else {
                rl.close();
            }
        });
    });
}

ejecutarJuego();
