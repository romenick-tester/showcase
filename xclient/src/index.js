import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider } from "./assets";

import App from './App';

ReactDOM.render(
    <AppProvider>
        <App />
    </AppProvider>
    , document.getElementById("root")
)