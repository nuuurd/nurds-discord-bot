module.exports = {
	name: 'roll',
	description: 'Rolls a random number between 1 and 100',
	args: true,
	execute(message, args) {
		var rollNum = Math.floor(Math.random() * 100) + 1;

		if (rollNum < 25) {
			message.channel.send({
				embed: {
					color: 0xfc0303,
					description: ':game_die: You rolled: **' + rollNum + '**.',
				}
			});
		} else if (rollNum > 26 && rollNum < 75) {
			message.channel.send({
				embed: {
					color: 0xfcb103,
					description: ':game_die: You rolled: **' + rollNum + '**.',
				}
			});
		} else if (rollNum > 76) {
			message.channel.send({
				embed: {
					color: 0x77fc03,
					description: ':game_die: You rolled: **' + rollNum + '**.',
				}
			});
		}
	},
};