const {
    SlashCommandBuilder
} = require('discord.js');
const translate = require('@iamtraction/google-translate');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('translate')
        .setDescription('Translate text to a specified language')
        .addStringOption(option =>
            option.setName('language')
            .setDescription('Target language code')
            .setRequired(true))
        .addStringOption(option =>
            option.setName('text')
            .setDescription('Text to translate')
            .setRequired(true)),
    async execute(interaction) {
        const targetLang = interaction.options.getString('language');
        const textToTranslate = interaction.options.getString('text');

        try {
            const translated = await translate(textToTranslate, {
                to: targetLang
            });
            await interaction.reply(`Translated (${targetLang}): ${translated.text}`);
        } catch (error) {
            console.error('Translation error:', error);
            await interaction.reply('Translation failed. Please check the language code and try again.');
        }
    },
};
