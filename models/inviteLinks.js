const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('./data/invitations.json')
const db = low(adapter)

// Init the database if she's empty
db.defaults({ links: [] }).write()

class InviteLinks {
  constructor() {
    this.state = this.getAll()
  }

  // Init the local state
  getAll() {
    return db.get('links').value()
  }

  // Create a new link
  createLink(inviteCode, name, date) {
    const linkObject = {
      code: inviteCode,
      name: name,
      createdAt: date,
      totalUses: 0,
      usage: [],
    }

    this.state.push(linkObject)

		db.set('links', this.state).write()
  }

  // Update link usage for a specific date
  // updateLinkUsage(inviteCode, date) {
  //   // Get the right invite
  //   const invite = this.state.find((invite) => invite.code === inviteCode)

  //   // Check if the date already exist
  //   const currentDay = invite.usage.find((useDate) => useDate.date === date)

  //   if (currentDay) {
  //     // If the day exist add one on the counter
  //     currentDay.uses += 1
  //   } else {
  //     // If not, create the current day
  //     invite.usage.push({ date: date, uses: 1 })
  //   }
  // }
}

module.exports = InviteLinks
