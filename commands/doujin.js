const { API, } = require('nhentai-api');
const api = new API

module.exports = {
	name: 'doujin',
	description: 'Searches up doujin from nhentai',
	args: true,
	execute(message, args) {
		const member = message.guild.member(message.author);

		var embedColor = member.displayColor;

		const doujinNumber = args[0]

		if (!message.channel.nsfw) {
			message.channel.send({
				embed: {
					color: embedColor,
					description: "You naughty boi, this channel isn't nsfw!"
				}
			});
		} else if (!doujinNumber) {
			message.channel.send({
				embed: {
					color: embedColor,
					description: '<@' + `${message.author.id}` + '>' + ', you didn\'t say any arguments!'
				}
			});
		} else if (message.channel.nsfw) {
			api.getBook(doujinNumber).then(book => {
				message.channel.send({
					embed: {
						color: embedColor,
						image: {
							url: api.getImageURL(book.cover)
						},
						fields: [
							{
								name: "Link:",
								value: 'https://nhentai.net/g/' + doujinNumber,
								inline: true
							}
						],
						footer: {
							text: "bot created by nurd#0388"
						}
					}
				})
			});
		} 
	},
};