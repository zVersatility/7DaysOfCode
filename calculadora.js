let operador = '';
let valorAnterior = '';
let nuevoValor = false;
const operacion = document.getElementById('operacion');
const resultado = document.getElementById('resultado');
const h1des=document.getElementById('h1des');
const container=document.getElementById('container');


function agregarNumero(numero) {
    if (nuevoValor) {
        resultado.textContent = numero;
        nuevoValor = false;
    } else {
        if (resultado.textContent === '0' && numero !== '.') {
            resultado.textContent = numero;
        } else {
            resultado.textContent += numero;
        }
    }
    actualizarOperacion();
}

function agregarOperador(op) {
    if (operador && !nuevoValor) {
        calcular();
    }
    valorAnterior = resultado.textContent;
    operador = op;
    nuevoValor = true;
    actualizarOperacion();
}

function calcular() {
    if (operador && valorAnterior !== '') {
        resultado.textContent = eval(`${valorAnterior}${operador}${resultado.textContent}`);
        operador = '';
        valorAnterior = '';
        nuevoValor = true;
    }
    actualizarOperacion();
}

function limpiar() {
    resultado.textContent = '0';
    operador = '';
    valorAnterior = '';
    nuevoValor = false;
    operacion.textContent = '';
}

function actualizarOperacion() {
    operacion.textContent = valorAnterior + ' ' + operador + ' ' + (nuevoValor ? '' : resultado.textContent);
}

function salir(){
    container.style.display='none'
    h1des.style.display='block'

    setTimeout(function(){
        window.close();
},5000 );   
}