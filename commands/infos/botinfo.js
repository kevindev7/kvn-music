module.exports = {
  name: "botinfo",
  description: "Show all K V N Music Info",
  utilisation: '{prefix}botinfo',
  category: 'Infos',
  aliases: ["info"],
  permissions: {
    user: [],
    client: []
  },
  cooldown: 5,
  execute(client, message) {
            message.channel.send({
                embed: {
                    color: '8A4FF9',
                    title: 'K V N Music Info',
                    thumbnail: {url: 'https://cdn.discordapp.com/attachments/906495241186574358/915214787774922793/output-onlinegiftools.gif'},
                    description: `Invite and Vote our bot for us!`,
                    fields: [
                        { name: `**General Information**`, value: `・**Username:** ${client.user.username} \n・**Tag:** ${client.user.tag} \n・**ID:** \`${client.user.id}\` \n・**Hosting:** Epikhost Software \n・**Developer:** K E V I N#3621`},
                        { name: `**K V N Music Status**`, value: `・Use \`${client.config.discord.prefix}status\` for __Bot Status__...`},
                        { name: `**K V N Music Links**`, value: `[Invite](https://voidbots.net/bot/873133649921462272/invite) | [Vote](https://voidbots.net/bot/873133649921462272/vote) | [Website](https://kvnteam7.wixsite.com/kvnmusic) | [Support](https://discord.gg/UPP6RXg3D2)`}
                    ],
                    image: {url: 'https://cdn.discordapp.com/attachments/906495241186574358/906495459625951232/K_V_N_MUSIC_-_Banner.png'},
                    footer: { text: '©2021 K V N Development' },
                    timestamp: new Date(),
                },
            });
      },
};
