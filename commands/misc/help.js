const config = require('../../config.json');
const Discord = require("discord.js");
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')
module.exports = {
  name: "help",
  category: "misc",
  description: "The Point Of Entry",

  run: async (client, message) => {
    message.channel.send({embeds: [new MessageEmbed().setAuthor(message.author.tag, message.author.displayAvatarURL()).setDescription('Active is discord bot with activities with buttons and its only made for fun purpose. I hope you enjoy and Join the support channel')
    .addField('Misc', '> \`help\`, \`ping\`, \`vote\`, \`Uptime\`, \`botinfo\`')                              .addField('Fun', '> \`Football\`, \`say\`,\`emojify\`') 
    .addField('Activity',  '> \`setprefix\`, \`activities\` \n\n __**List Of Activities In The Command**__\n > Betrayal\n > Youtube Together \n > Spellcast \n > Awkward \n > FishingTon \n > Chess In The Park \n > Checkers In The Park \n > Wordssnack \n > Lettertile \n > Puttparty')
   .setImage('https://i.ibb.co/9bd4cFm/notgovernmeadsnt.png')                                .setThumbnail(client.user.displayAvatarURL()).setColor(config.colour)], components:[new MessageActionRow()
			.addComponents(
    new MessageButton()
  .setEmoji('928186089947168778')
    .setStyle("LINK") .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot`), new MessageButton()
    
        .setEmoji('930470585589436418')
    .setStyle("LINK")  .setURL("https://discord.gg/FdAPpZXpJF")
			)]})
  }
}