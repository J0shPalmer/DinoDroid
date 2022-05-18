const Discord = require("discord.js");

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

const prefix = "!";

client.once("ready", () => {
  console.log("DinoDroid is online");
});

client.on("messageCreate", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "hello") {
    message.channel.send("hallo");
  } else if (command === "ping") {
    message.channel.send("pong");
  }
});

client.login(
  "OTc2NTc4MjEwOTc0MjgxODI4.GJQUL8.XYiqXeGiOg4l6jKEeomB-2CdKUm3LOoiRNgwb0"
);
