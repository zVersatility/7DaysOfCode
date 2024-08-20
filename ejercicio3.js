const select_fbend = document.getElementById('select_fbend');
const div_front = document.getElementById('div_front');
const div_back = document.getElementById('div_back');
const Opt_front = document.getElementById('Opt_front');
const div_camino = document.getElementById('div_camino');
const label_camino = document.getElementById('label_camino');
const Opt_back = document.getElementById('Opt_back');
const Opt_camino = document.getElementById('Opt_camino');
const mensaje_camino = document.getElementById('mensaje_camino');
const div_form = document.getElementById('div_form');
let Selec_fb = ''; // Variable global para guardar el valor seleccionado
let Selec_fb_ = '';
let Selec_esp_full = '';

// Cambiar visibilidad de divs al cambiar la opción del select
select_fbend.addEventListener('change',function(){

    Selec_fb = select_fbend.options[select_fbend.selectedIndex].text;

    if(Selec_fb === "Front-End"){
        div_front.style.display='block';
        div_back.style.display='none';

        Opt_front.addEventListener('change', function(){

            Selec_fb_ = Opt_front.options[Opt_front.selectedIndex].text;
            
            if(Selec_fb_ != ""){

                select_fbend.disabled = true;
                label_camino.innerText='¿Cual es tu siguiente paso? ¿Especializarte en ' + Selec_fb + ' o  ser Fullstack?' ;
                div_camino.style.display='block';
            }
        });
        
    } else if(Selec_fb === "Back-End"){
        div_back.style.display='block';
        div_front.style.display='none';

        Opt_back.addEventListener('change', function(){

            Selec_fb_ = Opt_back.options[Opt_back.selectedIndex].text;
            
            if(Selec_fb_ != ""){

                select_fbend.disabled = true;
                label_camino.innerText='¿Cual es tu siguiente paso? ¿Especializarte en ' + Selec_fb +' o ser Fullstack?' ;
                div_camino.style.display='block';
            }
        });

    }
});

Opt_camino.addEventListener('change', function(){

    Selec_esp_full = Opt_camino.options[Opt_camino.selectedIndex].text;

    if(Selec_esp_full === "Especialización"){
        
        mensaje_camino.innerText='¡ Te deseamos mucho exito ! , Estamos seguros que seras un gran especialista en ' + Selec_fb + '.';
    } else if(Selec_esp_full === "Fullstack"){
        mensaje_camino.innerText='¡ Te deseamos mucho exito ! , El camino Fullstack es completo pero complicado , pero estamos seguro que tu podras con ello ;)';
    }

    mensaje_camino.style.display='block';

    if(Selec_esp_full != ""){
        div_form.style.display='block';
    }
});

let technologies = [];

document.getElementById('addButton').addEventListener('click', function() {
    let techInput = document.getElementById('techInput').value;

    if (techInput) {
        technologies.push(techInput);
        document.getElementById('techInput').value = ''; // Limpiar el input
    } else {
        alert('Por favor ingresa una tecnología.');
    }
});

document.getElementById('finishButton').addEventListener('click', function() {
    if (technologies.length > 0) {
        document.getElementById('resultMessage').textContent = 
            'En resumen elegiras el camino de '+ Selec_fb +' usando ' + Selec_fb_ + ' y tambien iras por el camino de ' + Selec_esp_full + ' , ademas de querer aprender las siguientes tecnologías : ' + technologies.join(', ') + ' . Te desemos mucho exito y que logres aprender mucho y realizarte como un gran programador. :D';
    } else {
        alert('No has ingresado ninguna tecnología.');
    }
});

// function updateTechList() {
//     let techList = document.getElementById('techList');
//     techList.innerHTML = '';

//     technologies.forEach(function(tech, index) {
//         let li = document.createElement('li');
//         li.textContent = (index + 1) + '. ' + tech;
//         techList.appendChild(li);
//     });
// }
