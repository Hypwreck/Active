const Discord = require("discord.js");
const moment = require("moment");
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")
const config = require('../../config.json');
module.exports = {
    name: "userinfo",
    category: "misc",
    description: "Get info about your account or mentioned user's account!",
    aliases: ["ui", "whois"],
    run: async (client, message, args) => {

        const permissions = {
            "ADMINISTRATOR": "Administrator",
            "MANAGE_GUILD": "Manage Server",
            "MANAGE_ROLES": "Manage Roles",
            "MANAGE_CHANNELS": "Manage Channels",
            "KICK_MEMBERS": "Kick Members",
            "BAN_MEMBERS": "Ban Members",
            "MANAGE_NICKNAMES": "Manage Nicknames",
            "MANAGE_EMOJIS": "Manage Emojis",
            "MANAGE_WEBHOOKS": "Manage Webhooks",
            "MANAGE_MESSAGES": "Manage Messages",
            "MENTION_EVERYONE": "Mention Everyone"
        }
        const mention = message.mentions.members.first() || message.member;
        const nick = mention.nickname === null ? "None" : mention.nickname;
        const roles = mention.roles.cache.get === "" ? "None" : mention.roles.cache.get;
        const usericon = mention.user.avatarURL;
        const mentionPermissions = mention.permissions.toArray() === null ? "None" : mention.permissions.toArray();
        const finalPermissions = [];
        for (const permission in permissions) {
            if (mentionPermissions.includes(permission)) finalPermissions.push(`${permissions[permission]}`);
            else;
        }
        var flags = {
            "": "None",
            "DISCORD_EMPLOYEE": "Discord Employee",
            "DISCORD_PARTNER": "Discord Partner",
            "BUGHUNTER_LEVEL_1": "Bug Hunter (Level 1)",
            "BUGHUNTER_LEVEL_2": "Bug Hunter (Level 2)",
            "HYPESQUAD_EVENTS": "Hypesquad Events",
            "HOUSE_BRILLIANCE": "HypeSquad Brilliance",
            "HOUSE_BRAVERY": "HypeSquad Bravery",
            "HOUSE_BALANCE": "HypeSquad Balance",
            "EARLY_SUPPORTER": "Early Supporter",
            "TEAM_USER": "Team User",
            "VERIFIED_BOT": "Verified Bot",
            "EARLY_VERIFIED_DEVELOPER": "Early Verified Bot Developer"
        };
        
        var bot = {
            "true": "Bot",
            "false": "Member"
        };

 let link = `https://discord.com/users/${mention.user.id}`
   const row = new MessageActionRow().addComponents( new MessageButton().setEmoji("🔎").setStyle("LINK").setURL(link))

   const status = {
    online: "🟢 Online",
    idle: "🟡 Idle",
    dnd: "🔴 Do Not Disturb",
    offline: ":black_circle: Offline/Invisible"
};

let user =
message.mentions.members.first() ||
message.guild.members.cache.get(args[0]) ||
message.member;  


   const whois = new Discord.MessageEmbed()
        .setAuthor({ name:`User Info`, iconURL: mention.user.avatarURL()})
        .setThumbnail(usericon)
        .addField(`General Info`, `> Name: \`${mention.user.username}\` \n> Tag: \`${mention.user.discriminator}\` \n> Nickname: \`${nick}\` \n > Status: ${status[mention.presence.status]}`, true)
        .addField(`Overview`, `> Badges: \`${flags[mention.user.flags.toArray().join(", ")]}\`\n> User: \`${bot[mention.user.bot]}\``)
        .addField(`Roles:`,`  <@&${mention._roles.join(">  <@&")}> `||
        "No Roles!",
      true)
        .addField(`Key Permissions:`, ` \`${finalPermissions.join(', ')}\``)
        .addField(`Misc Info`, `> Acc Created on: \n> \`${moment(mention.user.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss A")}\` \n> Joined This Server on: \n> \`${moment(mention.joinedAt).format("dddd, MMMM Do YYYY, h:mm:ss A")}\``)
        .setThumbnail(mention.user.avatarURL())
        .setFooter(`ID: ${mention.user.id}`, mention.user.avatarURL())
        .setTimestamp()
        .setColor(mention.displayHexColor);
        message.channel.send({ embeds: [whois], components: [row] })

    }
  
}
