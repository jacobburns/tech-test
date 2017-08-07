const fs = require('fs')
const path = require('path')

class peopleService {
    constructor (filePath) {
        this.filePath = filePath||path.join(__dirname, '..', '..', '..', 'data', 'people.json')
    }
}

module.exports = PeopleService