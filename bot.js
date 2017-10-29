const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_Mzc0MTQ5ODI5MjQyMTI2MzM4.DNdFvg.ROcfIz4hNvb6Bd_A44qQdsZ-KpU);
