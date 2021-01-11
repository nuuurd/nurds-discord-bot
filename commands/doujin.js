const { API, } = require('nhentai-api');
const api = new API

module.exports = {
	name: 'doujin',
	description: 'Searches up doujin from nhentai',
	args: true,
	execute(message, args) {
		const doujinNumber = args[0]

		if (!doujinNumber) {
			message.channel.send('<@' + `${message.author.id}` + '>' + ', you didn\'t say any arguments!');
		} else {
			api.getBook(doujinNumber).then(book => {
				message.channel.send(api.getImageURL(book.cover));
			});
		}
	},
};