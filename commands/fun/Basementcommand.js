const {
    SlashCommandBuilder
} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('basement')
        .setDescription('Replies with old Basemenent Line!'),
    async execute(interaction) {
        await interaction.reply('Certain people on this people have programmers in their basement!');
    },
};
