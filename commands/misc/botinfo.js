const Discord = require("discord.js");
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')
const config = require('../../config.json');
module.exports = {
  name: "botinfo",
  category: "misc",
  description: "Bot Info",
  run: async (client, message) => {

const row = new MessageActionRow()
			.addComponents(
    new MessageButton()
  .setEmoji('928186089947168778')
    .setStyle("LINK")
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot`),
    new MessageButton()
    
        .setEmoji('930470585589436418')
    .setStyle("LINK")  .setURL("https://discord.gg/8XXfee8Tth")
			);

      const mainPage = new MessageEmbed()
            .setAuthor({ name: 'Active', iconURL: client.user.displayAvatarURL()})
            .setThumbnail(client.user.displayAvatarURL())
            .setColor(config.colour)
            .addField('Creator', '[\`Hypwreck#5356\`](https://github.com/Hypwreck/)', true)
        .addField('Servers', `\`${client.guilds.cache.size}\``)
            .setDescription(`> Active is created by [Hypwreck](https://github.com/Hypwreck/). He made this bot for the people who doesnt know about these activities and wants to make some thing unique. Hope you enjoy using Active!`)
    message.channel.send({embeds: [mainPage], components: [row]})
    }
}

//yo