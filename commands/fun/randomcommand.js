const {
    SlashCommandBuilder
} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('random')
        .setDescription('Generates a random number between 1 and 100'),
    async execute(interaction) {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        await interaction.reply(`Your random number is: ${randomNumber}`);
    },
};
