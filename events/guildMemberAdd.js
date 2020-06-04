const logSymbols = require('log-symbols')
const currentDate = require('../utils/dateGenerator')

module.exports = async (bot, member) => {
  console.log(logSymbols.success, `${member.user.username} joined the server!`)

  gInvLinkList = []
  dbInvLinkList = bot.inviteLinks.state

  member.guild
    .fetchInvites()
    .then((invites) =>
      invites.each((i) =>
        gInvLinkList.push({
          code: i.code,
          uses: i.uses,
        })
      )
    )
    .then(() => {
      gInvLinkList.forEach((gInvite) => {
        dbInvLinkList.forEach((dbInvite) => {
          console.log(gInvite.code, dbInvite.code)
          // if (gInvite.code != dbInvite.code) return

          // if (gInvite.uses != dbInvite.totalUses) {
          //   console.log(gInvite, dbInvite)
          // }
        })
      })
    })
    .then(() => console.log(gInvLinkList, dbInvLinkList))
}
