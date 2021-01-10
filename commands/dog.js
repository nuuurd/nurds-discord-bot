const request = require('request');

module.exports = {
	name: 'dog',
	description: 'Sends dog pics!!',
	args: true,
	execute(message, args) {
		request('https://dog.ceo/api/breeds/image/random', { json: true }, (err, res, body) => {
			if (err) { return console.log(err); }
			message.channel.send(body.message);
		});
	},
};
