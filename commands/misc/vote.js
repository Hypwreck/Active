const Discord = require("discord.js");
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')
const config = require('../../config.json');
module.exports = {
  name: "vote",
  category: "misc",
  description: "Vote For Active",

  run: async (client, message) => {
    const embed = new Discord.MessageEmbed().setAuthor(message.author.tag, message.author.displayAvatarURL()).setThumbnail(client.user.displayAvatarURL()).setDescription(`> \`Disbotlist.xyz\` \n >  \`Top.gg\` (Havent Approved Yet)`).setColor(config.colour).setFooter('Thanks For Voting!')
    const row = new MessageActionRow().addComponents( new MessageButton().setStyle('LINK').setEmoji('931599674362691584').setURL('https://disbotlist.xyz/bot/931555499105730590/vote'), new MessageButton().setStyle('LINK').setEmoji('918280202398875758').setURL('https://disbotlist.xyz/bot/931555499105730590/vote').setDisabled(true))
    message.reply({embeds: [embed], components: [row]})
  }
}