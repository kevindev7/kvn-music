module.exports = {
  name: "help",
  description: "Show all existing commands",
  aliases: ["h"],
  permissions: {
    user: [],
    client: []
  },
  cooldown: 5,
  execute: async (client, message, args) => 
      {message.channel.send(`**Get Help by click the** https://kvnteam7.wixsite.com/kvnmusic/commands ${client.emotes.success}`);   
  }
}