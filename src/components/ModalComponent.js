import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import close from '../assets/images/close.png';
import { removePokemonAction } from '../redux/actions/pokemonsActions';
import { hideModalAction } from '../redux/actions/uiActions';
import { MovesComponent } from './MovesComponent';
import { StatsComponent } from './StatsComponent';
import { TypeComponent } from './TypesComponent';

export const ModalComponent = () => {
    const { current:pokemon } = useSelector(state => state.pokemons);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(removePokemonAction());
        dispatch(hideModalAction());
    }

    return (
        <div className="modal">
            <div className="item">
                <img src={ close } alt="close" className="close pointer" onClick={ handleClose } />
                <div className="info">
                    <div className="name">
                        <span>N. { pokemon.id }</span>
                        <h3>{ pokemon.name.toUpperCase() }</h3>
                    </div>
                    <img src={ pokemon.url[1] } alt={ pokemon.name } />
                    <div className="description">
                        <TypeComponent { ...pokemon } />
                        <MovesComponent { ...pokemon } />
                        <StatsComponent { ...pokemon } />
                    </div>
                </div>
            </div>
        </div>
    )
}