const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const config = require('../../config.json');
const db = require('quick.db')
module.exports = {
    name: "help",
    category: 'Misc',
    aliases: [ "h" ],
    description: "Return all commands, or one specific command",
 	run: async (client, message, args) => {
    if(args[0]){
     let prefix = db.fetch(`prefix_${message.guild.id}`)
        const cmd = client.commands.get(args[0]);
         if(!cmd) return message.reply({ content: "> Cant Find a Command Like This!"}).then(msg => msg.delete(100000));
        let cm = [];
         cm.push(`> Name : \`\`${cmd.name}\`\``)
         if(cmd.description) cm.push(`> Description : \`\`${cmd.description}\`\``);
         if(cmd.aliases) cm.push(`> Aliases : \`\`${cmd.aliases.join( )}\`\``);
         if(cmd.usage) cm.push(`> Usage : \`\`${prefix+cmd.name+" "+cmd.usage}\`\``);
 
      const embed10 = new MessageEmbed()
           .setAuthor(`Information of The Command : ${cmd.name.toUpperCase()} `, message.author.avatarURL())
          .setThumbnail(message.guild.iconURL())
           .setDescription(`${cm.join("\n")}`)
           .setColor(config.colour)
           .setFooter(`Requested by ${message.author.username}`).setTimestamp()
           return message.channel.send({embeds: [embed10]});
 
 
     } else {
  const embed = new MessageEmbed()
    .setTitle(`${client.user.username} Help`)



.setDescription(` Hi **<@${message.author.id}>**, My name is <@${client.user.id}>. \n I am an Advanced Open Source **Activity Discord Bot** With Buttons. Made By [Hypwreck](https://github.com/Hypwreck).`)
    
    
.setThumbnail(client.user.displayAvatarURL())
    .setColor(config.colour)
    .setTimestamp()
    .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                
    let but1 = new MessageButton().setCustomId("home").setEmoji("🏘").setStyle("SUCCESS")
  
    let but2 = new MessageButton().setCustomId("misc").setEmoji("905799433940242452").setStyle("SECONDARY")

     let but3 = new MessageButton().setCustomId("fun").setEmoji("🎉").setStyle("SECONDARY");
     let but4 = new MessageButton().setCustomId("activity").setEmoji("926013227513544795").setStyle("SECONDARY"); 

     let _commands;
     let editEmbed = new MessageEmbed();
     
    const m = await message.reply({ embeds: [embed], components: [new MessageActionRow().addComponents(but1, but2, but3, but4)]});

    const collector = m.createMessageComponentCollector({
      filter: (b) => {
      if(b.user.id === message.author.id) return true;
       else {
     b.reply({ ephemeral: true, content: `Only **${message.author.tag}** can use this button, if you want then you've to run the command again.`}); return false;
           };
      },
      time : 60000,
      idle: 60000/2
    });
    collector.on("end", async () => {
		 if(!m) return;
        await m.edit({ components: [new MessageActionRow().addComponents(but1.setDisabled(true), but2.setDisabled(true), but3.setDisabled(true),but4.setDisabled(true) )]}).catch(() => {});
    });
    collector.on('collect', async (b) => {
       if(!b.deferred) await b.deferUpdate()
        if(b.customId === "home") {
           if(!m) return;
          return await m.edit({ embeds: [embed], components: [new MessageActionRow().addComponents(but1.setDisabled(true), but2.setDisabled(false), but3.setDisabled(false), but4.setDisabled(false))] }) 
        }
        if(b.customId === "misc") {
         _commands = client.commands.filter((x) => x.category && x.category === "misc").map((x) => `\`${x.name}\``);
             editEmbed.setColor("GREEN").setDescription(_commands.join(", ")).setTitle("Misc Commands").setFooter(`Total ${_commands.length} Misc commands.`);
           if(!m) return;
           return await m.edit({ embeds: [editEmbed], components: [new MessageActionRow().addComponents(but1.setDisabled(false), but2.setDisabled(true), but3.setDisabled(false), but4.setDisabled(false) )] })
        }
      if(b.customId == "fun") {
         _commands = client.commands.filter((x) => x.category && x.category === "fun").map((x) => `\`${x.name}\``);
             editEmbed.setColor("PURPLE").setDescription(_commands.join(", ")).setTitle("Fun Commands").setFooter(`Total ${_commands.length} Fun commands.`)
          
       return await m.edit({ embeds: [editEmbed], components: [new MessageActionRow().addComponents(but1.setDisabled(false), but2.setDisabled(false), but3.setDisabled(true), but4.setDisabled(false))]}) 
         
        } if(b.customId == "activity") {
         _commands = client.commands.filter((x) => x.category && x.category === "activity").map((x) => `\`${x.name}\``);
             editEmbed.setColor("RED").setDescription(_commands.join(", ")).setTitle("Activity Commands").setFooter(`Total ${_commands.length} Activity commands.`)
          
       return await m.edit({ embeds: [editEmbed], components: [new MessageActionRow().addComponents(but1.setDisabled(false), but2.setDisabled(false), but3.setDisabled(false), but4.setDisabled(true))]}) 
         
        }
     });
   }
  }
 }
