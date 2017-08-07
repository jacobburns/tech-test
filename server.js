const express = require('express')
const app = express()
const bodyParser= require('body-parser')
const path = require('path');
// let router = new express.Router()

app.use(bodyParser.urlencoded({extended: true}))
app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function (req, res) {
    // render the 'index' template, and pass in a few variables
    // res.render('markup', { title: 'Hey', message: 'Hello there!' });
    res.render('markup');
});
 
app.listen(3000, function () {
    console.log('Listening on http://localhost:3000');
});