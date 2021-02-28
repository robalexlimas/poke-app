import React from 'react';
import icon from '../../assets/images/poke_app.png';
import searcher from '../../assets/images/searcher.png';
import dropdown from '../../assets/images/dropdown.png';

export const NavBarComponent = () => {
    return (
        <nav className="collapse">
            <div className="nav-icon pointer">
                <img src={ icon } alt="poke-app" />
                <span>Poke App</span>
            </div>
            <div className="nav-router">
                <ul>
                    <li className="pointer">Podex</li>
                    <li className="pointer">Busqueda</li>
                </ul>
            </div>
            <div className="nav-searcher">
                <form>
                    <input type="text" placeholder="Buscar" />
                    <button type="submit" className="pointer">
                        <img src={ searcher } alt="searcher-icon" />
                    </button>
                </form>
            </div>
            <div className="dropdown pointer">
                <img src={ dropdown } alt="searcher-icon" />
            </div>
        </nav>
    )
}