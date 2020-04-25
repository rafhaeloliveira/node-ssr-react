import React from 'react';
import Routes from './../client/routes';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

export default (req, store, context) => {
    const content = renderToString(
        <StaticRouter location={req.path} context={context}>
            {renderRoutes(Routes)}
        </StaticRouter>
    );

    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8" />

            <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no"
            />
            <meta name="format-detection" content="telephone=no">
        </head>
        <body>
            <div id="root">${content}</div>
        </body>
        </html>
    `
}