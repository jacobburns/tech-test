const fs = require('fs')
const path = require('path')

class PeopleService {
    constructor (filePath) {
        this.filePath = filePath||path.join(__dirname, 'data', 'people.json')
    }

    read (param) {
    let people = JSON.parse(fs.readFileSync(this.filePath, 'utf8'))


    return people
  }
}

module.exports = PeopleService