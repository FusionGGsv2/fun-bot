const Discord = require("discord.js")
const { version } = require("discord.js")
const moment = require("moment")
const m = require("moment-duration-format")
const os = require("os")
const cpuStat = require("cpu-stat")
const ms = require("ms")

exports.run = async (bot, message, args) => {
  
  let cpuLol;
  cpuStat.usagePercent(function(err, percent, seconds) {
   if (err) {
     return console.log(err)
   } 
    const duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m[mins], s [secs]");
    const embed = new Discord.MessageEmbed()
    .setTitle(`${bot.user.username} Statistic`)
    .setColor("RANDOM")
    .addField("Mem Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
    .addField("Uptime", `${duration}`, true)
    .addField("Users", `${bot.users.cache.size}`, true)
    .addField("Server", `${bot.guilds.cache.size}`, true)
    .addField("Channels", `${bot.channels.cache.size}`, true)
    .addField("Discord.js", `v${version}`, true)
    .addField("Node", `${process.version}`, true)
    .addField("CPU", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
    .addField("CPU Usage", `\`${percent.toFixed(2)}%\``, true)
    .addField("Arch", `\`${os.arch()}\``, true)
    .addField("Platform", `\`\`${os.platform()}\`\``, true)
    .addField("Websocket", `\`${bot.ws.ping}\`MS`, true)
    .setFooter(`Request by ${message.author.tag}`)
    .setTimestamp()
    
    message.channel.send(embed)
    
  })
  
}






module.exports.help = {
name: "stats",
description: "sends the stats of the bot"

}