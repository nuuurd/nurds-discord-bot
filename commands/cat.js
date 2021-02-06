const request = require('request');

function toTitleCase(str) {
	return str.replace(/\w\S*/g, function (txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
}

module.exports.run = async (bot, message, args) => {
	const member = message.guild.member(message.author);

	var embedColor = member.displayColor;

	if (!args[0]) {
		request('https://api.thecatapi.com/v1/images/search', { json: true }, (err, res, body) => {
			if (err) { return console.log(err); }
			var catImage = (body[0].url);
			var catBreed = (body[0].breeds)
			console.log(catImage);
			message.channel.send({
				embed: {
					color: embedColor,
					image: {
						url: catImage
					}
				}
			});
		});
	} else {
		const breedLookup = args[0]
		request(`https://api.thecatapi.com/v1/images/search?q=${breedLookup}`, { json: true }, (err, res, body) => {
			if (err) { return console.log(err); }
			var catImage = (body[0].url);
			var catBreed = (body[0].breeds)
			console.log(catImage);
			message.channel.send({
				embed: {
					color: embedColor,
					image: {
						url: catImage
					}
				}
			});
		});
	}
}

module.exports.help = {
	name: "cat",
	description: ""
}