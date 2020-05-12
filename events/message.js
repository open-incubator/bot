const { prefix } = require('../config.json')

module.exports = async (bot, message) => {
  if (message.author.bot) return // Ignore all bots
  if (message.author.id === bot.user.id) return // Ignore bot itself
  if (message.channel.type === 'dm') return // Ignore private messages

  // -------------------- Command prefix --------------------

  if (!message.content.startsWith(prefix)) return // Ignore messages not starting with the prefix (in config.json)

  // Our standard argument/command name definition.
  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const commandName = args.shift().toLowerCase()

  // Grab the command data from the client Collection
  const cmd =
    bot.commands.get(commandName) || bot.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName))

  if (!cmd) return // If that command doesn't exist, silently exit and do nothing

  // -------------------- Command execution --------------------

  cmd.execute(bot, message, args) // Run the command
}
