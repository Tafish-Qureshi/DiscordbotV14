const {
    SlashCommandBuilder
} = require('discord.js');

const facts = [
    "Wist je dat de snelste windvlaag ooit op aarde werd geregistreerd op 408 km/u in Oklahoma, VS in 1999?",
    "Wist je dat octopussen drie harten hebben?",
    "Wist je dat een gemiddelde wolk ongeveer evenveel weegt als 100 olifanten?",
    "Wist je dat de Eiffeltoren kan groeien met meer dan 15 cm in de hitte van de zomer?",
    "Wist je dat de totale lengte van je bloedvaten rond de aarde kan gaan meer dan twee keer?",
    "Wist je dat de meeste mensen meer dan 1500 keer per jaar niezen?"
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName('fact')
        .setDescription('Replies with a fact!'),
    async execute(interaction) {
        const randomIndex = Math.floor(Math.random() * facts.length);
        const randomFact = facts[randomIndex];
        await interaction.reply(randomFact);
    },
};