const {
    SlashCommandBuilder
} = require('discord.js');

const quote = [{
        quote: "The world isn’t perfect. But it’s there for us, doing the best it can… that’s what makes it so damn beautiful. Roy Mustang (Full Metal Alchemist)"
    },
    {
        quote: "To know sorrow is not terrifying. What is terrifying is to know you can’t go back to happiness you could have. Matsumoto Rangiku (Bleach) "
    },
    {
        quote: "In this world, wherever there is light, there are always shadows. As long as there is a concept of victors, the vanquished will also exist. The selfish desire for peace gives rise to war. And hatred is born in order to protect love.  Madara Uchiha."
    },
    {
        quote: "Wake up to reality. Nothing ever goes as planned in this world. The longer you live, the more you realize that only pain, suffering, and futility exist in this reality.  Madara Uchiha."
    },
    {
        quote: "The only true fear is the fear of the unknown. Kiyomi Takada (Death Note)"
    }
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName('quote')
        .setDescription('Replies with a quote!'),
    async execute(interaction) {
        const randomIndex = Math.floor(Math.random() * quote.length);
        const randomquote = quote[randomIndex];
        const quotetosend = `${randomquote.quote}`;
        await interaction.reply(quotetosend);
    },
};
