import { getListPokemons, getTotalPokemons } from "../../helpers/apiHelper";
import { POKEMONS } from "../types"
import { hideLoadingAction, showLoadingAction } from "./uiActions";

export const loadPokemonAction = (data) => {
    return {
        type: POKEMONS.LOAD_POKEMONS,
        payload: { ...data }
    }
}

export const startLoadPokemonAction = (offset, fisrt, limit, direction) => {
    return (async (dispatch) => {
        dispatch(showLoadingAction());
        let newOffset = direction==='next' ? offset + limit : offset - limit;
        newOffset = fisrt ? 0 : newOffset;
        const pokemons = await getListPokemons(newOffset, limit);
        const total = await getTotalPokemons();
        const data = {
            pokemons,
            offset: newOffset,
            total,
        }
        dispatch(loadPokemonAction(data));
        setTimeout(() => {
            dispatch(hideLoadingAction());
        }, 500);
    })
}

export const setPokemonAction = (pokemon) => {
    return ({
        type: POKEMONS.SET_POKEMON,
        payload: pokemon
    })
}

export const removePokemonAction = () => {
    return ({
        type: POKEMONS.REMOVE_POKEMON
    })
}