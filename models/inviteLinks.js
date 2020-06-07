const Datastore = require('nedb-promise')
const links = new Datastore({filename: './data/invitations.json', autoload: true})

class InviteLinks {
  constructor() {
    this.state = []
		this.getAll().then(links => {this.state = links})
  }

  // Init the local state
  async getAll() {
    return await links.find({})
  }

  // Create a new link
  async createLink(inviteCode, name, date) {
    const linkObject = {
      code: inviteCode,
      name: name,
      createdAt: date,
      totalUses: 0,
      usage: [],
    }

    this.state.push(linkObject)

		links.insert(linkObject)
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
