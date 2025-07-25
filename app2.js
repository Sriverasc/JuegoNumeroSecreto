const holaMundo = () => {
    console.log("Hola Mundo");
}

const holaNombre = (nombre) => {
    console.log(`Hola ${nombre}`);
}

const dobleNumero = (numero) => {
    return numero * 2;
}

const promedio = (numero1, numero2, numero3) => {
    return (numero1 + numero2 + numero3) / 3;
}

const numeroMasAlto = (numero1, numero2) => {
    return Math.max(numero1, numero2);
}

const elevarAlCuadrado = (numero) => {
    return numero ** 2;
}

holaMundo();
holaNombre("Juan");
console.log(`El doble de ${5} es ${dobleNumero(5)}`);
console.log(`El promedio de 5, 10 y 15 es ${promedio(5, 10, 15)}`);
console.log(`El número más alto entre 5 y 10 es ${numeroMasAlto(5, 10)}`);
console.log(`El cuadrado de 5 es ${elevarAlCuadrado(5)}`);