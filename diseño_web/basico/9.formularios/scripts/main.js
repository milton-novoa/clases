'use strict';
const btn = document.getElementById('boton2');

btn.addEventListener('click',(event)=>{//segundo parametro funcion tipo flecha anonima
    event.preventDefault();
    const form = document.getElementById('form')
    console.log(form[0].value);
    console.log(form[1].value);
    console.log(form[2].value);
});
