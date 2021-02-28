import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CardItemsComponent } from '../components/CardItemsComponent';
import { ModalComponent } from '../components/ModalComponent';
import { PaginatorComponent } from '../components/PaginatorComponent';
import { startLoadPokemonAction } from '../redux/actions/pokemonsActions';

const HomePage = () => {
    const { offset } = useSelector(state => state.pokemons);
    const { modal } = useSelector(state => state.ui);
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
            <PaginatorComponent />
            { modal && <ModalComponent /> }
        </React.Fragment>
    )
}

export default HomePage;