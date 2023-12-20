const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('stupidify')
        .setDescription('Stupidify the entered text by replacing vowels with a specific letter')
        .addStringOption(option =>
            option.setName('text')
                .setDescription('Enter the text to stupidify')
                .setRequired(true)),
    async execute(interaction) {
        const textToStupidify = interaction.options.getString('text').toLowerCase();
        const stupidifiedText = textToStupidify.replace(/[aeiou]/gi, '0');

        await interaction.reply(`Stupidified text: ${stupidifiedText}`);
    },
};
