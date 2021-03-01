import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CardItemsComponent } from '../components/CardItemsComponent';
import { ModalComponent } from '../components/ModalComponent';
import { PaginatorComponent } from '../components/PaginatorComponent';
import { LoadingComponent } from '../components/shared/LoadingComponent';
import { startLoadPokemonAction } from '../redux/actions/pokemonsActions';

const HomePage = () => {
    const { offset } = useSelector(state => state.pokemons);
    const { modal, loading } = useSelector(state => state.ui);
    const dispatch = useDispatch();

    useEffect(() => {
        const getPokemons = async() => {
            dispatch(startLoadPokemonAction(offset, true, 10, 'next'));
        }
        getPokemons();
    }, []);

    return (
        <React.Fragment>
            <h1>Pokedex</h1>
            <hr></hr>
            <div className="home">
                { loading && <LoadingComponent /> }
                { !loading && <CardItemsComponent />}
                <PaginatorComponent />
                { modal && <ModalComponent /> }
            </div>
        </React.Fragment>
    )
}

export default HomePage;