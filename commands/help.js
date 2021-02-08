const { prefix } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'help',
	description: 'List all of my commands or info about a specific command.',
	aliases: ['commands'],
	usage: '[command name]',
	cooldown: 3,
	execute(message, args) {
		const member = message.guild.member(message.author);
		const embedColor = member.displayColor;
		const helpEmbed = new Discord.MessageEmbed().setTitle('List of commands');
		const commandEmbed = new Discord.MessageEmbed()
		const { commands } = message.client;

		if (!args.length) {
			helpEmbed.setDescription(commands.map(command => command.name).join('\n'));
			helpEmbed.setFooter(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`);
			helpEmbed.setColor(embedColor);

			return message.channel.send(helpEmbed);
		}
		//list of commands

		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.reply('That\'s not a valid command!');
		}

		commandEmbed.setTitle(`Info about ${command.name}:`);

		if (command.aliases) commandEmbed.addFields(
			{
				name: 'Aliases:',
				value: `${command.aliases.join(', ')}`,
				inline: true
			}
		)
		if (command.description) commandEmbed.addFields(
			{
				name: 'Description:',
				value: `${command.description}`,
				inline: true
			}
		)
		if (command.usage) commandEmbed.addFields(
			{
				name: 'Usage:',
				value: `${prefix}${command.name} ${command.usage}`,
				inline: true
			}
		)
		commandEmbed.addFields(
			{
				name: 'Cooldown:',
				value: `${command.cooldown || 3} second(s)`,
				inline: true
			}
		)
		commandEmbed.setColor(embedColor)
		//specific commands

		message.channel.send(commandEmbed);
	},
};