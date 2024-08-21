// Elementos DOM
const categorias = document.getElementById('categorias');
const spanCategoria = document.getElementById('spanCategoria');
const alimento = document.getElementById('alimento');
const btnagregar = document.getElementById('btnagregar');
const frutas = document.getElementById('frutas');
const vegetales = document.getElementById('vegetales');
const carnes = document.getElementById('carnes');
const lacteos = document.getElementById('lacteos');
const bebidas = document.getElementById('bebidas');
const congelados = document.getElementById('congelados');
const dulces = document.getElementById('dulces');
const btneliminar = document.getElementById('btneliminar');
const categorias6 = document.getElementById('categorias6');
const spanCategoria6 = document.getElementById('spanCategoria6');
const div_inputElimina = document.getElementById('div_inputElimina');
const alimento6 = document.getElementById('alimento6');
const btneliminar6 = document.getElementById('btneliminar6');
const seccion_ejercicio06 = document.getElementById('seccion_ejercicio06');
const frutaslistaeliminar = document.getElementById('frutas-lista');
const h1ejercicio05 = document.getElementById('h1ejercicio05');
const div_select = document.getElementById('div_select');
const div_btn = document.getElementById('div_btn');
const div_btns = document.getElementById('div_btns');
const div_resultado = document.getElementById('div_resultado');
const btnvolver = document.getElementById('btnvolver');

// Arrays para almacenar alimentos
let categoriasArrays = {
    'Frutas': [],
    'Vegetales': [],
    'Carnes': [],
    'Lacteos': [],
    'Bebidas': [],
    'Congelados': [],
    'Dulces': []
};

// Actualiza la visualización de la lista en función de la categoría
function actualizarLista(categoria) {
    const arrayActual = categoriasArrays[categoria];
    const elemento = document.getElementById(categoria.toLowerCase());
    elemento.textContent = arrayActual.length > 0 
        ? `${categoria} : ${arrayActual.join(', ')}` 
        : '';
}

// Manejo del evento de cambio en el select de categoría
if (categorias) {
    categorias.addEventListener('change', () => {
        const categoria = categorias.options[categorias.selectedIndex].text;
        spanCategoria.textContent = categoria;
    });
}

// Manejo del evento de clic en el botón de agregar
if (btnagregar) {
    btnagregar.addEventListener('click', () => {
        const nombre = alimento.value.trim();
        const categoriaActual = categorias.options[categorias.selectedIndex].text;

        if(categoriaActual === 'Seleccione'){
            alert('Por favor seleccione una categoría');
        }else if(nombre === ''){
            alert('Por favor  ingrese un alimento');
        } else {

            btneliminar.style.display = 'block';
            categoriasArrays[categoriaActual].push(nombre);
            actualizarLista(categoriaActual);

        }

        alimento.value = '';
        alimento.focus();
    });
}

// Manejo del evento de clic en el botón de eliminar (sección 05)
if (btneliminar) {
    btneliminar.addEventListener('click', () => {
        div_select.style.display = 'none';
        div_btns.style.display = 'none';
        div_resultado.style.display = 'none';
        div_btn.style.display = 'none';
        h1ejercicio05.style.display = 'none';
        seccion_ejercicio06.style.display = 'block';  
        btneliminar.style.display = 'none';
        btnvolver.style.display = 'block';
        frutaslistaeliminar.innerHTML = '';
        categorias6.value = '';
        spanCategoria6.textContent = '';
    });
}

// Muestra la lista de alimentos en la sección 05
function ListaEjercicio05() {
    Object.keys(categoriasArrays).forEach(categoria => {
        actualizarLista(categoria);
    });
    alimento.value = '';
}

// Manejo del evento de cambio en el select de categoría (sección 06)
if (categorias6) {
    categorias6.addEventListener('change', () => {
        div_inputElimina.style.display = 'block';
        const categoria6 = categorias6.options[categorias6.selectedIndex].text;
        spanCategoria6.textContent = categoria6;
        const arrayActual = categoriasArrays[categoria6];
        
        frutaslistaeliminar.innerHTML = arrayActual.length 
            ? arrayActual.map((item, index) => `<li>${index + 1}. ${item}</li>`).join('')
            : 'No hay alimentos en esta categoría';
        
        elementos06si(arrayActual.length > 0);
        alimento6.value = '';
        alimento6.focus();
    });
}

// Muestra u oculta elementos para eliminar
function elementos06si(mostrar) {
    div_inputElimina.style.display = mostrar ? 'block' : 'none';
    btneliminar6.style.display = mostrar ? 'block' : 'none';
}

// Manejo del evento de clic en el botón de eliminar (sección 06)
if (btneliminar6) {
    btneliminar6.addEventListener('click', () => {
        const nombre6 = alimento6.value.trim();
        const categoriaActual6 = categorias6.options[categorias6.selectedIndex].text;
        const arrayActual = categoriasArrays[categoriaActual6];

        if (!nombre6) {
            alert('Por favor, ingrese un alimento.');
            return;
        }
        if(categoriaActual6 === 'Seleccione'){
            alert('Por favor, Seleccione una Categoria.');
            return;
        }

        if (!arrayActual.includes(nombre6)) {
            alert(`El alimento "${nombre6}" no existe en la categoría "${categoriaActual6}".`);
        } else {
            categoriasArrays[categoriaActual6] = arrayActual.filter(item => item !== nombre6);
            listarLista(categoriaActual6);
        }

        alimento6.value = '';
    });
}

// Lista alimentos restantes después de eliminar
function listarLista(categoria) {
    const arrayActual = categoriasArrays[categoria];
    frutaslistaeliminar.innerHTML = arrayActual.length 
        ? arrayActual.map((item, index) => `<li>${index + 1}. ${item}</li>`).join('')
        : 'No hay alimentos en esta categoría';
}

// Verifica si hay elementos en cualquier categoría para mostrar u ocultar el botón de eliminar
function verificarElementos() {
    const hayElementos = Object.values(categoriasArrays).some(array => array.length > 0);
    btneliminar.style.display = hayElementos ? 'block' : 'none';
}

// Manejo del evento de clic en el botón volver
btnvolver.addEventListener('click', () => {
    seccion_ejercicio06.style.display = 'none';
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

// Manejo del evento de presionar Enter en el campo de entrada de alimento
document.addEventListener('DOMContentLoaded', () => {
    alimento.addEventListener('keydown', event => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Evita el comportamiento por defecto del Enter
            btnagregar.click(); // Simula el clic en el botón Agregar
        }
    });
});
