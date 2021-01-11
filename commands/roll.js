module.exports = {
	name: 'roll',
	description: 'Rolls a random number between 1 and 100',
	args: true,
	execute(message, args) {

		var rangeOne = args[0]
		var rangeTwo = args[1]

		if (!args[0]) {
			rangeOne = 1
		}
		if (!args[1]) {
			rangeTwo = 100
		}

		if (rangeTwo < rangeOne) {
			message.channel.send({
				embed: '<@' + `${message.author.id}` + '>,' + ' the minimum cannot be higher than the maximum!'
			})
		}
		function getRandomInt(min, max) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		var rollNum = getRandomInt(rangeOne, rangeTwo);

		if (rollNum < 25) {
			message.channel.send({
				embed: {
					color: 0xfc0303,
					description: ':game_die: You rolled: **' + rollNum + '**.',
					footer: {
						text: 'Rolled between ' + rangeOne + ' and ' + rangeTwo
					}
				}
			});
		} else if (rollNum > 26 && rollNum < 75) {
			message.channel.send({
				embed: {
					color: 0xfcb103,
					description: ':game_die: You rolled: **' + rollNum + '**.',
					footer: {
						text: 'Rolled between ' + rangeOne + ' and ' + rangeTwo
					}
				}
			});
		} else if (rollNum > 76) {
			message.channel.send({
				embed: {
					color: 0x77fc03,
					description: ':game_die: You rolled: **' + rollNum + '**.',
					footer: {
						text: 'Rolled between ' + rangeOne + ' and ' + rangeTwo
					}
				}
			});
		}
	},
};