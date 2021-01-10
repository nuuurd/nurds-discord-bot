function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

module.exports = {
	name: 'randomcolor',
	description: 'Sends a random colour.',
	args: true,
	execute(message, args) {
		message.channel.send({
			embed: {
				color: getRandomColor(),
				description: 'Color: ' + getRandomColor(),
			}
		});
	},
};
