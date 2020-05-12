require('dotenv').config()

const { Client, Collection } = require('discord.js')

const bot = new Client()

// -------------------- Commands/Events handling --------------------

const cmds = ['aliases', 'commands']
const handlers = ['commands', 'events']

cmds.forEach((x) => (bot[x] = new Collection()))
handlers.forEach((x) => require(`./handlers/${x}`)(bot))

// -------------------- Login --------------------

bot.login(process.env.TOKEN)
