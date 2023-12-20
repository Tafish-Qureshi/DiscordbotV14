const {
    SlashCommandBuilder
} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cancelfelix')
        .setDescription('Replies with You Cancel Felix!'),
    async execute(interaction) {
        await interaction.reply('U got cancelled Felix!');
    },
};
