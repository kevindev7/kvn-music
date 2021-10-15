module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.off} - _Music stopped as there is no more member in the voice channel_.`);
};