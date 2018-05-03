// Hard coded data for testing
// TODO repace with data from database
const config = {
   "303646995300745218": {
      name: "Espresso",
      liveID: "363134720567017490",
      logID: "365996087770611722",
      modRoles: ["366026214550405141", "366026000921788417"]
   }
};

module.exports = {
   getServerData: guildID => {
      if (config[guildID]) {
         return config[guildID];
      }
      return {};
   },
   getLiveRoleID: guildID => {
      let serverConfig = module.exports.getServerData(guildID);
      if (serverConfig.liveID) {
         return serverConfig.liveID;
      }
      return false;
   }
};
