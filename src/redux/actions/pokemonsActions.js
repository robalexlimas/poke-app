import { getListPokemons } from "../../helpers/apiHelper";
import { POKEMONS } from "../types"

export const loadPokemonAction = (data) => {
    return {
        type: POKEMONS.LOAD_POKEMONS,
        payload: { ...data }
    }
}

export const startLoadPokemonAction = (offset, limit=10) => {
    return (async (dispatch) => {
        const pokemons = await getListPokemons(offset, limit);
        const newOffset = offset + limit;
        const data = {
            pokemons,
            offset: newOffset,
        }
        dispatch(loadPokemonAction(data));
    })
}