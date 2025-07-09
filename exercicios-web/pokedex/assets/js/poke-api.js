const pokeapi = {}

pokeapi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
            .then((response) =>  response.json())
}
pokeapi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url) //busca a lista de pokemon
        .then((response) => response.json())//converte o resultado para json
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeapi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
        
}




