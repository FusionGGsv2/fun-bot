const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    async run (client, message, args){

      

        const fun = new Discord.MessageEmbed()
        .setTitle('Fun')
        .addField('`>meme`', 'Generates a random meme')
        .addField('`>say`', 'make the bot say something')
        .addField('`>weather`', 'get the weather')
        .addField('`>avatar`', 'get your avatar') 
        .addField('`>announce`', 'send an announcement to a channel') 
        .addField('`>clyde`', 'make clyde say something') 
        .addField('`>cat`', 'get a random cat picture') 
        .addField('`>8ball`', 'ask it a question and it will tell response') 
        .addField('`>timer`', 'set a timer for as long as you like') 
        .setTimestamp()

        const utility = new Discord.MessageEmbed()
        .setTitle('Utility')
        .addField('`>ping`', 'Get the bot\'s API ping')
        .addField('`>help`', 'shows the current commands') 
        .addField('`>uptime`', 'shows how long the bot has been online for')
        .addField('`>stats`', 'get the stats of the bot')
        .addField('`>invite`', 'get the invite link for the bot')
        .setTimestamp()
    
    const extra = new Discord.MessageEmbed()
    .setTitle("Extra Commands")
    .addField('`>trivia`', 'starts a trivia')    
    .addField('`>achievement`', 'unlocks an achievement')   
    .addField('`>fact`', 'get a random fact')   
    .addField('`>howgay`', 'finds out how hay someone is (ITS A JOKE)')   
    .setTimestamp()
    

    
    const pages = [
              
                fun,
                utility,
               extra
               
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}






module.exports.help = {
name: "help",
  description: "sends the help menu"


}