const db = require("quick.db")
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const  config = require("../../config.json")

module.exports = {
  name: "removecustomcommand",
  category: 'config',
  aliases: ["delcmd", "ccr", "ccd"],
  usage: "delcmd <cmd_name>",
  description: "Delete the custom commannd",
  run: (client, message, args) => {
    
if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send({content: ":x: You need `MANAGE_MESSAGES` perms to use this command"})
    let cmdname = args[0]
   const embed1 = new MessageEmbed()
            .setTitle('<:3663syntax:905793098129502238> No Name Provided')
            .setDescription(`> Provide A Command Name \n\n > **__Parameters:__** \n > \`.ccd [hypwreck]\`\n > <PREFIX>ccd [hypwreck]\n > \`.ccd [hypwreck]\` \n  > **__Usage:__** \n > \`.ccd[hypwreck]\` \n > \`.ccd [hi]\``)
           .setColor('#FFC942')
            const embed2 = new MessageEmbed()
            .setTitle('<:3663syntax:905793098129502238> No Name Provided')
            .setDescription(`> Provide A Valid Command Name \n\n > **__Parameters:__** \n > \`.ccd [hypwreck]\`\n > <PREFIX>ccd [hypwreck]\n > \`.ccd [hypwreck]\` \n  > **__Usage:__** \n > \`.ccd[hypwreck]\` \n > \`.ccd [hi]\``)
           .setColor('#FFC942')
    if(!cmdname) return message.channel.send({embeds: [embed1]})

    let database = db.get(`cmd_${message.guild.id}`)

    if(database) {
      let data = database.find(x => x.name === cmdname.toLowerCase())

      if(!data) return message.channel.send({embeds: [embed2]})


      let value = database.indexOf(data)
      delete database[value]

      var filter = database.filter(x => {
        return x != null && x != ''
      })

      db.set(`cmd_${message.guild.id}`, filter)
      return message.channel.send({embeds: [ new MessageEmbed().setDescription(`Deleted the **${cmdname}** Command!`).setColor(config.colour)]})


    } else {
     return message.channel.send({embeds: [embed2]})


  }
  }
}
 