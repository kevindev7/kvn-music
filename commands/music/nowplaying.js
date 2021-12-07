module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    category: 'Music',
    utilisation: '{prefix}nowplaying',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} You're not in a voice channel!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} You are not in the same voice channel!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} No music currently playing!`);

        const track = client.player.nowPlaying(message);
        const filters = [];

        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => client.player.getQueue(message).filters[filterName]) ? filters.push(filters) : false;

        message.channel.send({
            embed: {
                color: '5865F2',
                author: { name: track.title },
                footer: { text: '©2021 K V N Development - K V N Team', iconURL: 'https://cdn.discordapp.com/attachments/865614901690630216/865615181135872020/final_60ec8c6b3d62d3003fa221e5_666979.gif' },
                fields: [
                    { name: 'Channel', value: track.author, inline: true },
                    { name: 'Requested by', value: track.requestedBy.username, inline: true },
                    { name: 'From playlist', value: track.fromPlaylist ? '<a:KS_discord_on:898789666428436512>' : '<a:KS_discord_off:898788735829811200>', inline: true },

                    { name: 'Views', value: track.views, inline: true },
                    { name: 'Duration', value: track.duration, inline: true },
                    { name: 'Filters activated', value: filters.length + '/' + client.filters.length, inline: true },

                    { name: 'Volume', value: client.player.getQueue(message).volume, inline: true },
                    { name: 'Repeat mode', value: client.player.getQueue(message).repeatMode ? '<a:KS_discord_on:898789666428436512>' : '<a:KS_discord_off:898788735829811200>', inline: true },
                    { name: 'Currently paused', value: client.player.getQueue(message).paused ? '<a:KS_discord_on:898789666428436512>' : '<a:KS_discord_off:898788735829811200>', inline: true },

                    { name: 'Progress bar', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
                ],
                thumbnail: { url: track.thumbnail },
                timestamp: new Date(),
            },
        });
    },
};
