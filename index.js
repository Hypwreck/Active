const Discord = require('discord.js');
const { Client, Intents, Collection, MessageEmbed } = require('discord.js');
const { DiscordTogether } = require('discord-together');
const config = require('./config.json');
const db = require('quick.db');
const client = new Discord.Client({
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
    intents: [
                Intents.FLAGS.GUILDS,
                Intents.FLAGS.GUILD_MESSAGES, 
                Intents.FLAGS.GUILD_MEMBERS, 
                Intents.FLAGS.GUILD_VOICE_STATES,
                Intents.FLAGS.GUILD_PRESENCES
            ],
    presence: {
      status: "online"
    }
});
/* Activity */
let statuses = ['Youtube Together', `Prefix ${config.prefix}`];
    setInterval(function() {
  		let status = statuses[Math.floor(Math.random()*statuses.length)];
  		client.user.setActivity(status, {type: "WATCHING"});
  	}, 20000)
// --------------
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

["command", "ready"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});
client.queue = new Map()
process.on('unhandledRejection', console.error);

  
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
   const mention = new RegExp(`^<@!?${client.user.id}>( |)$`);
      if (message.content.match(mention)) {
        const embed = new MessageEmbed()
          .setColor(config.colour)
          .setDescription(`**› My prefix in this server is \`${prefix}\`**\n**› You can see my all commands type \`${prefix}\`help**`);
        message.channel.send({embeds: [embed]})
      };
  
    if (!message.content.startsWith(prefix)) return;
  
    if (!message.member)
      message.member = message.guild.fetchMember(message);
  
    const args = message.content
      .slice(prefix.length)
      .trim()
      .split(/ +/g);
    const cmd = args.shift().toLowerCase();
    let cmdx = db.get(`cmd_${message.guild.id}`)

    if(cmdx) {
      let cmdy = cmdx.find(x => x.name === cmd)
      if(cmdy) message.channel.send({content: cmdy.responce})
    }
    if (cmd.length === 0) return;
  
    let command = client.commands.get(cmd);
  
    if (!command) command = client.commands.get(client.aliases.get(cmd));
  
    if (command) command.run(client, message, args);
  });
client.login(process.env.token || config.token);