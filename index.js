const Discord = require('discord.js');
const { Client, Intents, Collection } = require('discord.js');
const { DiscordTogether } = require('discord-together');
const config = require('./config.json')
const express = require('express')
const app = express()
const db = require('quick.db')
const colors = require("colors");
const client = new Discord.Client({
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
    intents: [ 
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_BANS,
        Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
        Discord.Intents.FLAGS.GUILD_INTEGRATIONS,
        Discord.Intents.FLAGS.GUILD_WEBHOOKS,
        Discord.Intents.FLAGS.GUILD_INVITES,
        Discord.Intents.FLAGS.GUILD_VOICE_STATES,
        Discord.Intents.FLAGS.GUILD_PRESENCES,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Discord.Intents.FLAGS.GUILD_MESSAGE_TYPING,
        Discord.Intents.FLAGS.DIRECT_MESSAGES,
        Discord.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        Discord.Intents.FLAGS.DIRECT_MESSAGE_TYPING
    ],
    presence: {
      status: "online"
    }
});

const port = 3000

app.get('/', (req, res) => {
  res.send('Active is now active.')
})

app.listen(port, () => {
  console.log(`Listenin to ${port}`)
})

client.discordTogether = new DiscordTogether(client);
client.commands = new Discord.Collection();
client.slash = new Discord.Collection();
client.aliases = new Discord.Collection();
require('discord-logs')(client);
require('colors');

["commands", "events", "slash"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

process.on('unhandledRejection', (err) => {
	console.error(`Unhandled Rejection: ${err}`);
  });
  
  process.on('uncaughtException', (err) => {
	console.error(`Uncaught Exception: ${err}`);
  });
  

// Db for Prefix
client.on("messageCreate", async message => {
 let prefix;
        try {
            let fetched = await db.fetch(`prefix_${message.guild.id}`);
            if (fetched == null) {
                prefix = config.prefix
            } else {
                prefix = fetched
            }
        
            } catch {
            prefix = config.prefix
    };


  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;

  if (!message.member)
    message.member = message.guild.fetchMember(message);

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();
if (!cmd) return
    if (cmd.inVoiceChannel && !message.member.voice.channel) {
        return message.channel.send({content: `| You must be in a voice channel!`})
    }
  if (cmd.length === 0) return;

  let command = client.commands.get(cmd);

  if (!command) command = client.commands.get(client.aliases.get(cmd));

  if (command) command.run(client, message, args);
});


 

client.login(config.token || process.env.token);
