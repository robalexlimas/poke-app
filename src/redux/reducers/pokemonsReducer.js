import { POKEMONS } from "../types";

const initialState = {
    pokemons: [],
    current: {},
    offset: 0,
}

export const pokemonsReducer = (state=initialState, action) => {
    switch (action.type) {
        case POKEMONS.LOAD_POKEMONS:
            return {
                ...state,
                ...action.payload
            }
        case POKEMONS.DELETE_POKEMONS:
            return {
                ...state,
                pokemons: [],
                offset: 0
            }
        case POKEMONS.SET_POKEMON:
            return {
                ...state,
                current: action.payload
            }
        case POKEMONS.REMOVE_POKEMON:
            return {
                ...state,
                current: {}
            }
        default:
            return state;
    }
}