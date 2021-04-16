import React from 'react';
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, Footer, Sidebar, Alert } from "./components";
import { HomePage, PokemonPage } from "./pages";

function App() {
    return (
        <Router>
            <Navbar />
            <Alert />
            <Sidebar />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/pokemon" exact component={PokemonPage} />
            </Switch>
            <Footer />
        </Router>
    )
}

export default App;
