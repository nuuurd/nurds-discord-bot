function startsWithVowel(word) {
	return /[aeiou]/i.test(word[0]);
}
function startsWithConsonant(word) {
	return /[^aeiou]/i.test(word[0]);
}

function startsWithConsonantCluster(word) {
	if (startsWithConsonant(word[0]) && startsWithConsonant(word[1])) {
		return true
	}
}

module.exports = {
	name: 'piglatin',
	description: '',
	args: true,
	execute(message, args) {
		const member = message.guild.member(message.author);
		var embedColor = member.displayColor;

		var pigLatinText = message.content;
		pigLatinText = pigLatinText.replace(/npiglatin /g, '');
		var outputText = [];

		let words = pigLatinText.split(' ');

		for (var i = 0; i < words.length; i++) {
			let pigLatinWord = words[i];

			if (startsWithVowel(pigLatinWord)) {
				pigLatinWord += 'yay'
			} else if (startsWithConsonantCluster(pigLatinWord)) {
				pigLatinWord += pigLatinWord[0];
				pigLatinWord += pigLatinWord[1];
				pigLatinWord = pigLatinWord.substring(1);
				pigLatinWord = pigLatinWord.substring(1);
				pigLatinWord += 'ay';
			} else if (startsWithConsonant(pigLatinWord)) {
				pigLatinWord += pigLatinWord[0];
				pigLatinWord = pigLatinWord.substring(1);
				pigLatinWord += 'ay';
			} 

			outputText.push(pigLatinWord)
		}

		message.channel.send({
			embed: {
				description: outputText.join(' '),
				color: embedColor,
				footer: {
					text: 'Original text: ' + pigLatinText
				}
			} 
		})
	}
};