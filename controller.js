const express = require('express')
const PeopleService = require('./peopleService')

let router = new express.Router()
let peopleService = new PeopleService()

router.get('/people', function(req, res) {
  let people = peopleService.read({})
  res.render('people', { people: people })
})

module.exports = router