import React from 'react';

export const StatsComponent = ({ stats }, name) => {
    return (
        <div className="description_stats">
            {
                stats.map(({ base_stat, stat }) => (
                    <p 
                        className="stats"
                        key={ `${ stat.name }.${ name }` }
                    >
                        { base_stat } { stat.name }
                    </p>
                ))
            }
        </div>
    )
}