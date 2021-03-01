import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import arrow from '../assets/images/arrow.png';
import { startLoadPokemonAction } from '../redux/actions/pokemonsActions';

export const PaginatorComponent = () => {
    const { offset, total } = useSelector(state => state.pokemons);
    const dispatch = useDispatch();

    const handleChangePrevious = () => {
        dispatch(startLoadPokemonAction(offset, false, 10, 'previous'));
    }

    const handleChangeNext = () => {
        dispatch(startLoadPokemonAction(offset, false, 10, 'next'));
    }

    return (
        <div className="paginator">
            { offset > 0 &&
                (<img 
                    src={ arrow }
                    alt="arrow"
                    className="left pointer"
                    onClick={ handleChangePrevious }
                />)
            }
            <div className="page pointer">{ (offset / 10) - 1}</div>
            <div className="page pointer">{ (offset / 10) }</div>
            <div className="page pointer">{ (offset / 10) + 1 }</div>
            <div className="page pointer">{ (offset / 10) + 2 }</div>
            <div className="page pointer">{ (offset / 10) + 3 }</div>
            { offset < total &&
                (<img 
                    src={ arrow }
                    alt="arrow"
                    className="right pointer"
                    onClick={ handleChangeNext }
                />)
            }
        </div>
    )
}
