const fs = require('fs')
const path = require('path')

class PeopleService {
    constructor (filePath) {
        this.filePath = filePath||path.join(__dirname, 'data', 'people.json')
    }

    read (param) {
        let people = JSON.parse(fs.readFileSync(this.filePath, 'utf8'))

        if (param.id) { //return just one person
            people = people.filter((person) => Number(param.id) === person.id)[0]
        }

        return people
    }

    update (body) {
        let updatedPerson = {}

        let people = this.read({}).map((person) => {
            body.id = Number(body.id)
            if (person.id === body.id) {
                updatedPerson = Object.assign({}, person, body)
                return updatedPerson
            }
            return person
            })

        fs.writeFileSync(this.filePath, JSON.stringify(people))

        return updatedPerson
    }

    delete (id) {
        let people = this.read({}).filter((person) => person.id !== Number(id))
        fs.writeFileSync(this.filePath, JSON.stringify(people))
    }

    create (data) {
    let people = this.read({}).sort((a, b) => a.id > b.id) //returns people ordered by id

    if (people.length) {
        data.id = people[people.length - 1].id++
    } else {
        data.id = 1
    }

    people.push(data)
    fs.writeFileSync(this.filePath, JSON.stringify(people))
    return data
  }
}

module.exports = PeopleService