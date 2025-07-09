const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 50
let offset = 0




function loadPokemonItens(offset, limit) {
    pokeapi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) =>
            `<li class="pokemon ${pokemon.type}">
                <span class="number"><strong>#${pokemon.number}</strong></span>
                <span class="name">${pokemon.name}</span>

                <div class="details">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ">${type}</li>`).join(' ')}
                    </ol>
                    <img src="${pokemon.photo}" 
                    alt="${pokemon.name}">
                </div>
            </li>`).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    loadPokemonItens(offset, limit)
})

console.log('Sucesso!')
