'use strict';
function generoEventi(){
    alert('hizo click en el boton');
}
function eventomouse(){
    console.log('mouse')
}
//evento por propiedad
const btnpropiedad = document.getElementById('btnpropiedad');

btnpropiedad.onclick = function(){
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const promedio = document.getElementById('promedio').value;
    const tipo = document.getElementById('tipo').value;

    if(!isNaN(parseFloat(promedio))){
        console.log(promedio);
    }
}
//evento por el metodo addEventListerner
const inputName = document.getElementById('nombre');
inputName.addEventListerner('click',()=>{
    console.log(inputName);
});