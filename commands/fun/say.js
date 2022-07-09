const Discord = require("discord.js");
module.exports = {
  name: "say",
  category: "fun",
  description: "Make the bot say your message",
  botPerms: ["MANAGE_MESSAGES"],
  run: async (client, message) => {
    const embed1 = new Discord.MessageEmbed()
        .setTitle('No Description Provided')
        .setDescription(`> Provide Some Description For The Command! \n\n > **__Parameters:__** \n > \`<PREFIX>say [<description>]\` \n > \`<PREFIX>say[<description>]\` \n > \`.say [<description>]\` \n  > **__Usage:__** \n > \`.say hello Sir I Am Hypwreck.\``)
       .setColor('#FFC942')
       .setFooter(`Requested by ${message.author.username}`)
                   .setTimestamp()
       let args = message.content.split(" ").slice(1);
        let saymessage = args.join(" ")
        if(!saymessage) return message.reply({embeds: [embed1]})
        if (message.content.includes("@everyone") || message.content.includes("@here") || message.mentions.everyone) return message.channel.send({content: "You cant make me Ping Everyone/Here. It aint gonna Happen"}), message.delete();
     
        message.channel.send({content: `${saymessage}`}).cleanContent;
        message.delete();
  },
};