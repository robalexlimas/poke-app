import React from 'react';
import loading from '../../assets/images/loading.png';

export const LoadingComponent = () => {
    return(
        <div className="loading">
            <div className="icon">
                <div className="spin">
                    <img src={ loading } alt="loading" />
                </div>
            </div>
        </div>
    )
}
