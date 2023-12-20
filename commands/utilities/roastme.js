const {
    SlashCommandBuilder
} = require('discord.js');

const roast = [
    "Je intelligentie is zo zeldzaam als een witte olifant in de sneeuw.",
    "Als domheid een beroep was, zou jij directeur zijn.",
    "Je bent als een gloeilamp: aan de buitenkant ben je helder, maar van binnen ben je leeg.",
];


module.exports = {
    data: new SlashCommandBuilder()
        .setName('roast')
        .setDescription('Replies with a roast!')
        .addUserOption(option => option.setName('target').setDescription('The user to roast')),
    async execute(interaction) {
        const randomIndex = Math.floor(Math.random() * roast.length);
        const randomRoast = roast[randomIndex];
        await interaction.reply(randomRoast);
    },
};

