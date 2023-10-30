require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
})

client.on('ready', (c) => {
    console.log(`${c.user.username}`, 'esta listo')
})

client.on('messageCreate', (message) => {
    console.log(message);
}),

client.on('messageCreate', (message) => {
    if(message.content === 'Hola') {
        message.reply('Adios')
    }
});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return; 

    if (interaction.commandName === 'hola') {
    interaction.reply('adios');
    }

    if (interaction.commandName === 'ping') {
        interaction.reply('pong');
    }
});

client.login(process.env.TOKEN);
