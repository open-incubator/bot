const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('./data/invitations.json')
const db = low(adapter)

// Init the database if she's empty
db.defaults({ links: [] }).write()

// Add link
exports.create = (inviteCode, name) => db.get('links').push({ code: inviteCode, name: name }).write()

exports.getAll = () => db.get('links').value()
