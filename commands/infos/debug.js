module.exports = {
    name: 'debug',
    aliases: ['status'],
    category: 'Infos',
    utilisation: '{prefix}debug',

    execute(client, message) {
        message.channel.send(`\`\`\`Connected : ${client.voice.connections.size} channels  \nGuilds on : ${client.guilds.cache.size} servers \nBot Users : ${client.users.cache.size} users \nBot Status: Online \nError code: SOON™\`\`\` `);
    },
};
