const request = require('request');

module.exports = {
	name: 'dog',
	description: 'Sends dog pics!!',
	args: true,
	execute(message, args) {
		const member = message.guild.member(message.author);

		var embedColor = member.displayColor;

		request('https://dog.ceo/api/breeds/image/random', { json: true }, (err, res, body) => {
			if (err) { return console.log(err); }
			var dogImageLink = (body.message);
			var dogBreed = dogImageLink.substr(30);
			message.channel.send({
				embed: {
					color: embedColor,
					description: 'Breed: ' + dogBreed,
					image: {
						url: dogImageLink
					}
				}
			});
		});
	},
};
