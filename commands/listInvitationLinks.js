const logSymbols = require('log-symbols')
const Invitations = require('../models/invitations')

module.exports = {
  name: 'listInvitationLinks',
  aliases: ['listInv', 'linv'],
  args: false,

  async execute(bot, message, args) {
    message.delete()

    let linkList = ["**Here's all the links you've created with me**"]

    Invitations.getAll().forEach((invite) => {
      linkList.push(`${invite.name} - ${invite.code}`)
    })

    message.channel.send(linkList.join('\n'))
  },
}
