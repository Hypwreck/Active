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
            .setTitle("**  = STATISTICS =**")
            .addField("**Mem Usage  ::**", `**${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB**`)
            .addField("**Uptime**", `\`${duration}\``).setColor(config.colour)
        message.channel.send({embeds: [statEmbed]})
  }
}