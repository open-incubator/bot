module.exports = {
  name: 'ping',
  aliases: ['pong', 'play'],

  async execute(bot, message, args) {
    message.delete()

    message.channel.send('Pingging...').then((m) => {
      let ping = m.createdTimestamp - message.createdTimestamp

      const afterPing = `Pong! :ping_pong:\nBot Latency: \`${ping}ms\`, API Latency: \`${Math.round(bot.ws.ping)}ms\``

      m.edit(afterPing)
    })
  },
}
