import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";

import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';

const App = () => {

    // const { user: currentUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location) => {
          dispatch(clearMessage()); // clear message when changing location
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
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/profile" component={Profile} />
            </Switch>
        </Router>
    );
}

export default App;
