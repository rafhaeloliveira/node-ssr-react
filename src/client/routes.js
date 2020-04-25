import React from 'react';

import App from './App';
import Home from './../modules/Home';

export default [
    {
        ...App,
        routes: [
            {
                ...Home,
                path: '/',
                exact: true
            }
        ]
    }
]