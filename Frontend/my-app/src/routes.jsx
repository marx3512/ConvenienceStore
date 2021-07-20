import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddFood from './pages/AddFood';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/add" component={AddFood}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;