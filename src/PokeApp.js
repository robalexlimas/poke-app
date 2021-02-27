import React from 'react';
import { Provider } from 'react-redux';
import { AppRouter } from './AppRouer';
import { store } from './redux/store';
import './styles/styles.scss';

export const PokeApp = () => {
    return (
        <Provider store={ store } >
            <AppRouter />
        </Provider>
    )
}
