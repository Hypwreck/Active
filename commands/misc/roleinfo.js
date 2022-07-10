const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const config = require("../../config.json");
module.exports = {
  name: "roleinfo",
  description: "shows stats of the mentioned role",
  usage: "roleinfo <role mention/role id>",
  aliases: ["rinfo", "rolei"],
  category: "roleinfo",
  run: async (client, message, args) => {
    
    if (!message.member.permissions.has('MANAGE_ROLES')){
        const perm = new Discord.MessageEmbed().setDescription("You dont have the Required Permission \`[Manage Roles]\`").setColor(config.errcolor)
        return message.reply({ embeds: [perm]})
    }
    let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase());
        const embed = new Discord.MessageEmbed().setDescription("Please Enter A Valid Role!").setColor(config.errcolor)
    if (!role) return message.channel.send({embeds: [embed]});
    const status = {
      false: "No",
      true: "Yes"
    };
    const permissions = role.permissions.toArray().map(perm => {
      return perm
        .toLowerCase()
        .replace(/_/g, " ")
        .replace(/\w\S*/g, txt => {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    });

    let roleembed = new MessageEmbed()
      .setColor(role.hexColor)
      .setTitle(`${role.name}`)
      .setThumbnail(message.guild.iconURL())
      .addField("> **ID**", `> \`${role.id}\``, true)
      .addField("> **Hex**", `> \`${role.hexColor}\``, true)
      .addField("> **Color**", `> \`${role.color}\``)
      .addField("> **Members**", `> \`${role.members.size}\``, true)
      .addField("> **Position**", `> \`${role.position}\``, true)
      .addField("**Permissions**", `> **\`${permissions.join(", ")}\`**`)
      .addField(" **Mentionable**", ` \`${status[role.mentionable]}\``)
      .setFooter(
        message.member.displayName,
        message.author.displayAvatarURL(),
        true
      )
      .setTimestamp();

    message.channel.send({ embeds: [roleembed] });
  }
};