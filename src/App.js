import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Router, Switch, Route } from "react-router-dom";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";

import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location) => {
            dispatch(clearMessage()); 
        });
    }, [dispatch]);
    

    const logOut = () => {
        dispatch(logout());
    };

    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/dashboard" component={Dashboard} />
            </Switch>
        </Router>
    );
}

export default App;
