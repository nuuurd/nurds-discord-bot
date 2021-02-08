module.exports = {
    name: 'serverinfo',
    description: 'Sends info about the server',
    args: true,
    execute(message, args) {
        const member = message.guild.member(message.author);

        var embedColor = member.displayColor;

        var discordRulesID = message.guild.rulesChannelID
        if (discordRulesID == null) {
            discordRulesID = 'N/A'
        } else {
            discordRulesID = `<#${message.guild.rulesChannelID}>`
        };

        var afkChannel = message.guild.afkChannelID
        if (afkChannel == null) {
            afkChannel = 'N/A'
        } else {
            afkChannel = `<#${message.guild.afkChannelID}>`
        };

        message.channel.send({
            embed: {
                title: `${message.guild.name}`,
                color: embedColor,
                thumbnail: {
                    url: `${message.guild.iconURL()}`,
                },
                fields: [
                    {
                    name: "Server Members",
                    value: `Members: ${message.guild.memberCount}`,
                    inline: true
                    },
                    {
                        name: "Server Owner",
                        value: '<@' + `${message.guild.ownerID}` + '>',
                        inline: true
                    },
                    {
                        name: "Server Location",
                        value: `${message.guild.region}`,
                        inline: true
                    },
                    {
                        name: "Creation Date",
                        value: `${message.guild.createdAt}`,
                        inline: true
                    },
                    {
                        name: "Rules Channel",
                        value: discordRulesID,
                        inline: true
                    },
                    {
                        name: "Nitro Boosts",
                        value: `Boost Count: ${message.guild.premiumSubscriptionCount} \nTier: ${message.guild.premiumTier}`,
                        inline: true
                    },
                    {
                        name: "NSFW Filter Level",
                        value: `Level: ${message.guild.explicitContentFilter}`,
                        inline: true
                    },
                    {
                        name: "Partnered/Verified",
                        value: `Partnered: ${message.guild.partnered}\nVerified: ${message.guild.verified}`,
                        inline: true
                    },
                    {
                        name: "AFK Channel",
                        value: afkChannel,
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

