import React from 'react';
import { useSelector } from 'react-redux';
import { CardComponent } from './CardComponent';

export const CardItemsComponent= () => {
    const { pokemons } = useSelector(state => state.pokemons);
    return (
        <div className="card-items">
            {
                pokemons.map(pokemon => (
                    <CardComponent 
                        key={ pokemon.id }
                        { ...pokemon }
                    />
                ))
            }
        </div>
    )
}