const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("525075522217312278")
setInterval(function() {
channel.send(`B0B yala B0B yala B0B yala B0B yalaB0B yala B0B yalaB0B yala B0B yala`);
}, 15)
})

client.login(process.env.BOT_TOKEN);
