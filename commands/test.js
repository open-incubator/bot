module.exports = {
  name: 'test',

  async execute(bot, message) {
    message.delete()
    console.log(bot.inviteLinks)

    bot.emit('guildMemberAdd', message.member)
  },
}
