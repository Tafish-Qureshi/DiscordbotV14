const {
    SlashCommandBuilder
} = require('discord.js');

const roast = [{
        roast: "Ik zou je willen roasten, maar dat zou oneerlijk zijn tegenover vuilnis."
    },
    {
        roast: "Als dom zijn een olympische sport was, zou jij zeker een gouden medaille winnen. "
    },
    {
        roast: "Je intelligentie is als een horizon: het lijkt ver weg"
    },
    {
        roast: "Als je zo traag bent in het begrijpen van dingen, moet je voorzichtig zijn dat je niet door slakken wordt ingehaald."
    },
    {
        roast: "Als intelligentie valuta was, zou je zeker failliet zijn"
    },
    {
        roast: "Je bent als een onopgelost Rubiks kubus - kleurloos en verwarrend voor iedereen."
    },
    {
        roast: "Je bent als een software-update: niemand wil je, maar je blijft maar vragen om geïnstalleerd te worden."
    },
    {
        roast: "Als ik je een cent zou geven voor je gedachten, zou ik verandering terugkrijgen"
    },
    {
        roast: "Je zelfvertrouwen is als een verboden snelweg - er is niemand die erop mag."
    },
    {
        roast: "Als je brein een spel was, zou het zeker verstoppertje spelen, want niemand kan het vinden."
    }
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName('roast')
        .setDescription('Replies with a roast!'),
    async execute(interaction) {
        const randomIndex = Math.floor(Math.random() * roast.length);
        const randomroast = roast[randomIndex];
        const roastToSend = `${randomroast.roast}`;
        await interaction.reply(roastToSend);
    },
};
