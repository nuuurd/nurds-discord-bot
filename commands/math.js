module.exports = {
	name: 'math',
	description: 'math command',
	args: true,
	execute(message, args) {
		var equationMessage = message.content
		equationMessage = equationMessage.replace(/nmath /g, '');
		equationMessage = equationMessage.replace(/ /g, '');
		message.channel.send(equationMessage);


	}
};