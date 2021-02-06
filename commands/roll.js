function isNumeric(str) {
	if (typeof str != "string") return false
	return !isNaN(str) && 
		!isNaN(parseFloat(str)) 
}

module.exports.run = async (bot, message, args) => {
	const member = message.guild.member(message.author);

	var embedColor = member.displayColor;

	var rangeOne = args[0]
	var rangeTwo = args[1]

	if (!args[0]) {
		rangeOne = 1
	}
	if (args[0] && !args[1]) {
		rangeOne = 1
		rangeTwo = args[0]
	}

	if (!isNumeric(args[0]) || !isNumeric(args[0])) {
		message.channel.send({
			embed: {
				color: embedColor,
				description: `<@${message.author.id}>, you must put in a number, not a string!`
			}
		})
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
	var rollNumPercent = (rangeTwo - rangeOne + 1) / 100


	if (rollNum < 25 * rollNumPercent) {
		message.channel.send({
			embed: {
				color: 0xfc0303,
				description: ':game_die: You rolled: **' + rollNum + '**.',
				footer: {
					text: 'Rolled between ' + rangeOne + ' and ' + rangeTwo
				}
			}
		});
	} else if (rollNum > 26 * rollNumPercent && rollNum < 75 * rollNumPercent) {
		message.channel.send({
			embed: {
				color: 0xfcb103,
				description: ':game_die: You rolled: **' + rollNum + '**.',
				footer: {
					text: 'Rolled between ' + rangeOne + ' and ' + rangeTwo
				}
			}
		});
	} else if (rollNum > 76 * rollNumPercent) {
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
}

module.exports.help = {
	name: "roll",
	description: ""
}