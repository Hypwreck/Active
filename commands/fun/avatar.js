const config = require("../../config.json")
const Discord = require('discord.js');
module.exports = {
name: "avatar",
category: "fun",
aliases: ["av", "avat"],
description: "Get user profile picture.",
botPerms: ["SEND_MESSAGES", "ATTACH_FILES"],

run: async (client, message, args) => {

    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

const but = new Discord.MessageButton()
.setStyle('LINK')
.setLabel("PNG")
.setURL(
    member.user.displayAvatarURL({
      dynamic: true, format: "png", size: 4096 
    })
  )
  const but2 = new Discord.MessageButton()
.setStyle('LINK')
.setLabel("JPG")
.setURL(
    member.user.displayAvatarURL({
      dynamic: true, format: "jpg", size: 4096 
    })
  )
  const but3 = new Discord.MessageButton()
.setStyle('LINK')
.setLabel("WEBP")
.setURL(
    member.user.displayAvatarURL({
      dynamic: true, format: "webp", size: 4096 
    })
  )
 
const row = new Discord.MessageActionRow()
.addComponents(but, but2, but3)

    const embed = new Discord.MessageEmbed()
    .setColor(member.displayHexColor)
        .setTimestamp()
        .setAuthor({ name : `${member.user.tag}`, iconURL: member.user.displayAvatarURL()})
        .setTitle( `Avatar`)
        .setImage(member.user.displayAvatarURL({ dynamic: true, size: 4096 }))
        message.channel.send({ embeds: [embed], components: [row] }) 

}
};