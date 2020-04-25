import "@babel/polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { renderRoutes } from 'react-router-config';
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import Routes from './routes';

const history = createBrowserHistory();
history.listen((location) => {
    console.log('Change history');
})

const Main = () => {
    <> 
        <Router history={history}>
            {renderRoutes(Routes)}
        </Router>
    </>
}

ReactDOM.hydrate(<Main />, document.querySelector("#root"));