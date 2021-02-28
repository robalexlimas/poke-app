import React from 'react';

export const FooterComponent = () => {
    const date = new Date().getFullYear();
    return (
        <div className="footer">
            &copy; { date }
        </div>
    )
}