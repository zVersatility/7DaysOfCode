const categorias=document.getElementById('categorias');
const spanCategoria=document.getElementById('spanCategoria');
const alimento=document.getElementById('alimento');
const btnagregar=document.getElementById('btnagregar');
const frutas=document.getElementById('frutas');
const vegetales=document.getElementById('vegetales');
const carnes=document.getElementById('carnes');
const lacteos=document.getElementById('lacteos');
const bebidas=document.getElementById('bebidas');
const congelados=document.getElementById('congelados');
const dulces=document.getElementById('dulces');
const btneliminar=document.getElementById('btneliminar');
const categorias6=document.getElementById('categorias6');
const spanCategoria6=document.getElementById('spanCategoria6');
const div_inputElimina=document.getElementById('div_inputElimina');
const alimento6=document.getElementById('alimento6');
const btneliminar6=document.getElementById('btneliminar6');
const seccion_ejercicio06=document.getElementById('seccion_ejercicio06');
const frutaslistaeliminar=document.getElementById('frutas-lista');
const h1ejercicio05=document.getElementById('h1ejercicio05');
const div_select=document.getElementById('div_select');
const div_btn=document.getElementById('div_btn');
const div_btns=document.getElementById('div_btns');
const div_resultado=document.getElementById('div_resultado');
const btnvolver=document.getElementById('btnvolver');



let ArrayFrutas = [];
let ArrayVegetales=[];
let ArrayCarnes=[];
let ArrayLacteos=[];
let ArrayBebidas=[];
let ArrayCongelados=[];
let ArrayDulces=[];
let categoria = '';

// Verifica si el elemento 'categorias' existe antes de añadir el event listener
if (categorias) {
    categorias.addEventListener('change', function(){
        categoria = categorias.options[categorias.selectedIndex].text;
        spanCategoria.textContent = categoria;
    });
}

// Verifica si el elemento 'btnagregar' existe antes de añadir el event listener
if (btnagregar) {
    btnagregar.addEventListener('click', function(){
        let nombre = alimento.value;
        let categoriaActual = categorias.options[categorias.selectedIndex].text;

        if (categoriaActual != '' && nombre !='') {
            btneliminar.style.display = 'block';

            switch(categoriaActual) {
                case 'Frutas':
                    ArrayFrutas.push(nombre);
                    frutas.textContent = 'Frutas : ' + (ArrayFrutas.length > 0 ? ArrayFrutas.join(', ') : ' No hay alimentos en esta categoría');
                    break;
                case 'Vegetales':
                    ArrayVegetales.push(nombre);
                    vegetales.textContent = 'Vegetales : ' + (ArrayVegetales.length > 0 ? ArrayVegetales.join(', ') : ' No hay alimentos en esta categoría');
                    break;
                case 'Carnes':
                    ArrayCarnes.push(nombre);
                    carnes.textContent = 'Carnes : ' + (ArrayCarnes.length > 0 ? ArrayCarnes.join(', ') : ' No hay alimentos en esta categoría');
                    break;
                case 'Lacteos':
                    ArrayLacteos.push(nombre);
                    lacteos.textContent = 'Lacteos : ' + (ArrayLacteos.length > 0 ? ArrayLacteos.join(', ') : ' No hay alimentos en esta categoría');
                    break;
                case 'Bebidas':
                    ArrayBebidas.push(nombre);
                    bebidas.textContent = 'Bebidas : ' + (ArrayBebidas.length > 0 ? ArrayBebidas.join(', ') : ' No hay alimentos en esta categoría');
                    break;
                case 'Congelados':
                    ArrayCongelados.push(nombre);
                    congelados.textContent = 'Congelados : ' + (ArrayCongelados.length > 0 ? ArrayCongelados.join(', ') : ' No hay alimentos en esta categoría');
                    break;
                case 'Dulces':
                    ArrayDulces.push(nombre);
                    dulces.textContent = 'Dulces : ' + (ArrayDulces.length > 0 ? ArrayDulces.join(', ') : ' No hay alimentos en esta categoría');
                    break;
            }
        } else alert('Por favor seleccione una categoria y ingrese un alimento');
        alimento.value = '';
        alimento.focus();
    });
}

// Verifica si el elemento 'btneliminar' existe antes de añadir el event listener

if (btneliminar) {
    btneliminar.addEventListener('click', function(){
        div_select.style.display='none';
        div_btns.style.display='none';
        div_resultado.style.display='none';
        div_btn.style.display='none';
        h1ejercicio05.style.display='none';
        seccion_ejercicio06.style.display='block';  
        btneliminar.style.display = 'none';
        btnvolver.style.display='block';
        frutaslistaeliminar.innerHTML='';
        categorias6.value='';
        spanCategoria6.textContent='';



    });
}

//Mostrar lista ejercicio05
function ListaEjercicio05(){
    
        frutas.textContent = ArrayFrutas.length > 0 ? 'Frutas: ' + ArrayFrutas.join(', ') : '';
        vegetales.textContent = ArrayVegetales.length > 0 ? 'Vegetales: ' + ArrayVegetales.join(', ') : '';
        carnes.textContent = ArrayCarnes.length > 0 ? 'Carnes: ' + ArrayCarnes.join(', ') : '';
        lacteos.textContent = ArrayLacteos.length > 0 ? 'Lacteos: ' + ArrayLacteos.join(', ') : '';
        bebidas.textContent = ArrayBebidas.length > 0 ? 'Bebidas: ' + ArrayBebidas.join(', ') : '';
        congelados.textContent = ArrayCongelados.length > 0 ? 'Congelados: ' + ArrayCongelados.join(', ') : '';
        dulces.textContent = ArrayDulces.length > 0 ? 'Dulces: ' + ArrayDulces.join(', ') : '';
        alimento.value = '';
    
    

}



// Código para el segundo select y sus botones

if (categorias6) {
    categorias6.addEventListener('change', function(){
        div_inputElimina.style.display = 'block';
        let categoria6 = categorias6.options[categorias6.selectedIndex].text;
        spanCategoria6.textContent = categoria6;
        //frutaslistaeliminar.innerHTML = ''; // Vacía la lista
        switch(categoria6){
            case 'Frutas':
                frutaslistaeliminar.innerHTML = ''; // Limpia la lista antes de agregar nuevos elementos
                if (ArrayFrutas.length === 0) {
                    frutaslistaeliminar.textContent = 'No hay alimentos en esta categoría';
                    elementos06no();
                } else {
                    elementos06si();
                    ArrayFrutas.forEach(function(fruta, index){
                        let li = document.createElement('li');
                        li.textContent = (index + 1) + '. ' + fruta;
                        frutaslistaeliminar.appendChild(li);
                    });
                }
                break;
        
            case 'Vegetales':
                frutaslistaeliminar.innerHTML = ''; 
                if (ArrayVegetales.length === 0) {
                    frutaslistaeliminar.textContent = 'No hay alimentos en esta categoría';
                    elementos06no();
                } else {
                    elementos06si();
                    ArrayVegetales.forEach(function(vegetal, index){
                        let li = document.createElement('li');
                        li.textContent = (index + 1) + '. ' + vegetal;
                        frutaslistaeliminar.appendChild(li);
                    });
                }
                break;
        
            case 'Carnes':
                frutaslistaeliminar.innerHTML = ''; 
                if (ArrayCarnes.length === 0) {
                    frutaslistaeliminar.textContent = 'No hay alimentos en esta categoría';
                    elementos06no();
                } else {
                    elementos06si();
                    ArrayCarnes.forEach(function(carne, index){
                        let li = document.createElement('li');
                        li.textContent = (index + 1) + '. ' + carne;
                        frutaslistaeliminar.appendChild(li);
                    });
                }
                break;
        
            case 'Lacteos':
                frutaslistaeliminar.innerHTML = ''; 
                if (ArrayLacteos.length === 0) {
                    frutaslistaeliminar.textContent = 'No hay alimentos en esta categoría';
                    elementos06no();
                } else {
                    elementos06si();
                    ArrayLacteos.forEach(function(lacteo, index){
                        let li = document.createElement('li');
                        li.textContent = (index + 1) + '. ' + lacteo;
                        frutaslistaeliminar.appendChild(li);
                    });
                }
                break;
        
            case 'Bebidas':
                frutaslistaeliminar.innerHTML = ''; 
                if (ArrayBebidas.length === 0) {
                    frutaslistaeliminar.textContent = 'No hay alimentos en esta categoría';
                    elementos06no();
                } else {
                    elementos06si();
                    ArrayBebidas.forEach(function(bebida, index){
                        let li = document.createElement('li');
                        li.textContent = (index + 1) + '. ' + bebida;
                        frutaslistaeliminar.appendChild(li);
                    });
                }
                break;
        
            case 'Congelados':
                frutaslistaeliminar.innerHTML = ''; 
                if (ArrayCongelados.length === 0) {
                    frutaslistaeliminar.textContent = 'No hay alimentos en esta categoría';
                    elementos06no();
                } else {
                    elementos06si();
                    ArrayCongelados.forEach(function(congelado, index){
                        let li = document.createElement('li');
                        li.textContent = (index + 1) + '. ' + congelado;
                        frutaslistaeliminar.appendChild(li);
                    });
                }
                break;
        
            case 'Dulces':
                frutaslistaeliminar.innerHTML = ''; 
                if (ArrayDulces.length === 0) {
                    frutaslistaeliminar.textContent = 'No hay alimentos en esta categoría';
                    elementos06no();
                } else {
                    elementos06si();
                    ArrayDulces.forEach(function(dulce, index){
                        let li = document.createElement('li');
                        li.textContent = (index + 1) + '. ' + dulce;
                        frutaslistaeliminar.appendChild(li);
                    });
                }
                break;
        }
        alimento6.value = '';
        alimento6.focus();
    });
}

function elementos06si(){
    div_inputElimina.style.display='block';
    btneliminar6.style.display='block';
}

function elementos06no(){
    div_inputElimina.style.display='none';
    btneliminar6.style.display='none';
}


if (btneliminar6) {
    btneliminar6.addEventListener('click', function(){
        let nombre6 = alimento6.value.trim();
        let categoriaActual6 = categorias6.options[categorias6.selectedIndex].text;
        
        if(nombre6 === ''){
            alert('Por favor, ingrese un alimento.');
            return;
        } else {
            let arrayActual;
            switch(categoriaActual6){
                case 'Frutas':
                    arrayActual = ArrayFrutas;
                    break;
                case 'Vegetales':
                    arrayActual = ArrayVegetales;
                    break;
                case 'Carnes':
                    arrayActual = ArrayCarnes;
                    break;
                case 'Lacteos':
                    arrayActual = ArrayLacteos;
                    break;
                case 'Bebidas':
                    arrayActual = ArrayBebidas;
                    break;
                case 'Congelados':
                    arrayActual = ArrayCongelados;
                    break;
                case 'Dulces':
                    arrayActual = ArrayDulces;
                    break;
            }

            if (!arrayActual.includes(nombre6)) {
                alert(`El alimento "${nombre6}" no existe en la categoría "${categoriaActual6}".`);
                alimento6.value='';
            } else {
                switch(categoriaActual6){
                    case 'Frutas':
                        ArrayFrutas = ArrayFrutas.filter(fruta => fruta !== nombre6);
                        break;
                    case 'Vegetales':
                        ArrayVegetales = ArrayVegetales.filter(vegetal => vegetal !== nombre6);
                        break;
                    case 'Carnes':
                        ArrayCarnes = ArrayCarnes.filter(carne => carne !== nombre6);
                        break;
                    case 'Lacteos':
                        ArrayLacteos = ArrayLacteos.filter(lacteo => lacteo !== nombre6);
                        break;
                    case 'Bebidas':
                        ArrayBebidas = ArrayBebidas.filter(bebida => bebida !== nombre6);
                        break;
                    case 'Congelados':
                        ArrayCongelados = ArrayCongelados.filter(congelado => congelado !== nombre6);
                        break;
                    case 'Dulces':
                        ArrayDulces = ArrayDulces.filter(dulce => dulce !== nombre6);
                        break;
                }
                alimento6.value = '';
                listarLista(categoriaActual6);
            }
        }
    });            
}


function listarLista(Paracategoria){

    switch(Paracategoria){
        case 'Frutas':
            frutaslistaeliminar.innerHTML = '';
            ArrayFrutas.forEach(function(fruta, index){
                let li = document.createElement('li');
                li.textContent = (index + 1) + '.'+ fruta;
                frutaslistaeliminar.appendChild(li);
            });
            break;
        case 'Vegetales':
            frutaslistaeliminar.innerHTML = '';
            ArrayVegetales.forEach(function(vegetal, index){
                let li = document.createElement('li');
                li.textContent = (index + 1) + '. '+ vegetal;
                frutaslistaeliminar.appendChild(li);
            });
            break;
            
        case 'Carnes':
            frutaslistaeliminar.innerHTML = '';
            ArrayCarnes.forEach(function(carne, index){
                let li = document.createElement('li');
                li.textContent = (index + 1) + '. '+ carne;
                frutaslistaeliminar.appendChild(li);
            });
            break;
            
        case 'Lacteos':
            frutaslistaeliminar.innerHTML = '';
            ArrayLacteos.forEach(function(lacteo, index){
                let li = document.createElement('li');
                li.textContent = (index + 1) + '. '+ lacteo;
                frutaslistaeliminar.appendChild(li);
            });
            break;
            
        case 'Bebidas':
            frutaslistaeliminar.innerHTML = '';
            ArrayBebidas.forEach(function(bebida, index){
                let li = document.createElement('li');
                li.textContent = (index + 1) + '. '+ bebida;
                frutaslistaeliminar.appendChild(li);
            });
            break;
            
        case 'Congelados':
            frutaslistaeliminar.innerHTML = '';
            ArrayCongelados.forEach(function(congelado, index){
                let li = document.createElement('li');
                li.textContent = (index + 1) + '. '+ congelado;
                frutaslistaeliminar.appendChild(li);
            });
            break;
            
        case 'Dulces':
            frutaslistaeliminar.innerHTML = '';
            ArrayDulces.forEach(function(dulce, index){
                let li = document.createElement('li');
                li.textContent = (index + 1) + '. '+ dulce;
                frutaslistaeliminar.appendChild(li);
            });
            break;
    }
    

}

function verificarElementos() {
    if (
        ArrayFrutas.length > 0 ||
        ArrayVegetales.length > 0 ||
        ArrayCarnes.length > 0 ||
        ArrayLacteos.length > 0 ||
        ArrayBebidas.length > 0 ||
        ArrayCongelados.length > 0 ||
        ArrayDulces.length > 0
    ) {
        btneliminar.style.display = 'block';
    } else {
        btneliminar.style.display = 'none';
    }
}

btnvolver.addEventListener('click',function(){
    seccion_ejercicio06.style.display='none';
    h1ejercicio05.style.display = 'block';
    div_select.style.display = 'block';
    div_btns.style.display = 'block';
    div_resultado.style.display = 'block';
    div_btn.style.display = 'block';
    ListaEjercicio05();
    verificarElementos();

    // Forzar redibujado de los botones
    div_btns.style.display = 'none';
    setTimeout(() => {
        div_btns.style.display = 'flex';
    }, 0);
    
});

document.addEventListener('DOMContentLoaded', function() {

    // Función que se ejecuta al presionar Enter
    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Evita el comportamiento por defecto del Enter (por ejemplo, enviar un formulario)
            btnagregar.click(); // Simula el clic en el botón Agregar
        }
    }

    // Añade el evento de teclado al campo de entrada
    alimento.addEventListener('keydown', handleKeyPress);
});





