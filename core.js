require('dotenv').config()

const fs = require('fs')
const { Client, Collection } = require('discord.js')

const bot = new Client()

// -------------------- Commands handler --------------------

bot.commands = new Collection()

const commandFiles = fs.readdirSync('./commands').filter((file) => file.endsWith('.js'))

for (const file of commandFiles) {
  const command = require(`./commands/${file}`)
  bot.commands.set(command.name, command)
}

// -------------------- Events handler --------------------

fs.readdir('./events/', (err, files) => {
  if (err) return console.error(err)

  files.forEach((file) => {
    const event = require(`./events/${file}`)
    let eventName = file.split('.')[0]
    bot.on(eventName, event.bind(null, bot))
  })
})

// -------------------- Login --------------------

bot.login(process.env.TOKEN)
