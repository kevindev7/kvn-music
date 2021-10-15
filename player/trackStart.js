module.exports = (client, message, track) => {
    message.channel.send(`${client.emotes.music} - Now playing **${track.title}** into _${message.member.voice.channel.name}_, Thanks for using **K V N Music bot**!`);
};