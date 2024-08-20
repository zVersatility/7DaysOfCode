const intentos = document.getElementById('intentos');
const cajanumero = document.getElementById('cajanumero');
const btncomprobar = document.getElementById('btncomprobar');
const resultado = document.getElementById('resultado');
const btnnuevo = document.getElementById('btnnuevo');


let NumeroGenerado = Math.floor(Math.random() * (10 - 0 + 1));
let Cont_intentos=0;


btncomprobar.addEventListener('click', function() {

    let numeroUsuario = parseInt(cajanumero.value);

    if (numeroUsuario === NumeroGenerado) {
        resultado.textContent = '¡Has acertado! El número generado fue ' + NumeroGenerado + '. Tu número de intentos fue ' + (Cont_intentos + 1);
        btncomprobar.disabled = true;
        cajanumero.disabled = true; // Deshabilita la caja de texto si se acierta
    } else {
        Cont_intentos++;
        intentos.textContent = 3 - Cont_intentos;

        if (numeroUsuario < NumeroGenerado) {
            resultado.textContent = 'Has ingresado un número menor. ¡Inténtalo de nuevo!';
        } else {
            resultado.textContent = 'Has ingresado un número mayor. ¡Inténtalo de nuevo!';
        }

        cajanumero.value = ''; // Borra el contenido de la caja de texto al hacer click en comprobar.

        if (Cont_intentos >= 3) { // Ajusta este valor según el límite de intentos.
            resultado.textContent = 'Has superado el número de intentos. El número generado fue ' + NumeroGenerado;
            btncomprobar.disabled = true;
            cajanumero.disabled = true; // Deshabilita la caja de texto al completar todos los intentos.
        }
    }

});


btnnuevo.addEventListener('click', function(){
    Cont_intentos=0;
    NumeroGenerado = Math.floor(Math.random() * (10 - 0 + 1));
    resultado.textContent = '';
    btncomprobar.disabled = false;
    cajanumero.disabled = false; // Habilita la caja de texto al hacer click en nuevo.
    cajanumero.value = ''; // Borra el contenido de la caja de texto al hacer click en nuevo.
    intentos.textContent = 3; // Reinicia los intentos a 3.

});