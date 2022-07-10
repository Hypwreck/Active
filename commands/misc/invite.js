const { MessageEmbed,  MessageButton, MessageActionRow } = require("discord.js");
const config = require("../../config.json")
module.exports = {
    name: "invite",
    description: "To invite the bot to your servers.",
    aliases: ["inv"],
    category: "misc",

    run: async (client, message, args) => {
      const channelemb = new MessageEmbed()
      .setTitle(`Invite ${client.user.username}`)
      .setDescription("> `\`📬 Check Your DMs `\`")
      .setColor(config.colour)
message.channel.send({embeds: [channelemb]})
        const FirstEmbed = new MessageEmbed()
        .setTitle(`Invite ${client.user.username}`)
        .setDescription(`> **❓ __Who is ${client.user.username}__**
         > Answer: ${client.user.username} is a Discord Activities and fun bot I hope you like it!. \n
         > **❓ __How to invite ${client.user.username}?__**
         > Answer: Click On The Following Button.
        > Developed By [Hypwreck](https://github.com/Hypwreck/).`)
        .setColor(config.colour)
        .setFooter(`Thanks For Using ${client.user.username}!`, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp();

        const invite = new MessageButton()
        .setStyle("LINK")
        .setLabel("Invite")
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`)

        message.author.send({embeds: [FirstEmbed], components: [new MessageActionRow().addComponents(invite)]  })

    }
}; 