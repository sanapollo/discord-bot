const { token } = require('./config.json');
const { Client, GatewayIntentBits } = require('discord.js');


const client = new Client({ intents: [GatewayIntentBits.Guilds] });


client.once('ready', () => {
    console.log('ready!');
});



client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'beep') {
		await interaction.reply('Boop!');
	}
});


client.login(token);
