const header = document.querySelector("header");
const section = document.querySelector("section");
const div = document.querySelector("div");
const direccion = "https://pokeapi.co/api/v2/pokemon/garchomp"
const request = new XMLHttpRequest();
request.open("GET", direccion);
request.responseType = "json";
request.send();
request.onload = function () {
    const respuesta = request.response;
    cabezera(respuesta);
    cuerpo(respuesta);
    movimientos(respuesta);
    Estadisticas(respuesta);
};


function cuerpo(jsonObj) {
    const habilidades = jsonObj.abilities;
    const caja = document.createElement("ul");
    const contenedor= document.createElement("div");
    contenedor.className='izquierda';
    const titulo=document.createElement("h2");
    titulo.textContent="Habilidades:";
    for (let index = 0; index < habilidades.length; index++) {
        const lista = document.createElement("li");
        lista.textContent = habilidades[index].ability.name;
        caja.appendChild(lista);

    }
    contenedor.appendChild(titulo);
    contenedor.appendChild(caja);
    div.appendChild(contenedor);

}

