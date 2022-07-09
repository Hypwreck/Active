const Discord = require("discord.js");
const moment = require("moment")
require("moment-duration-format")
const config = require('../../config.json');
module.exports = {
  name: "uptime",
  category: "misc",
  description: "Check Uptime",

  run: async (client, message) => {
const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        const statEmbed = new Discord.MessageEmbed()
        .setAuthor({name: `${client.user.username}`, iconURL: client.user.displayAvatarURL()})
            .setDescription(`> I've been online for :\`${duration}\``).setColor(config.colour)
        message.channel.send({embeds: [statEmbed]})
  }
}