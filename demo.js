const MixerDiscordBot = require('./index');

const channelId = 665827705928810496;
const webhook = 'https://discordapp.com/api/webhooks/665827143535558659/6wFRxcQiY3F569FUllmx__v9hkeI6Kc-5KlHOecxZT6xHEGiG-0j498xr1lxugB2gDaA';
const config = { channelId, webhook };
const bot = new MixerDiscordBot(config);

bot.ready(() => {
    console.log('bot is running');
});
bot.start();