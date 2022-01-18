 const db = require("quick.db")
const { MessageEmbed } = require("discord.js")
const config  = require("../../config.json")

module.exports = {
    
        name: "setprefix",
        description: "Chnage/Know The server's Prefix or the Global Prefix",
        usage: ".prefix <new prefix/reset>",
        category: 'Misc',
        aliases: ["prefix"],
    run: async (client, message, args) => {
      const embed5 = new MessageEmbed()
      .setTitle(':x: Command got ERRORED')
      .setDescription("> You can not set prefix a double argument")
     .setColor('#FFC942')
      const embed1 = new MessageEmbed()
      .setTitle('✅ Command Successfully Worked')
      .setDescription(`> Prefix Setted to \`\`${config.prefix}\`\``)
     .setColor('BLURPLE')
     const embed2 = new MessageEmbed()
     .setTitle('Command Successfully Worked')
     .setDescription(`> Done ✅ | Bot Prefix Set to ${args[0]}`)
    .setColor('BLURPLE')
        let option = args[0];

            
     if(!message.member.permissions.has("MANAGE_GUILD")) {
                return message.channel.send({content: "You are not allowed or do not have permission to change prefix"})
              }
            
            if(!option) {
                prefix = db.fetch(`prefix_${message.guild.id}`)
                if (!prefix) prefix = config.prefix;
                const embed0 = new MessageEmbed()
                .setTitle('No Prefix Provided')
                .setDescription(`> **__Prefix of \`\`${message.guild.name}\`\`:__** \`\`\`${prefix}\`\`\`\n > Provide A Prefix \n\n > **__Parameters:__** \n > \`\`\`<prefix>prefix <Your New Prefix>\`\`\` \n > **__Usage:__** \n > \`\`\`<prefix>prefix <Your New Prefix>\`\`\``)
               .setColor('#FFC942')
                if (!args[0]) return message.channel.send({embeds: [embed0]})
            }


            
            if(args[1]) {
              return message.channel.send({embeds: [embed5]})
            }
            
            if(args.join("") === config.prefix) {
              db.delete(`prefix_${message.guild.id}`)
             return await message.channel.send({embeds: [embed1]})
            }
            
            db.set(`prefix_${message.guild.id}`, args[0])
          await message.channel.send({embeds: [embed2]})
            

        }
        
    }
