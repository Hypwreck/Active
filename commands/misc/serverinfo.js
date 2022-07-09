const { Client, Message, MessageEmbed } = require("discord.js");
const config = require('../../config.json')
const moment = require("moment")
module.exports = {
    name: "serverinfo",
    aliases: ["si"],
    category: 'misc',
    description:"Shows Serverinfo",
run : async (client, message, args) => {
    function trimArray(arr, maxLen = 25) {
        if (arr.array().length > maxLen) {
          const len = arr.array().length - maxLen;
          arr = arr
            .array()
            .sort((a, b) => b.rawPosition - a.rawPosition)
            .slice(0, maxLen);
          arr.map((role) => `<@&${role.id}>`);
          arr.push(`${len} more...`);
        }
        return arr.join(", ");
      }
      await message.guild.members.fetch();
      function emojitrimarray(arr, maxLen = 20) {
        if (arr.length > maxLen) {
          const len = arr.length - maxLen;
          arr = arr.slice(0, maxLen);
          arr.push(`${len} more...`);
        }
        return arr.join(", ");
      }
      let boosts = message.guild.premiumSubscriptionCount;
      var boostlevel = 0;
      if (boosts >= 2) boostlevel = "1";
      if (boosts >= 15) boostlevel = "2";
      if (boosts >= 30) boostlevel = "3 / ∞";
      let rolemap = message.guild.roles.cache
      .sort((a, b) => b.position - a.position)
      .map(r => r)
      .join(",");
      if (rolemap.length > 1024) rolemap = "To many roles to display";
      if (!rolemap) rolemap = "No roles";
      let srv = new MessageEmbed()
      .setAuthor(
         message.guild.name,
        message.guild.iconURL({
          dynamic: true,
        })
      )
      .setColor("BLURPLE")
      .addField(
        "Owner",
        `<@${(await message.guild.fetchOwner()).id}>`,
        true
      )
      .addField(
        "Created On" , "`" +
          moment(message.guild.createdTimestamp).format("DD/MM/YYYY") +
          "`\n" +
          "`" +
          moment(message.guild.createdTimestamp).format("hh:mm:ss") +
          "`",
        true
      )
      .addField(
        "You Joined",
        "`" +
          moment(message.member.joinedTimestamp).format("DD/MM/YYYY") +
          "`\n" +
          "`" +
          moment(message.member.joinedTimestamp).format("hh:mm:ss") +
          "`",
        true
      )

      .addField(
        "All Channels" , "`" + message.guild.channels.cache.size + "`",
        true
      )
      .addField(
        "Text Channels" , "`" +
          message.guild.channels.cache.filter(
            (channel) => channel.type == "text"
          ).size +
          "`",
        true
      )
      .addField(
        "Voice Channels" , "`" +
          message.guild.channels.cache.filter(
            (channel) => channel.type == "voice"
          ).size +
          "`",
        true
      )

      .addField(
        "Total Users", "`" + message.guild.memberCount + "`",
        true
      )
      .addField(
        "Total Members Online", "`" +
          message.guild.members.cache.filter((member) => !member.user.bot)
            .size +
          "`",
        true
      )
      .addField(
        "Total Bots", "`" +
          message.guild.members.cache.filter((member) => member.user.bot)
            .size +
          "`",
        true
      )


      .addField(
        "Total Boosts",
        "`" + message.guild.premiumSubscriptionCount + "`",
        true
      )
      .addField("Boost-Level", "`" + boostlevel + "`", true)

      .addField(
        `[${message.guild.emojis.cache.size}] Emojis: `,
        "> " + message.guild.emojis.cache.size < 20
          ? message.guild.emojis.cache.map((emoji) => `${emoji}`).join(", ")
          : message.guild.emojis.cache.size > 20
          ? emojitrimarray(
              message.guild.emojis.cache.map((emoji) => `${emoji}`)
            ).substr(0, 1024)
          : "No Emojis"
      )
      .addField(
        `[${message.guild.roles.cache.size}] Roles: `,
       `${rolemap}`
      , true)
      
      .setThumbnail(
        message.guild.iconURL({
          dynamic: true,
        })
      )
      .setTimestamp()
      .setFooter(
        "ID: " + message.guild.id,
        message.guild.iconURL({
          dynamic: true,
        })
      )
      message.channel.send({embeds : [srv]});
 
  },
};
   