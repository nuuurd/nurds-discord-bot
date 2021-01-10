module.exports = {
	name: 'ping',
	description: 'Sends the ping of the bot.',
	args: true,
	execute(message, args) {
		const member = message.guild.member(message.author);

		var embedColor = member.displayColor;

		var ping = `${Date.now() - message.createdTimestamp}`
		message.channel.send({
			embed: {
				description: ':ping_pong: Pong! My ping is `' + ping + 'ms`',
				color: embedColor,
				timestamp: new Date(),
				footer: {
					text: "bot made by nurd#0388"
				}
			}
		});
	},
};