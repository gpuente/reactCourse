import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home.jsx';
import About from './About.jsx';
import Profile from './Profile.jsx';
import Error404 from './Error404.jsx';

function Pages(){
    return (
        <main role="application">
            <Switch>
                <Route 
                    path="/"
                    exact
                    component={Home}
                />
                <Route
                    path="/user/:id"
                    exact
                    component={Profile}
                />
                <Route 
                    path="/about"
                    exact
                    component={About}
                />
                <Route component={Error404} />
            </Switch>
        </main>   
    );
}

export default Pages;