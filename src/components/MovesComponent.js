import React from 'react';

export const MovesComponent = ({ moves, id }) => {
    return (
        <div className="description_moves">
            {
                moves.map(({ move }, index) => 
                    index < 5 && 
                    (
                        <p 
                            className="moves"
                            key={ `${ move.name }.${ id }` }
                        >
                            { move.name }
                        </p>
                    ))
            }
        </div>
    )
}