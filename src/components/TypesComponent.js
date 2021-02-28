import React from 'react';

export const TypeComponent = ({ types, id }) => {
    return (
        <div className="description_types">
            {
                types.map(({ type }) => (
                    <p 
                        className={ `types ${ type.name }` }
                        key={ `${ type.name }.${ id }` }
                    >
                        { type.name }
                    </p>
                ))
            }
        </div>
    )
}