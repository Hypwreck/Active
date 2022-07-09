	require('colors')
const express = require('express');
const server = express();
module.exports = (client) => {
  
 
server.all('/', (req, res)=>{
    res.send('Active is now Active')
})

    server.listen(3000, ()=>{console.log(`[Discord API] Logged in as Active`.magenta);});
};