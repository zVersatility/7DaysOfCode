const categorias=document.getElementById('categorias');
const spanCategoria=document.getElementById('spanCategoria');
const alimento=document.getElementById('alimento');
const btnagregar=document.getElementById('btnagregar');
const btnfinalizar=document.getElementById('btnfinalizar');
const frutas=document.getElementById('frutas');
const vegetales=document.getElementById('vegetales');
const carnes=document.getElementById('carnes');
const lacteos=document.getElementById('lacteos');
const bebidas=document.getElementById('bebidas');
const congelados=document.getElementById('congelados');
const dulces=document.getElementById('dulces');

let ArrayFrutas = [];
let ArrayVegetales=[];
let ArrayCarnes=[];
let ArrayLacteos=[];
let ArrayBebidas=[];
let ArrayCongelados=[];
let ArrayDulces=[];
let categoria = '';

categorias.addEventListener('change',function(){

    categoria = categorias.options[categorias.selectedIndex].text;
    spanCategoria.textContent= categoria;
});

btnagregar.addEventListener('click',function(){

    let nombre = alimento.value;
    let categoriaActual = categorias.options[categorias.selectedIndex].text;

    if(categoriaActual){
        switch(categoriaActual){
            case 'Frutas':
                ArrayFrutas.push(nombre);
                break;
            case 'Vegetales':
                ArrayVegetales.push(nombre);
                break;
            case 'Carnes':
                ArrayCarnes.push(nombre);
                break;
            case 'Lacteos':
                ArrayLacteos.push(nombre);
                break;
            case 'Bebidas':
                ArrayBebidas.push(nombre);
                break;
            case 'Congelados':
                ArrayCongelados.push(nombre);
                break;
            case 'Dulces':
                ArrayDulces.push(nombre);
                break;
        }
    }
    alimento.value='';
    alimento.focus();
});

btnfinalizar.addEventListener('click',function(){

    frutas.textContent='Frutas : ' + (ArrayFrutas.length > 0 ? ArrayFrutas.join(', ') : ' No hay alimentos en esta catergoría');
    vegetales.textContent='Vegetales : ' + (ArrayVegetales.length > 0 ? ArrayVegetales.join(', ') : ' No hay alimentos en esta catergoría');
    carnes.textContent='Carnes : ' + (ArrayCarnes.length > 0 ? ArrayCarnes.join(', ') : ' No hay alimentos en esta catergoría');
    lacteos.textContent='Lacteos : ' + (ArrayLacteos.length > 0 ? ArrayLacteos.join(', ') : ' No hay alimentos en esta catergoría');
    bebidas.textContent='Bebidas : ' + (ArrayBebidas.length > 0 ? ArrayBebidas.join(', ') : ' No hay alimentos en esta catergoría');
    congelados.textContent='Congelados : ' + (ArrayCongelados.length > 0 ? ArrayCongelados.join(', ') : ' No hay alimentos en esta catergoría');
    dulces.textContent='Dulces : ' + (ArrayDulces.length > 0 ? ArrayDulces.join(', ') : ' No hay alimentos en esta catergoría');
    alimento.value='';


    
});


