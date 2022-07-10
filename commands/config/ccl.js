const db = require("quick.db")
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const  config = require("../../config.json")
module.exports = {
  name: "customcommandlist",
  category: 'config',
  aliases: ["ccl"],
  usage: "ccl",
  description: "list guild custom commands",
  run: (client, message, args) => {
    if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send({content: ":x: You need `MANAGE_MESSAGES` perms to use this command"})
    
let database = db.get(`cmd_${message.guild.id}`)

      if(database && database.length || 'There are no custom commands') {
        let array =[]
        database.forEach(m => {
          array.push("`" + m.name + "`")
        })

     const embed = new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setDescription(`**Custom Commands** \n ${array.join(", ")}`).setColor(config.colour)
           message.channel.send({ embeds: [embed] })
    }
    
  }
}