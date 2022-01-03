const Discord = require('discord.js');
const client = new Discord.Client();
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')
const { DiscordTogether } = require('discord-together');

//Command Starts
client.on('messageCreate', async message => { // 'message' for Discord.js v12
    if (message.content === 'activities') {
client.discordTogether = new DiscordTogether(client);

//You Can Add VC perm.


client.discordTogether = new DiscordTogether(client);
//Defined The Embed
const embed = new Discord.MessageEmbed() .setColor("BLURPLE").setAuthor(message.author.tag, message.author.avatarURL()).setThumbnail(message.guild.iconURL()).setDescription(`**Current Prefix:** \`\`.\`\` \n \n> What Are Discord Activities❓ \n\n > __Discord Activities Are The Activities Developed By Discord. Some Of You Might Be Familiar With Discord Activities.__\n\n **ForExample :**\n> \`\`Youtube Together/ Discord Together\`\` Allows You To Play Youtube Videos In A Voice Channel With Your Friends`) .setFooter(`Requested by ${message.author.username}`).setTimestamp()
//Defined The Buttons
const but1 = new MessageButton().setEmoji("926013227513544795").setStyle("SECONDARY").setCustomId("youtube")

const but2 = new MessageButton().setEmoji("♟").setStyle("SECONDARY").setCustomId("chess")

const but3 = new MessageButton().setEmoji("839989105785307167").setStyle("SECONDARY").setCustomId("poker")

const but4 = new MessageButton().setEmoji("926740028288294923").setStyle("SECONDARY").setCustomId("checkers")

const but5 = new MessageButton().setEmoji("🕵️‍♂️").setStyle("SECONDARY").setCustomId("betrayal")

const but6 = new MessageButton().setEmoji("🎣").setStyle("SECONDARY").setCustomId("fishing")

const but7 = new MessageButton().setEmoji("🎉").setStyle("SECONDARY").setCustomId("puttparty")

const but8 = new MessageButton().setEmoji("893608366226698270").setStyle("SECONDARY").setCustomId("lettertiles")

const but9 = new MessageButton().setEmoji("893608400359919717").setStyle("SECONDARY").setCustomId("wordssnack")

const but10 = new MessageButton().setEmoji("893608429195780138").setStyle("SECONDARY").setCustomId("doodlecrew")

const but11 = new MessageButton().setEmoji("926790157145878559").setStyle("SECONDARY").setCustomId("spellcast")

const but12 = new MessageButton().setEmoji("😬").setStyle("SECONDARY").setCustomId("awkword")



        const row = new MessageActionRow().addComponents(but1, but2, but3, but4, but5)
        const row2 = new MessageActionRow().addComponents(but6, but7, but8, but9, but10)
        const row3 = new MessageActionRow().addComponents(but11, but12)
            const m = await message.channel.send({embeds: [embed], components: [row, row2, row3]})

            
    const collector = m.createMessageComponentCollector({
      filter: (b) => {
      if(b.user.id === message.author.id) return true;
       else {
     b.reply({ ephemeral: true, content: `Only **${message.author.tag}** can use this button, if you want then you've to run the command again.`}); return false;
           };
      },
      time : 60000,
      idle: 60000/2
    });
    collector.on("end", async () => {
		 if(!m) return;
        await m.edit({ components: [new MessageActionRow().addComponents(but1.setDisabled(true), but2.setDisabled(true), but3.setDisabled(true), but4.setDisabled(true),  but5.setDisabled(true)), new MessageActionRow().addComponents(but6.setDisabled(true), but7.setDisabled(true), but8.setDisabled(true), but9.setDisabled(true), but10.setDisabled(true)), new MessageActionRow().addComponents(but11.setDisabled(true), but12.setDisabled(true)) ] }).catch(() => {});
    });
	 
    collector.on('collect', async (i) => {
            if (i.customId === "youtube") {
            const youtubeemb = new Discord.MessageEmbed()
.setAuthor("| YouTube Together")
  .setThumbnail("https://cdn.discordapp.com/emojis/749289646097432667.png?v=1")
.setColor("#FF0000")
.setDescription(`
> **YouTube Together** is a discord-activity. You can use this command for watching Youtube with your friends in the same Voicechannel.\n
> **❓ __Whats Youtube Together__**?\n
> **•** YouTube Together allows you and your friends to watch synchronized YouTube videos together.In the same Voicechannel.\n
> **❓ __How to join__?**\n
Click the Following button to join in.\n 

> ⚠ **Note:** This command only works on pc/laptop. \n
> **__Do these things before using this command__** : \n
> **•** __Join a voice channel first!__
> **•** __Make Sure that the bot have the__ permission of making an invite.
> **•** __Enjoy!__
`) 
client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'youtube').then(async invite1 => {
    const yt = new MessageActionRow().addComponents(new MessageButton().setEmoji('926013227513544795').setStyle('LINK').setURL(invite1.code))
              i.reply({ embeds: [youtubeemb] ,components: [yt]});
});        
            }  else if (i.customId === "betrayal") {

const betreyalemb = new Discord.MessageEmbed()
        .setAuthor("| Betrayal")
          .setThumbnail("https://i.ibb.co/Nrcfswx/download.jpg")
        .setColor("#FFE4C7")
        .setDescription(`
>  **Betrayal.io** is a discord-activity game. You can use     this command for playing Betrayal.io with your friends in    the same voicechannel.\n
> **❓ __Whats Betrayal__**?\n
 > **•** It’s a mystery! Betrayal is a multiplayer mystery   game where you and 6-12 other players work together to      solve who among you is a betrayer to the crew!. Click on    the following button to to join in.\n
  > **❓ __How to join__?**\n
 Click the Following button to join in.\n
> ⚠ **Note:** This command only works on pc/laptop. \n
> **__Do these things before using this command__** : \n
> **•** __Join a voice channel first!__
> **•** __Make Sure that the bot have the__ permission of making an invite.
> **•** __Enjoy!__
`) 
              
client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'betrayal').then(async invite2 => {
   const bet = new MessageActionRow().addComponents(new MessageButton().setEmoji('🕵️‍♂️').setStyle('LINK').setURL(invite2.code))
              i.reply({ embeds:[betreyalemb],components: [bet]});
});  
              }  else if (i.customId === "chess") {
              const chessemb = new Discord.MessageEmbed()
.setAuthor("| Chess In The Park")
  .setThumbnail("https://i.ibb.co/pJW1NFv/chess-banner.png")
.setColor("#59FF30")
.setDescription(`
> **Chess In The Park** is a discord-activity game. You can use this command for playing Chess with your friends in the same Voicechannel.\n

> ❓ __Whats Chess In The Park__?\n
> **•** Chess In The Park is a discord developed game that allows you to play a chess ina voice channel with your friends as an activity.\n
> ❓ __How to join__?\n
Click the Following button to join in.

> ⚠ **Note:** This command only works on pc/laptop. \n
> **__Do these things before using this command__** : \n
> **•** __Join a voice channel first!__
> **•** __Make Sure that the bot have the__ permission of making an invite.
> **•** __Enjoy!__
`) 

client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'chess').then(async invite3 => {
   const chess = new MessageActionRow().addComponents(new MessageButton().setEmoji('♟').setStyle('LINK').setURL(invite3.code))
              i.reply({ embeds:[chessemb],components: [chess]});
});  

     }  else if (i.customId === "fishing") {

const fishingemb = new Discord.MessageEmbed()
.setAuthor("| Fishington.io")
  .setThumbnail(" https://i.ibb.co/yqbQp2J/download.jpg")
.setColor("#5DE1FF")
.setDescription(`
> **Fishington.io** is a discord-activity game. You can use this command for playing Fishington.io with your friends in the same Voicechannel.\n
> **❓ __Whats Fishington__**?\n
> **•** Fishington.io is a free IOGame. Welcome to the competitive sport fishing world of Fishington. This is a game where you pick out a custom character and take to the docks with your trusty fishing pole and try to reel in as many fish as you possibly can.\n
> **❓ __How to join__?**\n
Click the Following button to join in.\n
> ⚠ **Note:** This command only works on pc/laptop. \n
> **__Do these things before using this command__** : \n
> **•** __Join a voice channel first!__
> **•** __Make Sure that the bot have the__ permission of making an invite.
> **•** __Enjoy!__
`) 
           
client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'fishing').then(async invite4 => {
   const fishing = new MessageActionRow().addComponents(new MessageButton().setEmoji('🎣').setStyle('LINK').setURL(invite4.code))
              i.reply({ embeds: [fishingemb],components: [fishing]});
});  
              }  else if (i.customId === "lettertiles") {

const letemb = new Discord.MessageEmbed()
.setAuthor("| Letter Tile")
.setColor("BLUE")
.setDescription(`
> **Letter Tile** is a discord-activity game. You can use this command for playing Letter Tile with your friends in the same Voicechannel.\n

> ❓ __Whats Letter Tile__?\n
> **•** Letter Tile is an Activity that we've developed here at Discord. Letter Tile is a game where you and your friends take turns placing letters on a shared game board to create words in a crossword-style. Spelling words with high earning letters and placing letters on special spaces earn players more points, so get your dictionaries and thesauri ready!\n
> ❓ __How to join__?\n
Click the Following button to join in.

> ⚠ **Note:** This command only works on pc/laptop. \n
> **__Do these things before using this command__** : \n
> **•** __Join a voice channel first!__
> **•** __Make Sure that the bot have the__ permission of making an invite.
> **•** __Enjoy!__
`) 

              
client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'lettertile').then(async invite9 => {
   const letter = new MessageActionRow().addComponents(new MessageButton().setEmoji('893608366226698270').setStyle('LINK').setURL(invite9.code))
              i.reply({ embeds: [letemb] ,components: [letter]});
});                }  else if (i.customId === "wordssnack") {

const wordemb = new Discord.MessageEmbed()
.setAuthor("| Word Snack")
.setColor("BROWN")
.setDescription(`
> **Word Snack** is a discord-activity game. You can use this command for playing Word Snack with your friends in the same Voicechannel.\n

> ❓ __Whats Word Snacks__?\n
> **•** Word Snacks is a Channel Game that we've developed in-house and is available on our official, public Discord Games Lab server. Word Snacks is a multiplayer word search game, where you and your friends try to make as many words as possible from a few letters. The more words you can spell before your opponents, the higher your score!\n
> ❓ __How to join__?\n
Click the Following button to join in.

> ⚠ **Note:** This command only works on pc/laptop. \n
> **__Do these things before using this command__** : \n
> **•** __Join a voice channel first!__
> **•** __Make Sure that the bot have the__ permission of making an invite.
> **•** __Enjoy!__
`) 

              
client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'wordsnack').then(async invite5 => {
   const words = new MessageActionRow().addComponents(new MessageButton().setEmoji('893608400359919717').setStyle('LINK').setURL(invite5.code))
              i.reply({ embeds :[wordemb], components: [words]});
});      
  }  else if (i.customId === "doodlecrew") {

const doodleemb = new Discord.MessageEmbed()
.setAuthor("| Doodlecrew")
.setColor("BROWN")
.setDescription(`
> **Doodle Crew** is a discord-activity game. You can use this command for playing doodle crew with your friends in the same Voicechannel.\n

> ❓ __Whats Doodle Crew__?\n
> **•** Doodle Crew is an Activity that we've developed here at Discord. In Doodle Crew, one player sketches an image as a clue for other players to guess what the secret word is. Guessing quickly earns more points!\n
> ❓ __How to join__?\n
Click the Following button to join in.

> ⚠ **Note:** This command only works on pc/laptop. \n
> **__Do these things before using this command__** : \n
> **•** __Join a voice channel first!__
> **•** __Make Sure that the bot have the__ permission of making an invite.
> **•** __Enjoy!__
`) 

              
client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'doodlecrew').then(async invite6 => {
   const doodle = new MessageActionRow().addComponents(new MessageButton().setEmoji('893608429195780138').setStyle('LINK').setURL(invite6.code))
              i.reply({ embeds: [doodleemb] ,components: [doodle]});
});     
}  else if (i.customId === "poker") {

const pokeremb = new Discord.MessageEmbed()
.setAuthor("| Poker Night")
  .setThumbnail("https://i.ibb.co/NYmHX4n/Screen-Shot-2021-05-06-at-1-46-50-PM.png")
.setColor("#7A5FAB")
.setDescription(`
> **Poker Night** is a discord-activity game. You can use this command for playing Poker Night with your friends in the same Voicechannel.\n
> **❓ __Whats PokerNight__**?\n
> **•** PokerNight is a Discord Developed Game which allows you to play Poker in a Voicechannel with your friends Just like ChessInThePark.\n
> **❓ __How to join__?**\n
Click the Following button to join in.\n 

> ⚠ **Note:** This command only works on pc/laptop. \n
> **__Do these things before using this command__** : \n
> **•** __Join a voice channel first!__
> **•** __Make Sure that the bot have the__ permission of making an invite.
> **•** __Enjoy!__
`) 
           
client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'poker').then(async invite7 => {
   const poker = new MessageActionRow().addComponents(new MessageButton().setEmoji('839989105785307167').setStyle('LINK').setURL(invite7.code))
              i.reply({ embeds: [pokeremb] ,components: [poker]});
});                }  else if (i.customId === "checkers") {

const checkemb = new Discord.MessageEmbed()
.setAuthor("| Checkers In The Park")
.setColor("BLACK")
.setDescription(`
> **Chess In The Park** is a discord-activity game. You can use this command for playing Chess with your friends in the same Voicechannel.\n

> ❓ __Whats Checkers In The Park__?\n
> **•** Checkers in the Park is an Activity that we've developed here at Discord for playing checkers with your friends. \n
> ❓ __How to join__?\n
Click the Following button to join in.

> ⚠ **Note:** This command only works on pc/laptop. \n
> **__Do these things before using this command__** : \n
> **•** __Join a voice channel first!__
> **•** __Make Sure that the bot have the__ permission of making an invite.
> **•** __Enjoy!__
`) 

              
client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'checkers').then(async invite8 => {

   const checkers = new MessageActionRow().addComponents(new MessageButton().setEmoji('926740028288294923').setStyle('LINK').setURL(invite8.code))
              i.reply({ embeds: [checkemb] ,components: [checkers]});
});   }  else if (i.customId === "spellcast") {
             const spellemb = new Discord.MessageEmbed()
.setAuthor("| Spell Cast")
.setColor("PURPLE")
.setDescription(`
> **Spell Cast** is a discord-activity game. You can use this command for playing spell cast with your friends in the same Voicechannel.\n

> ❓ __Whats Spell Cast__?\n
> **•** Spell Cast is a game in which you cast spells. \n❓ __How to join__?\n
Click the Following button to join in.

> ⚠ **Note:** This command only works on pc/laptop. \n
> **__Do these things before using this command__** : \n
> **•** __Join a voice channel first!__
> **•** __Make Sure that the bot have the__ permission of making an invite.
> **•** __Enjoy!__
`) 
 
client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'spellcast').then(async invite10 => {
   const spell = new MessageActionRow().addComponents(new MessageButton().setEmoji('926790157145878559').setStyle('LINK').setURL(invite10.code))
              i.reply({ embeds: [spellemb] ,components: [spell]});
});  
 }  else if (i.customId === "puttparty") {
client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'puttparty').then(async invite11 => {

             const putemb = new Discord.MessageEmbed()
.setAuthor("| PuttParty")
.setColor("PURPLE")
.setDescription(`
> ❓ __Whats Putt Party__?\n
> **•** PuttParty is a discord-activity game. You can use this command for playing putt party with your friends in the same Voicechannel. \n ❓ __How to join__?\n
Click the Following button to join in.

> ⚠ **Note:** This command only works on pc/laptop. \n
> **__Do these things before using this command__** : \n
> **•** __Join a voice channel first!__
> **•** __Make Sure that the bot have the__ permission of making an invite.
> **•** __Enjoy!__
`) 
 
  
   const putt = new MessageActionRow().addComponents(new MessageButton().setEmoji('🎉').setStyle('LINK').setURL(invite11.code))
              i.reply({ embeds: [putemb] ,components: [putt]});
});   

     else if (i.customId === "awkword") {
client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'awkword').then(async invite12 => {

const awkemb = new Discord.MessageEmbed()
.setAuthor("| Awkword")
.setColor("BROWN")
.setDescription(`
> ❓ __Whats Awkword__?\n
> **•** > **Awkword** is a discord-activity game. You can use this command for playing awkword with your friends in the same Voicechannel.\n
> ❓ __How to join__?\n
Click the Following button to join in.

> ⚠ **Note:** This command only works on pc/laptop. \n
> **__Do these things before using this command__** : \n
> **•** __Join a voice channel first!__
> **•** __Make Sure that the bot have the__ permission of making an invite.
> **•** __Enjoy!__
`) 

  
   const awkword = new MessageActionRow().addComponents(new MessageButton().setEmoji('😬').setStyle('LINK').setURL(invite12.code))
              i.reply({ embeds: [awkemb] ,components: [awkword]});
});    

                return;
            }
        });
    }
});
//End Of The Command.

client.login('your Discord bot token');
