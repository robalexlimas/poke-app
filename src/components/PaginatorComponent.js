import React from 'react';
import arrow from '../assets/images/arrow.png';

export const PaginatorComponent = () => {
    return (
        <div className="paginator">
            <img src={ arrow } alt="arrow" className="left pointer" />
            <div className="page pointer">...</div>
            <div className="page pointer">5</div>
            <div className="page pointer">6</div>
            <div className="page pointer">7</div>
            <div className="page pointer">...</div>
            <img src={ arrow } alt="arrow" className="right pointer" />
        </div>
    )
}
