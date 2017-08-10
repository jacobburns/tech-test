const express = require('express')
const app = express()
const bodyParser= require('body-parser')
const path = require('path');

const PeopleController = require('./controller')

app.use(bodyParser.urlencoded({extended: true}))
app.set('views', './views');
app.set('view engine', 'pug');

app.use(PeopleController);

app.get('/', function (req, res) {
    res.redirect('/people')
});
 
app.listen(3000, function () {
    console.log('Listening on http://localhost:3000');
});

