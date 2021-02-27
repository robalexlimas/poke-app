import React, { Suspense, lazy } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
  } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage'));

export const AppRouter = () => {
    return (
        <Router>
            <React.Fragment>
                <Suspense fallback={ <div>Loading...</div> }>
                    <Switch>
                        <Route 
                            exact
                            path='/home'
                            render={ () => <HomePage /> }
                        />

                        <Redirect to='/home' />
                    </Switch>
                </Suspense>
            </React.Fragment>
        </Router>
    )
}
