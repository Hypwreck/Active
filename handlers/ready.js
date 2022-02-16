require('colors')

module.exports = async client => {   
      client.user.setActivity('Youtube Together', { type: 'WATCHING' });
      console.log(`[Discord API] Logged in as ${client.user.tag}`.magenta);
};
