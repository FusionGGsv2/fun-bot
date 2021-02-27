const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "achievement",
  description: "Gives you an achievment",
  category: "fun",
  run: async (client, message, args) => {
    const text = args.join("+");
    const e = new MessageEmbed()
      .setTitle("MineCraft achievement!")
      .setImage(
        `https://minecraftskinstealer.com/achievement/12/Achievement%20Unlocked!/${text}`
      );
    message.channel.send(e);
  },
};



module.exports.help ={
    name: "achievement"
}