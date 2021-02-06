const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
	const member = message.guild.member(message.author);

	var embedColor = member.displayColor;

	message.channel.send({
		embed: {
			description: 'Waiting...',
			color: embedColor
		}
	}).then(m => {
		var ping = m.createdTimestamp - message.createdTimestamp

		const newPingEmbed = new Discord.MessageEmbed()
			.setDescription(':ping_pong: Pong! My ping is `' + ping + 'ms`')
			.setColor(embedColor)
		m.edit(newPingEmbed)
	})
}

module.exports.help = {
	name: "ping",
	description: ""
}