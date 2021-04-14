import React from 'react';
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, Alert } from "./components";
import { HomePage } from "./pages";

function App() {
    return (
        <Router>
            <Navbar />
            <Main>
                <Alert />
                <Switch>
                    <Route path="/" exact component={HomePage} />
                </Switch>
            </Main>
        </Router>
    )
}

const Main = styled.main`
    max-width: 70vw;
    margin: 0 auto;
    padding-top: 100px;
`

export default App;
