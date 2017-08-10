const express = require('express')
const PeopleService = require('./peopleService')

let router = new express.Router()
let peopleService = new PeopleService()

router.get('/people', (req, res) => {
    let people = peopleService.read({})
    res.render('people', { people: people })
})

router.get('/people/new', (req, res) => {
    res.render('person', {
        actionUrl: '/people/new'
    })
})

router.post('/people/new', (req, res) => {
    peopleService.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })

    res.redirect('/people')
})

router.get('/people/:id', (req, res) => {
    let person = peopleService.read({ id: req.params.id })
    console.log(peopleService.read({ id: req.params.id }));
    console.log(person);


    res.render('person', {
        firstName: person.firstName,
        lastName: person.lastName,
        id: person.id,
        actionUrl: '/people/' + req.params.id
    })
})

router.post('/people/:id', (req, res) => {
    let person = peopleService.update(req.body)

    res.render('person', {
        firstName: person.firstName,
        lastName: person.lastName,
        id: person.id,
        actionUrl: '/people/' + req.params.id,
        message: 'Updated'
    })
})

router.get('/people/delete/:id', (req, res) => {
    peopleService.delete(req.params.id)
    res.redirect('/people')
})

module.exports = router