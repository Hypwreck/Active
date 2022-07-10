const db = require("quick.db")
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const  config = require("../../config.json")
module.exports = {
  name: "customcommand",
  category: 'config',
  aliases: ["addcmd", "cc"],
  usage: "addcmd <cmd_name> <cmd_responce>",
  description: "add guild custom commands",
  run: (client, message, args) => {


    if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send({content: ":x: You need `MANAGE_MESSAGES` perms to use this command"})
   const embed1 = new MessageEmbed()
            .setTitle('<:3663syntax:905793098129502238> No Name Provided')
            .setDescription(`> Provide A Name For The Command \n\n > **__Parameters:__** \n > \`.cc [hypwreck] [Daddy]\`\n > <PREFIX>cc [hypwreck] [Daddy]\n > \`.cc [hypwreck] [Daddy]\` \n  > **__Usage:__** \n > \`.cc [hypwreck] [Daddy]\` \n > \`.cc [hi] [Hello]\``)
           .setColor('#FFC942')
            const embed2 = new MessageEmbed()
            .setTitle('<:3663syntax:905793098129502238> No Reply Provided')
            .setDescription(`> Provide A Reply For The Command \n\n > **__Parameters:__** \n > \`.cc [hypwreck] [Daddy]\`\n > <PREFIX>cc [hypwreck] [Daddy]\n > \`.cc [hypwreck] [Daddy]\` \n  > **__Usage:__** \n > \`.cc [hypwreck] [Daddy]\` \n > \`.cc [hi] [Hello]\``)
           .setColor('#FFC942')
    let cmdname = args[0]

    if(!cmdname) return message.channel.send({embeds: [embed1]})

    let cmdresponce = args.slice(1).join(" ")

    if(!cmdresponce)  return message.channel.send({embeds: [embed2]})


    let database = db.get(`cmd_${message.guild.id}`)

    if(database && database.find(x => x.name === cmdname.toLowerCase())) return message.channel.send({embeds:[ new MessageEmbed().setDescription(":x: This command name is already added in guild custom commands.").setColor('#FFC942')]})

    let data = {
      name: cmdname.toLowerCase(),
      responce: cmdresponce
    }

    db.push(`cmd_${message.guild.id}`, data)

    return message.channel.send({embeds: [new MessageEmbed().setDescription("Added **" + cmdname.toLowerCase() + "** as a custom command in guild.").setColor(config.colour)]})


  }
}