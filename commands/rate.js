module.exports = {
	name: 'rate',
	description: 'rates user',
	args: true,
	execute(message, args) {
		const member = message.guild.member(message.author);

		var embedColor = member.displayColor;

		var rateCommandMessage = message.content;
		var rateUser = rateCommandMessage.replace(/nrate /g, '');

		const rateNum = Math.floor(Math.random() * 10) + 1;

		message.channel.send({
			embed: {
				description: 'Hmm, I would rate `' + rateUser + '` as ' + rateNum + '/10',
				color: embedColor
			}
		});
	}
};