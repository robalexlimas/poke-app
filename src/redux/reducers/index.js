import { combineReducers } from 'redux';
import { pokemonsReducer } from './pokemonsReducer';
import { uiReducer } from './uiReducer';

export default combineReducers({
    ui: uiReducer,
    pokemons: pokemonsReducer,
});