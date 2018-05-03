module.exports = {
   isMemberLive: member => {
      // Check if member is live
      if (
         member.presence.game !== null &&
         member.presence.game.streaming === true
      ) {
         return true;
      }
      return false;
   },
   handlePromise: promise => {
      promise.catch(e => {
         console.log(e);
      });
   }
};
