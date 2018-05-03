require("dotenv").config();
const DiscordJS = require("discord.js");
const Discord = new DiscordJS.Client();

Discord.login(process.env.DISCORD_TOKEN);

// Discord Bot
Discord.on("ready", () => {
   // Logged into Discord!
   console.log(`Logged in as ${Discord.user.tag}!`);
});
