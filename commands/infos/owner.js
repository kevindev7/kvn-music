module.exports = {
  name: "owner",
  description: "Show all existing commands",
  aliases: ["king"],
  permissions: {
    user: [],
    client: []
  },
  cooldown: 5,
  execute: async (client, message, args) => 
      {message.channel.send(`**Owner?** Him <@745941294387298345>`);   
  }
}