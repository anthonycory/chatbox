import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NotFound from './components/NotFound'
import Connexion from "./components/Connexion"
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Route, Switch } from 'react-router-dom'



ReactDOM.render(
  <React.StrictMode>
       <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Connexion} />
        <Route path="/pseudo/:pseudo" component={App} />
        <Route component={NotFound} />
    </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
