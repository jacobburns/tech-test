const express = require('express')
const app = express()
const bodyParser= require('body-parser')
const path = require('path');
// let router = new express.Router()

const PeopleController = require('./controller')
var people = [{"firstName":"Jeff","lastName":"Stelling","id":1},{"firstName":"Chris","lastName":"Kamara","id":2},{"firstName":"Alex","lastName":"Hammon","id":3},{"firstName":"Jim","lastName":"White","id":5},{"firstName":"Jacob","lastName":"Burns","id":4}]

app.use(bodyParser.urlencoded({extended: true}))
app.set('views', './views');
app.set('view engine', 'pug');

app.use(PeopleController);

app.get('/', function (req, res) {
    // res.render('people', { people: people });
    res.redirect('/people')
    
    console.log(people);
});

// app.get('/people/:id', function (req, res) {
//     var person = JSON.stringify(people.keys[{ id: req.params.id }])


//     console.log(people[1].firstName);
//     console.log(person.firstName);
    
    

//     res.render('/form', {
//         firstName: person.firstName,
//         lastName: person.lastName,
//         id: person.id,
//         actionUrl: '/people/' + req.params.id
//     })


//     var post = posts[req.params.id];

//     if(!post) {
//         return res.status(404).send();
//     }

//     res.render("posts/show" , {
//         title: "Post",
//         post: post
//     });
// });

// app.post('/people/:id', (req, res) => {
//   let person = peopleService.update(req.body)

//   res.render('people/form', {
//     firstName: person.firstName,
//     lastName: person.lastName,
//     id: person.id,
//     actionUrl: '/people/' + req.params.id,
//     message: 'Updated.'
//   })
// });

 
app.listen(3000, function () {
    console.log('Listening on http://localhost:3000');
});

