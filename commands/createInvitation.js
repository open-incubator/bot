const logSymbols = require('log-symbols')
const { currentDate } = require('../utils/dateGenerator')

module.exports = {
  name: 'createInvitation',
  aliases: ['createInv', 'cinv'],
  args: true,

  async execute(bot, message, args) {
    message.delete()

    message.channel
      .createInvite({
        unique: true, // Create a new link each time
        maxAge: 0, // Perma link
        maxUses: 0, // Unlimited users
        reason: `ANALYTICS: ${args[0]} invitation link`,
      })
      .then((invite) => {
        bot.inviteLinks.createLink(invite.code, args[0], currentDate())
      })
      .catch(console.error)
  },
}
