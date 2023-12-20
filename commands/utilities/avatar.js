const {
    SlashCommandBuilder
} = require('discord.js');

const {
    getUserFromMention
} = require('./helpers'); 

module.exports = {
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Get the avatar of a user')
        .addUserOption(option =>
            option.setName('user')
            .setDescription('The user to show the avatar for')
            .setRequired(false)),
    async execute(interaction) {
        const user = interaction.options.getUser('user') || interaction.user;
        const avatarEmbed = {
            color: 0x0099ff,
            title: `${user.username}'s Avatar`,
            image: {
                url: user.displayAvatarURL({
                    dynamic: true,
                    size: 4096
                }),
            },
        };

        await interaction.reply({
            embeds: [avatarEmbed]
        });
    },
};
