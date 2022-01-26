const Discord = require('discord.js');
const { MessageEmbed, Intents, MessageActionRow, MessageButton } = require('discord.js')
const client = new Discord.Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_VOICE_STATES]
});
const { DiscordTogether } = require('discord-together');
const config = require('./config.json')
const express = require('express')
const app = express()
const db = require('quick.db')
app.get('/', function (req, res) {
  res.send('Active is now active.')
})
const cooldowns = new Discord.Collection(); 
app.listen(3000)
    client.guilds.cache.forEach(guild => {
  console.log(`${guild.name} | ${guild.id}`);
})

    //Game
    let statuses = [`${client.guilds.cache.size} Servers`, `Prefix ${config.prefix}`];
    setInterval(function() {
  		let status = statuses[Math.floor(Math.random()*statuses.length)];
  		client.user.setActivity(status, {type: "WATCHING", text: "Youtube Together"});
  	}, 20000)

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();


client.queue = new Map()
process.on('unhandledRejection', console.error);
["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});
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

 

console.log('Bot Is Online')
client.login(config.token || process.env.token);
