import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CardItemsComponent } from '../components/CardItemsComponent';
import { startLoadPokemonAction } from '../redux/actions/pokemonsActions';

const HomePage = () => {
    const { offset } = useSelector(state => state.pokemons);
    const dispatch = useDispatch();

    useEffect(() => {
        const getPokemons = async() => {
            dispatch(startLoadPokemonAction(offset));
        }
        getPokemons();
    }, []);

    return (
        <React.Fragment>
            <h1>Pokedex</h1>
            <hr></hr>
            <CardItemsComponent />
        </React.Fragment>
    )
}

export default HomePage;