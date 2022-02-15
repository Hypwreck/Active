const { MessageEmbed } = require('discord.js');
const config = require('../../config.json');
module.exports = {
	name: 'ping',
	category: 'fun',
	description: 'Returns Latency and API Ping',
	cooldown: 10000,
	run: async (client, message, args) => {
		const msg = await message.channel.send({content:'Pinging...'});
		const Embed = new MessageEmbed()
			.setTitle('Pong!')
			.setAuthor(`${message.author.username}`, message.author.displayAvatarURL())
			.setDescription(
				`⌛ Latency is ${Math.floor(
					msg.createdTimestamp - message.createdTimestamp,
				)}ms\n⏲️ API Ping is ${Math.round(client.ws.ping)}`,
			)
			.setColor(config.colour);
		await msg.edit('\u200b');
		return msg.edit({embeds: [Embed]});
	},
};
