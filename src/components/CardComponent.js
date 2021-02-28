import React from 'react';
import { useDispatch } from 'react-redux';
import { setPokemonAction } from '../redux/actions/pokemonsActions';
import { showModalAction } from '../redux/actions/uiActions';
import { TypeComponent } from './TypesComponent';

export const CardComponent = ( props ) => {
    const { name, url, id } = props;
    const dispatch = useDispatch();

    const clickHandle = () => {
        dispatch(setPokemonAction(props));
        dispatch(showModalAction());
    }

    
    return (
        <div className="card-item pointer" onClick={ clickHandle }>
            <img src={ url[0] } alt={ name } />
            <span>N. { id }</span>
            <h3>{ name.toUpperCase() }</h3>
            <TypeComponent { ...props } />
        </div>
    )
}