'use strict';
//selecionar elementos del DOM
let myTitle = document.getElementById("titulo");
//selecionar por el name
let tagName = document.getElementById("art1");
//selecionar por la etiqueta
let etiqueta = document.getElementById("h3");
//onsole.log(myTitle);
//Queryselector id
let queryContainer = document.querySelector("#container");
//Queryselector class
let myMenu = document.querySelector(".menu");
//Queryselector etiqueta
let myOl = document.querySelector("ol");
//all
let allArt = document.querySelectorAll("article");
//console.log(allArt);
//crear elementos}
let miparrafo = document.createElement("p");
miparrafo.id="parrafo";
miparrafo.className="parrafo";
miparrafo.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio in impedit excepturi deleniti suscipit. Nesciunt id laboriosam non inventore at? Nesciunt ab aspernatur officia saepe nobis assumenda necessitatibus, ipsam repellat. ola sin h";
miparrafo.innerHTML = "<h3>esto es otro titulo</h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio in impedit excepturi deleniti suscipit. Nesciunt id laboriosam non inventore at?<strong>Nesciunt id laboriosam</strong>Nesciunt ab aspernatur officia saepe nobis assumenda necessitatibus, ipsam repellat. hola pero con h";
//insertar elemeto en el DOM
//document.body.appendChild(miparrafo);
//selecion elemento
let seccion1 = document.getElementById("section1");
seccion1.appendChild(miparrafo);