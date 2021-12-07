module.exports = {
  name: "invite",
  description: "To invite me to your server.",
  utilisation: '{prefix}invite',
  category: 'Infos',
  aliases: ["inv", "i"],
  permissions: {
    user: [],
    client: []
  },
  cooldown: 5,
  execute(client, message) {
            message.channel.send({
                embed: {
                    color: '8A4FF9',
                    author: { name: client.user.username + ' Bot Invite', iconURL:'https://cdn.discordapp.com/attachments/865614901690630216/898635213515685918/logo.gif'},
                    title: 'Invite ' + client.user.tag + ' to your server!',
                    thumbnail: { url: 'https://cdn.discordapp.com/attachments/906495241186574358/915214787774922793/output-onlinegiftools.gif' },
                    description: `You can invite me by clicking __[here](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=${client.config.discord.permissions}&scope=bot%20${client.config.scopes.join("%20")})__`,
                    footer: { text: '©2021 K V N Development' },
                    timestamp: new Date(),
                },
            });
      },
};
