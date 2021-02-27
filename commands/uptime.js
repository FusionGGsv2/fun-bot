const Discord = require('discord.js');
let days = 0;
let week = 0;

module.exports.run = (client, message, args) =>{
    var milliseconds = parseInt((client.uptime % 1000) / 100),
  seconds = parseInt((client.uptime / 1000) % 60),
  minutes = parseInt((client.uptime / (1000 * 60)) % 60),
  hours = parseInt((client.uptime / (1000 * 60 * 60)) % 24);
  var days = parseInt((client.uptime / (1000 * 60 * 60 * 24)) % 60);
  days = (days < 10) ? "0" + days : days;
  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;

    

    let serverembed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .addField('Uptime', days + "d " + hours + "h " + minutes + "m " + seconds + "." + milliseconds + "s");

    message.channel.send(serverembed);

}

module.exports.help = {
    name: "uptime",
    description: "This command is used for reporting bot's uptime",
    aliases: []
}