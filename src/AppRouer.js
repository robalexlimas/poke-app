import React, { Suspense, lazy } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
  } from 'react-router-dom';
import { FooterComponent } from './components/shared/FooterComponent';
import { NavBarComponent } from './components/shared/NavBarComponent';

const HomePage = lazy(() => import('./pages/HomePage'));

export const AppRouter = () => {
    return (
        <Router>
            <React.Fragment>
                <NavBarComponent />
                <Suspense fallback={ <div>Loading...</div> }>
                <div className='main-container'>
                        <Switch>
                            <Route 
                                exact
                                path='/home'
                                render={ () => <HomePage /> }
                            />

                            <Redirect to='/home' />
                        </Switch>
                </div>
                </Suspense>
                <FooterComponent />
            </React.Fragment>
        </Router>
    )
}
