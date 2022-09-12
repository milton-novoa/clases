async function getPokemos() {
    const resp = await axios
    .get("https://pokeapi.co/api/v2/pokemon")
    .then((response) => {
        console.log(response.data);
    })
//siempre se debe de poner el ".data" ejemplo = xxxx.data    
    .catch((err) => {
        console.log(err);
    });
    return resp;
}
const data = await getPokemos();
cosole.log("esto es espues de la petición")
