module.exports = {
    name: 'filterlists',
    aliases: ['filters'],
    category: 'Music',
    utilisation: '{prefix}filterlists',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} You're not in a voice channel!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} You are not in the same voice channel!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} No music currently playing!`);

        const filtersStatuses = [[], []];

        client.filters.forEach((filterName) => {
            const array = filtersStatuses[0].length > filtersStatuses[1].length ? filtersStatuses[1] : filtersStatuses[0];
            array.push(filterName.charAt(0).toUpperCase() + filterName.slice(1) + " : " + (client.player.getQueue(message).filters[filterName] ? client.emotes.success : client.emotes.off));
        });

        message.channel.send({
            embed: {
                author: { name: client.user.username + ' Filter Lists', iconURL:'https://cdn.discordapp.com/attachments/865614901690630216/898635213515685918/logo.gif'},
                color: '5865F2',
                thumbnail: { url: client.user.displayAvatarURL() },
                image: {url: 'https://cdn.discordapp.com/attachments/906495241186574358/906495459625951232/K_V_N_MUSIC_-_Banner.png'},
                footer: { text: '©2021 K V N Development' },
                fields: [
                    { name: 'Filters', value: filtersStatuses[0].join('\n'), inline: true },
                    { name: '** **', value: filtersStatuses[1].join('\n'), inline: true },
                ],
                timestamp: new Date(),
                description: `List of all filters enabled or disabled.\nUse \`${client.config.discord.prefix}filter\` to add a filter song. :D`,
            },
        });
    },
};
