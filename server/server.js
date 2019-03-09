require('./config/config');
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
//
app.use(bodyparser.urlencoded({ extended: false }));
//
app.use(bodyparser.json());


app.get('/usuario', (req, res) => {
    res.json('get usuario');
});

app.post('/usuario', (req, res) => {

    let body = req.body;
    res.json({
        body: body
    });
});

app.put('/usuario', (req, res) => {
    res.json('put  usuario');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto', process.env.PORT)
});