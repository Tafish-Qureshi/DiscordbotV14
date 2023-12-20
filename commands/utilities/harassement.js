const {
    SlashCommandBuilder
} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('harassment')
        .setDescription('Replies with "You better watch out!"'),
    async execute(interaction) {
        await interaction.reply('You better watch out!');
    },
};
