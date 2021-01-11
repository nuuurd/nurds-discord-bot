module.exports = {
	name: 'trivia',
	description: 'Trivia bot!',
	args: true,
	execute(message, args) {
		const member = message.guild.member(message.author);

		var embedColor = member.displayColor;

		const filter = (reaction) => {
			return reaction.emoji.name === '👋';
		};

		message.channel.send({
			embed: {
				description: 'React to this message to join the trivia game!',
				color: embedColor
			}
		}).then(sentMessage => {
			sentMessage.react('👋');
			sentMessage.awaitReactions(filter, { max: 100, time: 5000, errors: ['time'] })
				.then(collected => console.log(collected.size))
				.catch(collected => {
					console.log(`${collected.size}`);
					message.channel.send(`${collected.size} reacted.`);
			})
		}).catch(error => {
			console.error(error);
		});
	}
};