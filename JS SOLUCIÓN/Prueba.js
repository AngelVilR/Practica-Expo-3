document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector("header");
    const section = document.querySelector("section");
    const article = document.querySelector("article");
    const Habilidades = document.getElementById("Habilidades");
    const Movimientos = document.getElementById("Movimientos");
    const Estadisticas = document.getElementById("Estadisticas");


    const img = document.getElementById("pokemonSprite");

    const Pokemon = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/rowlet`)
            .then(response => response.json())
            .then(data => {

                /* Nombre pokemon */
                const ElementoH1 = document.createElement('h1');
                ElementoH1.textContent = "Nombre: " + data.name;
                header.appendChild(ElementoH1);

                /* Imagen */
                const ImagenURL = data.sprites.front_default;
                img.src = ImagenURL;
                img.alt = `Imagen del pokémon ${data.name}`
                article.appendChild(img);

                /* Habilidades */
                const ElementH2_1 = document.createElement('h2');
                ElementH2_1.textContent = 'Habilidades'
                Habilidades.appendChild(ElementH2_1);

                const ElementUl_1 = document.createElement('ul');
                Habilidades.appendChild(ElementUl_1)
                
                for (let i = 0; i < data.abilities.length ; i++) {
                    const HabTemp = data.abilities[i].ability.name;
                    const ElementLi_1 = document.createElement('li');
                    ElementLi_1.textContent = HabTemp;
                    ElementUl_1.appendChild(ElementLi_1);
                }                
                /* Movimientos */                
                const ElementH2_2 = document.createElement('h2');
                ElementH2_2.textContent = 'Movimientos'
                Movimientos.appendChild(ElementH2_2);

                const ElementUl_2 = document.createElement('ul');
                Movimientos.appendChild(ElementUl_2)
                
                for (let i = 0; i < data.moves.length ; i++) {
                    const MovTemp = data.moves[i].move.name;
                    const ElementLi_2 = document.createElement('li');
                    ElementLi_2.textContent = MovTemp;
                    ElementUl_2.appendChild(ElementLi_2);
                } 

                /* Estadisticas */
                const ElementH2_3 = document.createElement('h2');
                ElementH2_3.textContent = 'Estadisticas'
                Estadisticas.appendChild(ElementH2_3);

                const ElementUl_3 = document.createElement('ul');
                Estadisticas.appendChild(ElementUl_3)
                
                for (let i = 0; i < data.stats.length ; i++) {
                    const EstTempName = data.stats[i].stat.name;
                    const EstTempNum = data.stats[i].base_stat;
                    const ElementLi_3 = document.createElement('li');
                    ElementLi_3.textContent = `${EstTempName}: ${EstTempNum}`;
                    ElementUl_3.appendChild(ElementLi_3);
                } 
            })
            .catch(error => {
                console.error('Error al consultar la API:', error);
            });
    };

    Pokemon();

});