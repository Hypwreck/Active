const { MessageEmbed } = require("discord.js");
const config = require('../../config.json');
module.exports = {
    name: "ping",
    category: "misc",
    description: "Check Bots Ping",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    run: async (client, message) => {
  
    const timestamp = (message.editedTimestamp) ? message.editedTimestamp : message.createdTimestamp; // Check if edited
    const latency = `\`\`\`ini\n[ ${Math.floor(message.createdTimestamp - timestamp)}ms ]\`\`\``;
    const apiLatency = `\`\`\`ini\n[ ${Math.round(message.client.ws.ping)}ms ]\`\`\``;
      const embed = new MessageEmbed()
      .setTitle(`Pong`, client.user.displayAvatarURL({ dynamic: true }))
      .setDescription('')
      .addField('Latency', latency, true)
      .addField('API Latency', apiLatency, true)
      .setColor(config.colour)
      .setThumbnail(client.user.displayAvatarURL())
      .setTimestamp();
    message.channel.send({embeds: [embed]});
  }
};
