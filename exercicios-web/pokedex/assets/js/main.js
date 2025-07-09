function convertPokemonTypesToLi(pokemonTypes){
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function convertPokemonToLi(pokemon){
    return `<li class="pokemon">
                <span class="number"><strong>#${pokemon.order}</strong></span>
                <span class="name">${pokemon.name}</span>
                <div class="details">
                    <ol class="types">
                        ${convertPokemonTypesToLi(pokemon.types).join(' ')}
                    </ol>
                    <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
                </div>
            </li>`
}

const pokemonList = document.getElementById('pokemonList')

pokeapi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map((pokemon) => convertPokemonToLi(pokemon)).join('')
})

console.log('Sucesso!')
