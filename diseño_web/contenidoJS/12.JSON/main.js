'use strict';
let cadJSON = {"nombres": "juan andres"};
//[] -> arreglo, {} -> objeto

let datos =[
    {
        "nombres": "milton andres",
        "apellidos" : "novoa gutierrez",
        "edad" : "17",
        "materias": ["logica", "programacion", "diseño"],
        "soltetro": true,
    },
    {
        "nombres": "victor",
        "apellidos" : "torres",
        "edad" : "30",
        "materias": ["matematicas", "español"],
        "soltetro": false,
    }
];
Object.entries(datos).forEach((e)=>console.log(e));