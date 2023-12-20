const {
    SlashCommandBuilder
} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('coinflip')
        .setDescription('Flips a coin, landing on either heads or tails'),
    async execute(interaction) {
        const randomNumber = Math.random();
        let result = 'Heads';

        if (randomNumber < 0.5) {
            result = 'Tails';
        }

        await interaction.reply(`The coin landed on: ${result}`);
    },
};
