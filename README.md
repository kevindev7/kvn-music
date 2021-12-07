### Some chill music bot with free filter features!

Filters example like: 8D, Gate, haas, Phaser, Treble, Vibrato, Reverse, Karaoke, Flanger, Mcompand, Pulsator, SubBoost, BassBoost, Vaporwave, Nightcore, Normalizer, Surrounding.

[![Discord](https://img.shields.io/discord/889330423623204905?color=5865F2&logo=discord&logoColor=white)](https://discord.gg/wjWJwJB) [![Npm](https://img.shields.io/npm/v/discord-player.svg?maxAge=3600)](https://www.npmjs.com/package/distube)

### Commands

**Bot** 
`debug`, `ping`, `botinfo`

**Music**
`clear-queue`, `filter`, `listfilters`, `loop`, `nowplaying`, `pause`, `play`, `queue`, `resume`, `search`, `shuffle`, `skip`, `stop`, `volume`

**Filters**
`8D`, `gate`, `haas`, `phaser`, `treble`, `tremolo`, `vibrato`, `reverse`, `karaoke`, `flanger`, `mcompand`, `pulsator`, `subboost`, `bassboost`, `vaporwave`, `nightcore`, `normalizer`, `surrounding`, `fadein`, `mono`

### Installation

Well, let's start by downloading the code.
Go to the folder `config` then the file `bot.js`.
For the bot to be able to start, please complete the file with your credentials as follows :

- For emojis

```js
emojis: {
    off: ':x:',
    error: ':warning:',
    queue: ':bar_chart:',
    music: ':musical_note:',
    success: ':white_check_mark:',
}
```

- For configuration

```js
discord: {
    token: 'TOKEN',
    prefix: 'PREFIX',
    activity: 'ACTIVITY',
}
```

- `token`, the token of the bot available on the [Discord Developers](https://discordapp.com/developers/applications) section.
- `prefix`, the prefix that will be set to use the bot.
- `activity`, the activity of the bot. `[joined]` Servers.

In the console, type `npm install` to install all dependencies.

- To start the bot :

```
#With Node
node index.js
npm start #Indicated in package.json

#With pm2
pm2 start index.js --name "MusicBot"
```

All you have to do is turn on your bot!

### Thanks
Thank you for coming here, don't forget to invite, vote, and support K V N Music!
We are sorry if there are words that are not pleasing.
Stay save & Stay healty guys!
