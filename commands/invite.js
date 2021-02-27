
//  Invite command for your bot 

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{

    const InviteEmbed = new Discord.MessageEmbed()
    .setTitle('Invite me to your server!') 
    .setDescription('[Click here to invite](https://discord.com/oauth2/authorize?client_id=778724861228613642&scope=bot&permissions=70257759)')
    .setColor('RANDOM')
    .setThumbnail(bot.user.avatarURL()) 

    message.channel.send(InviteEmbed);
}

module.exports.help ={
    name: "invite"
}