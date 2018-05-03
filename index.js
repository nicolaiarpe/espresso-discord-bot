require("dotenv").config();
const DiscordJS = require("discord.js");
const Discord = new DiscordJS.Client();
const Data = require("./modules/data");
const Helpers = require("./modules/helpers");

console.log(Data.getLiveRole("303646995300745218"));

// Login to Discord with bot token
Discord.login(process.env.DISCORD_TOKEN);

// When the bot is logged in and ready
Discord.on("ready", () => {
   console.log(`Logged in as ${Discord.user.tag}!`);
});

// On chat message
Discord.on("message", message => {
   console.log("messages was sent");
});

// When a users status changes (i.e. away, idle, busy)
Discord.on("presenceUpdate", (oldMember, newMember) => {
   // Get the current guild from the member
   const guildID = oldMember.guild.id;
   const liveRoleID = Data.getLiveRoleID(guildID);

   if (!liveRoleID) {
      return false;
   }

   // Check if previous member had live role
   const wasLive = Helpers.isMemberLive(oldMember);

   // Check if new memeber has live role
   const isLive = Helpers.isMemberLive(newMember);

   if (!wasLive && !isLive) {
      // Was not live, is not live now
      return false;
   } else if (!wasLive && isLive) {
      // Was not live, is live now
      newMember.addRole(liveRoleID, "User went live!");
   } else if (wasLive && !isLive) {
      // Was live, is not live now
      newMember.removeRole(liveRoleID, "User ended their stream!");
   }
});
