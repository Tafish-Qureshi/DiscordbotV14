const {
    SlashCommandBuilder
} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('portal')
        .setDescription('Replies with some portal quotes'),
    async execute(interaction) {
        const quotes = [
            'I\'m in space!',
            'SPAAAAAACE!',
            'Space space space space space space!',
            'We both said a lot of things that you’re going to regret.',
            'Unbelievable. You, [Subject Name Here] must be the pride of [Subject Hometown Here].',
            'I am not a moron!',
            'I\'m making a note here: HUGE SUCCESS.',
            'It\'s hard to overstate my satisfaction.',
            'I feel FANTASTIC and I\'m still alive.',
            'While you\'re dying I\'ll be still alive.',
            'And when you\'re dead I will be still alive.'
        ];
        const quote = quotes[Math.floor(Math.random() * quotes.length)];
        await interaction.reply(quote);
    },
};
