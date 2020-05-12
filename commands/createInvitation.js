const logSymbols = require('log-symbols')
const Invitations = require('../models/invitations')

module.exports = {
  name: 'createInvitation',
  aliases: ['createInv', 'cinv'],
  args: true,

  async execute(bot, message, args) {
    message.delete()

    message.channel
      .createInvite({
        maxAge: 0, // Perma link
        maxUses: 0, // Unlimited users
        reason: `ANALYTICS: ${args[0]} invitation link`,
      })
      .then((invite) => {
        Invitations.create(invite.code, args[0])
        console.log(logSymbols.success, `New invitation created for ${args[0]} with the code: ${invite.code}`)
      })
      .catch(console.error)
  },
}
