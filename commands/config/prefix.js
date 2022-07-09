 const db = require("quick.db")
const { MessageEmbed } = require("discord.js")
const config  = require("../../config.json")

module.exports = {
    
        name: "setprefix",
        description: "Chnage/Know The server's Prefix or the Global Prefix",
        usage: ".prefix <new prefix/reset>",
        category: 'config',
        aliases: ["prefix"],
    run: async (client, message, args) => {

      const embed1 = new MessageEmbed()
      .setTitle('✅ Command Successfully Worked')
      .setDescription(`> Prefix Setted to \`\`${config.prefix}\`\``)
     .setColor('BLURPLE')
     const embed2 = new MessageEmbed()
     .setTitle('Command Successfully Worked')
     .setDescription(`> Done ✅ | Bot Prefix Set to ${args[0]}`)
    .setColor('BLURPLE')

            
     if(!message.member.permissions.has("MANAGE_GUILD")) {
                return message.channel.send({content: "You are not allowed or do not have permission to change prefix"})
              }
              const pre = await args.join(" ")
              if (!pre[0]) {
                const embed = new MessageEmbed()
                  .setDescription("<:3663syntax:905793098129502238> Please give the prefix that you want to set!")
                  .setColor(config.colour)
                return message.reply({ embeds: [embed] });
              }
              if (pre[1]) {
                const embed = new MessageEmbed()
                  .setDescription("<:3523win11erroicon:905793112931172392> You can not set a prefix with a double argument")
                  .setColor(config.colour)
                return message.reply({ embeds: [embed] });
              }
              if (pre[0].length > 3) {
                const embed = new MessageEmbed()
                  .setDescription("<:3523win11erroicon:905793112931172392> You can not set a prefix with more than 3 characters")
                  .setColor(config.colour)
                return message.reply({ embeds: [embed] });
              }
            
            if(args.join("") === config.prefix) {
              db.delete(`prefix_${message.guild.id}`)
             return await message.channel.send({embeds: [embed1]})
            }
            
            db.set(`prefix_${message.guild.id}`, args[0])
          await message.channel.send({embeds: [embed2]})
            

        }
        
    }
