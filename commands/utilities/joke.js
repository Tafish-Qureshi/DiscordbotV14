const {
    SlashCommandBuilder
} = require('discord.js');

const jokes = [{
    question: "Waarom programmeren programmeurs in de winter?",
    answer: "Omdat het daar altijd function Vriest"
    },
    {
        question: "Hoeveel programmeurs heb je nodig om een lamp te verwisselen? ",
        answer: "Geen, dat is een hardwareprobleem."
    },
    {
        question: "Wat zei de programmeur toen de robot hem bedankte?",
        answer: "Geen problemo, bug mij niet!"
    },
    {
        question: "Een SQL-query loopt een bar binnen en vraagt:",
        answer:"Mag ik bij de Table?"
    },
    {
        question: "Wat zei de programmeur toen de robot hem bedankte?",
        answer: "Geen probleem, bug mij niet!"
    }
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName('joke')
        .setDescription('Replies with a joke!'),
    async execute(interaction) {
        const randomIndex = Math.floor(Math.random() * jokes.length);
        const randomJoke = jokes[randomIndex];
        const jokeToSend = `${randomJoke.question}\n${randomJoke.answer}`;
        await interaction.reply(jokeToSend);
    },
};
