const { MessageEmbed } = require('discord.js')
const { prefix } = require('../config.json')

module.exports = async (bot, message) => {
  if (message.author.bot) return // Ignore all bots
  if (message.author.id === bot.user.id) return // Ignore bot itself
  if (message.channel.type === 'dm') return // Ignore private messages

  // -------------------- Command prefix --------------------

  if (!message.content.startsWith(prefix)) return // Ignore messages not starting with the prefix (in config.json)

  // Our standard argument/command name definition.
  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase()

  // Grab the command data from the client Collection
  const cmd = bot.commands.get(command) || bot.commands.get(bot.aliases.get(command))

  if (!cmd) return // If that command doesn't exist, silently exit and do nothing

  // -------------------- Command execution --------------------

  cmd.run(bot, message, args) // Run the command
}
