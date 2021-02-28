import React from 'react';

export const CardComponent = ({ name, url, id, types }) => {
    return (
        <div className="card-item pointer">
            <img src={ url } alt={ name } />
            <span>N. { id }</span>
            <h3>{ name.toUpperCase() }</h3>
            <div>
                {
                    types.map(({slot, type }) => (
                        <p 
                            className="types"
                            key={ slot }
                        >
                            { type.name }
                        </p>
                    ))
                }
            </div>
        </div>
    )
}