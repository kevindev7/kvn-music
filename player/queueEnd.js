module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.off} - _Music **Stopped** and **Bot disconnect** as there is no more music in the queue_.`);
};