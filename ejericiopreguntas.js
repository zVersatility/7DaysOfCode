const form = document.getElementById('miFormulario');
const otroLengDiv = document.getElementById('divOtro');


const lengSelect = document.getElementById('leng');

// Agregar un listener para cuando cambie la selección del select
lengSelect.addEventListener('change', function() {
    const lengTexto = lengSelect.options[lengSelect.selectedIndex].text;

    // Mostrar el campo de texto solo si "Otro" es seleccionado
    if (lengTexto === "Otro") {
        otroLengDiv.style.display = 'block';
    } else {
        otroLengDiv.style.display = 'none';
    }
});

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const edad = document.getElementById('edad').value;
    const otroLeng = document.getElementById('otroLeng').value;
    const lengTexto = lengSelect.options[lengSelect.selectedIndex].text;

    let div1 = document.getElementById('div1');
    let div2 = document.getElementById('div2');
    let nombreSpan = document.getElementById('nameResult');
    let edadSpan = document.getElementById('ageResult');
    let lengSpan = document.getElementById('langResult');
    let CadenaSpan = document.getElementById('cadenatotal');
    let Pregunta = document.getElementById('labelpregunta');
    
    let lenguaje = lengTexto === "Otro" ? otroLeng : lengTexto;

    // Solo mostrar los resultados si se ha ingresado un idioma válido
    if (lenguaje) {
        div1.style.display = 'block';
        nombreSpan.innerText = name;
        edadSpan.innerText = edad;
        lengSpan.innerText = lenguaje;
        CadenaSpan.innerText = 'Hola ' + name + ', tienes ' + edad + ' años y ya estás aprendiendo ' + lenguaje + '!';
        Pregunta.innerText = '¿Te gusta estudiar ' + lenguaje + '? Responde con el número 1 para SÍ o 2 para NO.';
        div2.style.display = 'block';
    } else {
        alert('Por favor ingresa un idioma.');
    }
});

function btnRespuesta() {
    let inputpregunta = document.getElementById('mensajerespuesta');
    let respuestaNum = document.getElementById('respuestaPregunta');
    let respuesta = parseInt(respuestaNum.value);
    if (respuesta === 1) {
        inputpregunta.innerText = '¡Muy bien! Sigue estudiando y tendrás mucho éxito.';
    } else {
        inputpregunta.innerText = 'Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?';
    }
}
