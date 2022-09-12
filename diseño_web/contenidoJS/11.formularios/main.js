const form = document.getElementById('form');
const btn  = document.getElementById('btnDatos');
const names  = document.getElementById('inputNames');
const age  = document.getElementById('inputAge');
const email  = document.getElementById('inputEmail');
const city  = document.getElementById('inputCty');
const policy = document.getElementById('checkPolitica');

//control de validacion

const objectValid ={
    nombres: false,
    edad:false,
    correo:false,
    ciudad:false,
    politica:false
};

//VALIDAR FORMULARIO

form-addEventListener('submit', (e)=>{
    e.preventDefault();
    if(validform()){
        alert('enviando el formulario');
    }else{
        alert('error en valores del formulario');
    }
});

const validform =() =>{
    const values = Object.values(objectValid);
    let response = values.findIndex(e => e === false);
};

// e = evento
names.addEventListener('change',(e)=>{
    console.log(e.target);
    const namesRegex = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
    let valornames= e.target.value;
    objectValid.nombres = e.target.value.match(namesRegex) ? true : false;
    console.log(Object.values(objectValid));
});
age.addEventListener('change',(e)=>{
    const ageRegex = /(^[0-9]{1,2}$)/g;
    if ((age.value.match(ageRegex)) && ((parseInt(age.value))>=18)){
        objectValid.edad =true;
    }else{
        objectValid.edad =false;
    }
    console.log(Object.values(objectValid));
});
/*email.addEventListener('change',(e)=>{
    console.log(e.target);
    const emailRegex = 
    let valoremail= e.target.value;
    objectValid.email = e.target.value.match(emailRegex) ? true : false;
    console.log(Object.values(objectValid));
});*/
    indice = document.getElementById('imputcity').selectedIndex;
    if( indice == null || indice == 0 ) {
      return false;
    };
policy.addEventListener('change',function(e){
    objectValid.politica = e.target.checked; true ? true : false;
    console.log(Object.values(objectValid));
});