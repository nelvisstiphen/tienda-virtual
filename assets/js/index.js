import React from 'React';
import ReactDOM from 'react-dom';
import '../css/main.css';
import App from '.App';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render (
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)