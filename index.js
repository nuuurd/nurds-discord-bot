const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token, mySqlPass } = require('./config.json');
const request = require('request');
const { API, } = require('nhentai-api');
const mysql = require("mysql");

const client = new Discord.Client();
client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
	if (err) console.error(err);

	let jsfiles = files.filter(f => f.split(".").pop() === "js");
	if (jsfiles.length <= 0) {
		console.log("No commands to load!");
		return;
	}

	console.log(`Loading ${jsfiles.length} commands!`);

	jsfiles.forEach((f, i) => {
		let props = require(`./commands/${f}`);
		client.commands.set(props.help.name, props);
	})
});

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: mySqlPass,
	database: "sadb"
});

con.connect(err => {
	if (err) throw err;
	console.log("Connected to database!");
	con.query("SHOW TABLES", console.log);
});

function generateXp() {
	let min = 20;
	let max = 30;

	return Math.floor(Math.random() * (max - min + 1)) + min;
}

client.on('message', async message => {
	if (message.author.client) return;
	if (message.channel.type === "dm") return;

	con.query(`SELECT * FROM xp WHERE id = '${message.author.id}'`, (err, rows) => {
		if (err) throw err;

		let sql;

		if (rows.length < 1) {
			sql = `INSERT INTO xp (id, xp) VALUES ('${message.author.id}', ${generateXp()})`
		} else {
			let xp = rows[0].xp;
			sql = `UPDATE xp SET xp = ${xp + generateXp()} WHERE id = '${message.author.id}'`;
		}

		con.query(sql);
	})

	let messageArray = message.content.split(/\s+/g);
	let command = messageArray[0];
	let args = messageArray.slice(1);

	if (!command.startsWith(prefix)) return;

	let cmd = client.commands.get(command.slice(prefix.length))
	if (cmd) cmd.run(bot, message, args);
})

client.login(token);