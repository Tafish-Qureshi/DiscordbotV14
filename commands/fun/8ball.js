const {
    SlashCommandBuilder
} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('8ball')
        .setDescription('Ask the 8-ball a question')
        .addStringOption(option =>
            option.setName('question')
            .setDescription('The question you want to ask the 8-ball')
            .setRequired(true)),
    async execute(interaction) {
        const responses = [
            'It is certain.',
            'It is decidedly so.',
            'Without a doubt.',
            'Yes - definitely.',
            'You may rely on it.',
            'As I see it, yes.',
            'Most likely.',
            'Outlook good.',
            'Yes.',
            'Signs point to yes.',
            'Reply hazy, try again.',
            'Ask again later.',
            'Better not tell you now.',
            'Cannot predict now.',
            'Concentrate and ask again.',
            'Don\'t count on it.',
            'My reply is no.',
            'My sources say no.',
            'Outlook not so good.',
            'Very doubtful.',
            'No.',
            'Maybe.',
            'I don\'t know.',
            'I don\'t think so.',
            'I\'m not sure.',
            'I\'m not sure about that.',
            'I\'m not sure about this.',
            'I\'m not sure about it.',
            'I\'m not sure about him.'
        ];

        const question = interaction.options.getString('question');
        const response = responses[Math.floor(Math.random() * responses.length)];

        await interaction.reply(`🎱 Question: ${question}\n🎱 Answer: ${response}`);
    },
};
