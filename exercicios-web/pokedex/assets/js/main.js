
function convertPokemonToLi(pokemon){
    return `<li class="pokemon">
                <span class="number">#001</span>
                <spam class="name">${pokemon.name}</spam>
                <div class="details">
                    <ol class="types">
                        <li class="type">Grass</li>
                        <li class="type">Poison</li>
                    </ol>
                     <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
                </div>
            </li>`
}


const pokemonList = document.getElementById('pokemonList')

pokeapi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map((pokemon) => convertPokemonToLi(pokemon)).join('')


    // const listItems = []
    //    for(let i = 0; i < pokemons.length; i++){
    //         const pokemon = pokemons[i];
    //         listItems.push(convertPokemonToLi(pokemon))
    //    }
    //    console.log(listItems)
})
    

console.log('Sucesso!')



