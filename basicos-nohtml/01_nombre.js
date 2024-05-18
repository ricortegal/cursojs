const readLine = require('readline')

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout});

rl.question("dime tu nombre: ",
    (nombre) => {
        console.log(`Hola ${nombre}`);
        rl.close();
    });