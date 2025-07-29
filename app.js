let intentos = 0, numerosGenerados = [];

const agregartextoElemento = (elemento, texto) => {
    document.querySelector(elemento).innerHTML = texto;
}

const generarNumeroSecreto = () => {
    if (numerosGenerados.length >= 10) {
        agregartextoElemento('.texto__parrafo', 'Todos los números ya han sido generados.');
        document.querySelector('.container__boton').disabled = true;
        document.querySelector('.container__input').disabled = true;
        return null;
    }
    
    const numero = Math.floor(Math.random() * 10) + 1;

    if (numerosGenerados.includes(numero)) return generarNumeroSecreto();

    numerosGenerados.push(numero);
    return numero;
}

const btnIntentarAction = () => {
    const input = Number(document.querySelector('.container__input').value);

    if (input === numeroSecreto) {
        document.querySelector('#reiniciar').disabled = false;
        agregartextoElemento('.texto__parrafo', `¡Felicidades! Adivinaste el número secreto: ${numeroSecreto}`);
    } else if (intentos < 2) {
        intentos++;
        let pista = (input < numeroSecreto) ? 'mayor' : 'menor';
        agregartextoElemento('.texto__parrafo', `Incorrecto. El número secreto es ${pista} que ${input}. Intentos restantes: ${3 - intentos}`);
    } else {
        document.querySelector('#reiniciar').disabled = false;
        agregartextoElemento('.texto__parrafo', `Lo siento, has agotado tus intentos. El número secreto era: ${numeroSecreto}`);
    }

    document.querySelector('.container__input').value = '';
}

const btnReiniciarAction = () => {
    intentos = 0;
    document.querySelector('#reiniciar').disabled = true;
    agregartextoElemento('.texto__parrafo', 'Adivina un número entre 1 y 10');
    numeroSecreto = generarNumeroSecreto();
}

agregartextoElemento('h1', 'Juego del número secreto');
agregartextoElemento('.texto__parrafo', 'Adivina un número entre 1 y 10');
let numeroSecreto = generarNumeroSecreto();