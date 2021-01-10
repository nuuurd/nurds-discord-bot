module.exports = {
    name: 'userinfo',
    description: 'Sends info about the user.',
    args: true,
    execute(message, args) {
        const member = message.guild.member(message.author);

        var embedColor = member.displayColor;

        var taggedUser = message.mentions.users.first();

        if (!message.mentions.users.size) {
            taggedUser = message.author
        }

        message.channel.send({
            embed: {
                title: `${taggedUser.tag}`,
                color: embedColor,
                thumbnail: {
                    url: `${taggedUser.displayAvatarURL()}`,
                },
                fields: [
                    {
                        name: "ID",
                        value: `${taggedUser.id}`,
                        inline: true
                    },
                    {
                        name: "Creation Date",
                        value: `${taggedUser.createdAt}`,
                        inline: true
                    }
                ],
                timestamp: new Date(),
                footer: {
                    text: "bot made by nurd#0388"
                }
            }
        });
    },
};