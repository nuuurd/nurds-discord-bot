module.exports = {
	name: '8ball',
	description: 'Magic eight ball?',
	args: true,
    execute(message, args) {
        const member = message.guild.member(message.author);

        var embedColor = member.displayColor;

        const eightBallNum = Math.floor(Math.random() * 8)
        var eightBall = '';

        var eightBallQuestion = message.content;
        eightBallQuestion = eightBallQuestion.replace("n8ball ", '');
        console.log(eightBallQuestion);

        if (!eightBallQuestion) {
            message.channel.send({
                embed: {
                    color: embedColor,
                    description: '<@' + `${message.author.id}` + '>' + ', you didn\'t ask a question!'
                }
            });
        } else if (eightBallQuestion) {
            switch (eightBallNum) {
                case 0:
                    eightBall = 'it is certain.'
                    break;
                case 1:
                    eightBall = 'it is decidedly so.'
                    break;
                case 2:
                    eightBall = 'reply hazy, try again.'
                    break;
                case 3:
                    eightBall = 'cannot predict now.'
                    break;
                case 4:
                    eightBall = 'do not count on it.'
                    break;
                case 5:
                    eightBall = 'my sources say no.'
                    break;
                case 6:
                    eightBall = 'outlook not so good.'
                    break;
                case 7:
                    eightBall = 'signs point to yes.'
                    break;
            }

            message.channel.send({
                embed: {
                    color: embedColor,
                    description: '<@' + `${message.author.id}` + '>, ' + eightBall
                }
            });
        }
	},
};