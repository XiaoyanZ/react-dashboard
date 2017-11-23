import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app';
import 'semantic-ui-css/semantic.min.css';
import 'react-table/react-table.css';
import 'react-toastify/dist/ReactToastify.min.css';


ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));