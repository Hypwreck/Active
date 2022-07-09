const Discord = require('discord.js')
 const config = require('../../config.json')
module.exports = {
    name: "membercount",
    category: 'misc',
    aliases: [ "mc" ],
    description: "Membercount",
 	run: async (client, message, args) => {
        const embed =  new Discord.MessageEmbed()
        .setColor(config.colour)
        .setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL()})
.setDescription(`Members \n \`${message.guild.memberCount}\``)
.setTimestamp()
message.channel.send({embeds: [embed]})
    }
}

//smth