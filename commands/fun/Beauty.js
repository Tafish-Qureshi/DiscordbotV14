const { SlashCommandBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('schoonheidwedstrijd')
        .setDescription('Replies with Wie is mooier!')
        .addUserOption(option => option.setName('persoon1').setDescription('De eerste persoon om te taggen').setRequired(true))
        .addUserOption(option => option.setName('persoon2').setDescription('De tweede persoon om te taggen').setRequired(true)),
    async execute(interaction) {
        const persoon1 = interaction.options.getUser('persoon1');
        const persoon2 = interaction.options.getUser('persoon2');

        const num = Math.floor(Math.random() * 2) + 1;
        let antwoord = '';

        if (num == 1) {
            antwoord = `${persoon1} is mooier dan ${persoon2}!`;
        } else {
            antwoord = `${persoon2} is mooier dan ${persoon1}!`;
        }

        await interaction.reply(antwoord);
    },
};
