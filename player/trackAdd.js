module.exports = (client, message, queue, track) => {
    message.channel.send(`${client.emotes.queue} - **${track.title}** has been added to the queue.`);
};