import { environment } from '../environments/environment';

export const getPokemon = async (pokemon) => {
    const url = `${ environment.urlApi }/pokemon/${ pokemon }`;
    const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    });
    const data = await response.json();
    return {
        id: data.id,
        name: data.name,
        moves: data.moves,
        url: data.sprites.front_default,
        height: data.height,
        types: data.types,
    };
}

export const getListPokemons = async (offset=0, limit=10)  => {
    let pokemons = [];
    for (let i = 1; i <= limit; i++) {
        const pokemon = await getPokemon(offset + i);
        pokemons.push(pokemon);
    }
    return pokemons;
}