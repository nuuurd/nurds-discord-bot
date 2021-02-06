module.exports.run = async (bot, message, args) => {
	const member = message.guild.member(message.author);

	var embedColor = member.displayColor;

	var rollNum = Math.floor(Math.random() * 100) + 1;
	var personOne = args[0]
	var personTwo = args[1]

	if (!personOne) {
		message.channel.send('You didn\'t pass any arguments!')
	} else if ((personOne == `<@!${message.author.id}>` && personTwo == `<@!${message.author.id}>`) || (personOne == `<@${message.author.id}>` && personTwo == `<@${message.author.id}>`)) {
		message.channel.send({
			embed: {
				color: embedColor,
				description: `That's kinda desperate, <@${message.author.id}>...`
			}
		})
	} else {
		if (rollNum < 25) {
			message.channel.send({
				embed: {
					color: 0xfc0303,
					description: personOne + ' and ' + personTwo + ' aren\'t very compatible.',
					footer: {
						text: 'Rolled ' + rollNum + '% compatibility'
					}
				}
			});
		} else if (rollNum > 26 && rollNum < 75) {
			message.channel.send({
				embed: {
					color: 0xfcb103,
					description: personOne + ' and ' + personTwo + ' are somewhat compatible.',
					footer: {
						text: 'Rolled ' + rollNum + '% compatibility'
					}
				}
			});
		} else if (rollNum > 76) {
			message.channel.send({
				embed: {
					color: 0x77fc03,
					description: personOne + ' and ' + personTwo + ' are very compatible.',
					footer: {
						text: 'Rolled ' + rollNum + '% compatibility'
					}
				}
			});
		}
	}
}

module.exports.help = {
	name: "lovecalc",
	description: ""
}