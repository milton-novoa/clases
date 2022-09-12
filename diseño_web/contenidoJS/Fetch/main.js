fetch("https://pokeapi.co/api/v2/pokemon")
    .then((response)=> response.json())
    .then ((json)=>{
        //console.log(json.results);
        for(let p of json.results) {
            console.log(p.name);
        }
    })
    .catch((error)=> console.error("se ha generado:"+error))
    .finally(console.info("ha finalizado la petción"));