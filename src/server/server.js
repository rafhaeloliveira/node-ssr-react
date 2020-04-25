import express from 'express';
import renderer from './renderer';
import { matchRoutes } from 'react-router-config';

var app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
    const context = {};
    const content = renderer(req, null, context);

    res.send(content);
});

app.listen(3000, () => {
    console.log('Listening on port 3000')
});