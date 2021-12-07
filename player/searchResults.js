module.exports = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: '2f3136',
            author: { name: `Here are your search results for "${query}"`, iconURL: client.user.displayAvatarURL() },
            footer: { text: '©2021 K V N Development' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
};
