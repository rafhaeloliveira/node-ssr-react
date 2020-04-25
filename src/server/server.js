import express from 'express';

var app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
    res.send('Node send');
});

app.listen(3000, () => {
    console.log('Listening on port 3000')
});