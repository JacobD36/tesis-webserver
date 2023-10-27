require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estático
app.use(express.static('public'));

/*app.get('/', function(req, res) {
    res.render('home', {
        nombre: 'Jaime Pérez Frias',
        titulo: 'Curso de Node'
    });
});

app.get('/', function(req, res) {
    res.render('home', {
        nombre: 'Jaime Pérez Frias',
        titulo: 'Curso de Node'
    });
});

app.get('/hola-mundo', function(req, res) {
    res.send('Hola Mundo en su respectiva ruta');
});

app.get('/generic', function(req, res) {
    res.render('generic', {
        nombre: 'Jaime Pérez Frias',
        titulo: 'Curso de Node'
    })
});

app.get('/elements', function(req, res) {
    res.render('elements', {
        nombre: 'Jaime Pérez Frias',
        titulo: 'Curso de Node'
    })
});*/

/*app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/404.html');
});*/

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});