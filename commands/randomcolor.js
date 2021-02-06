function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

module.exports.run = async (bot, message, args) => {
	message.channel.send({
		embed: {
			color: getRandomColor(),
			description: 'Color: ' + getRandomColor(),
		}
	});
}

module.exports.help = {
	name: "randomcolor",
	description: ""
}
