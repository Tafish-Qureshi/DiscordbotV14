const {
    SlashCommandBuilder
} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('deleteall')
        .setDescription('Verwijdert alle berichten in het kanaal'),
    async execute(interaction) {
        try {
            const fetched = await interaction.channel.messages.fetch();
            interaction.channel.bulkDelete(fetched, true);

            await interaction.reply(`Succesvol ${fetched.size} bericht(en) verwijderd!`);
        } catch (error) {
            console.error('Er is een fout opgetreden bij het verwijderen van berichten:', error);
            await interaction.reply('Er is een fout opgetreden bij het verwijderen van berichten.');
        }
    },
};
