module.exports = {
	name: 'noob',
	description: 'noob',
	args: true,
	execute(message, args) {
		var noobCommandMessage = message.content;
		var noobUser = noobCommandMessage.replace(/nnoob /g, '');
		message.channel.send(noobUser + ' = noob');
	}
};