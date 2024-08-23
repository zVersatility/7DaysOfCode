function calcular(operacion) {
            
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const h1des=document.getElementById('h1des');
    const idcalculadora=document.getElementById('idcalculadora');
    let resultado;

    if (isNaN(numero1) || isNaN(numero2)) {
        alert('Por favor, ingrese ambos números.');
        return;
    }

    switch (operacion) {
        case 'suma':
            resultado = numero1 + numero2;
            break;
        case 'resta':
            resultado = numero1 - numero2;
            break;
        case 'multiplicacion':
            resultado = numero1 * numero2;
            break;
        case 'division':
            if (numero2 === 0) {
                alert('No se puede dividir por cero.');
                return;
            }
            resultado = numero1 / numero2;
            break;
    }
    document.getElementById('resultado').value = resultado;
    document.getElementById('numero1').value = "";
    document.getElementById('numero2').value = "";
}

function salir() {

    idcalculadora.style.display='none';
    h1des.style.display='block';
    
    setTimeout(function(){
        window.close();
},5000 );           

}