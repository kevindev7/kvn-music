module.exports = {
    name: 'ping',
    aliases: ["heh"],
    category: 'Infos',
    utilisation: '{prefix}ping',

    execute(client, message) {
        message.channel.send(`:ping_pong:  pong! **|** In ${client.ws.ping}ms ${client.emotes.success}`);
    },
};