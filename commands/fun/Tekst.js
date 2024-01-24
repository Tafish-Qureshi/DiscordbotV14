const {
    SlashCommandBuilder
} = require('discord.js');

const responses = [
    'U fucking died!',
    'Yolo time!',
    'Such yolo, much wow!',
    'Yolo for the win!'
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName('yolo')
        .setDescription('Replies with a random Yolo response!'),
    async execute(interaction) {
        // Kies een willekeurig antwoord uit de array
        const randomIndex = Math.floor(Math.random() * responses.length);
        const randomResponse = responses[randomIndex];

        await interaction.reply(randomResponse);
    },
};
