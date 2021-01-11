module.exports = {
	name: 'lovecalc',
	description: 'Calculates love compatibility?',
	args: true,
	execute(message, args) {

		const member = message.guild.member(message.author);

		var embedColor = member.displayColor;

		var rollNum = Math.floor(Math.random() * 100) + 1;
		var personOne = args[0]
		var personTwo = args[1]

		if (!personOne || !personTwo) {
			message.channel.send('You didn\'t pass any arguments!')
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
	},
};