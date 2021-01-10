const { API, } = require('nhentai-api');
const api = new API

module.exports = {
	name: 'doujin',
	description: 'Searches up doujin from nhentai',
	args: true,
	execute(message, args) {
		const doujinNumber = args

		if (!doujinNumber.length) {
			message.channel.send('<@' + `${message.author.id}` + '>' + ', you didn\'t say any arguments!');
		} else {
			async function getDoujinCover() {
				return doujinCover = await api.getBook(doujinNumber).then(book => {
					api.getImageURL(book.cover)
				});
			}
			getDoujinCover().then(message.channel.send)
				.catch(error => {
				console.error(error);
			});
		}
	},
};