const request = require('request');

function toTitleCase(str) {
	return str.replace(/\w\S*/g, function (txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
}

module.exports = {
	name: 'dog',
	description: 'Sends dog pics!!',
	args: true,
	execute(message, args) {
		const member = message.guild.member(message.author);

		var embedColor = member.displayColor;

		var dogBreedLookup = 'https://dog.ceo/api/breed/' + args[0] + '/images/random';

		if (!args[0]) {
			dogBreedLookup = 'https://dog.ceo/api/breeds/image/random';
		}

		request(dogBreedLookup, { json: true }, (err, res, body) => {
			if (err) { return console.log(err); }
			var dogImageLink = (body.message);
			var dogBreed = dogImageLink.substr(30);
			dogBreed = dogBreed.split('/')[0];
			dogBreed = dogBreed.replace(/-/g, ' ');
			dogBreed = toTitleCase(dogBreed);
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
