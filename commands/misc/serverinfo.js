const Discord = require("discord.js");
const config = require('../../config.json')
module.exports = {
    name: "serverinfo",
    aliases: ["si"],
    category: 'misc',
    description:"Shows Serverinfo",
run : async (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setColor(
        "BLURPLE"
    )
    .setTitle("Server Info")
    .setImage(message.guild.iconURL)
    .setDescription(`${message.guild}'s information`)
    .addField("Owner", `> \`${message.guild.owner}\``)
    .addField("Member Count",`> \`${message.guild.memberCount}\``)
    .addField("Emoji Count", `> \`${message.guild.emojis.cache.size}\``)
    .addField("Roles Count", `> \`${message.guild.roles.cache.size}\``)
    

message.channel.send({embeds: [embed]})

}
}