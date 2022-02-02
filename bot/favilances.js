const Discord = require("discord.js")
const fs = require("fs");
const chalk = require("chalk")
const moment = require("moment")
const mongoose = require("mongoose");
const Logger = require("./utils/logger.js");
const logger = new Logger();
class favilances {
    constructor() {}
    start(options) {
      const client = new Discord.Client({
        intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"],
        partials: ["GUILD_MEMBER", "CHANNEL", "REACTION"],
      });
      
require("dotenv").config();
client.logger = logger;

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () =>
console.log(
  chalk.white("[" )+
  chalk.dim(`${moment(Date.now()).format('HH:mm')}`) +
  chalk.white("] " )+
  chalk.yellow(`Database`) + 
  chalk.white(" | " )+
  chalk.yellow(`CONNECTED`) 
)
);




client.login(process.env.BOT_TOKEN)

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
this.loadEvents(client, options),
this.loadCommands(client, options)
}

loadEvents(client, options) {
fs.readdir("./bot/events", async (err, files) => {
  files.forEach((file) => {
    let eventName = file.replace(".js", "");
    let event = require(`./events/${file}`);
    console.log(
      chalk.white("[" )+
        chalk.dim(`${moment(Date.now()).format('HH:mm')}`) +
        chalk.white("] " )+
      chalk.magenta(`INSTALLER`) + 
      chalk.white(" | " )+
      chalk.magenta(`${eventName.toUpperCase()} UPLOADED`) 
    );
   // logger.log(`LOADING ${eventName.toUpperCase()} EVENT...`);
    client.on(eventName, (...args) => {
      return new event().run(client, options, ...args);
    });
  });
});
}

async loadCommands(client, options) {

const normalCommandsFolder = fs.readdirSync("./bot/commands");

for (const folder of normalCommandsFolder) {
  const folders = fs.readdirSync(`./bot/commands/${folder}`);
  for (const file of folders) {
    let command = require(`./commands/${folder}/${file}`);
    command = new command();
    console.log(
      chalk.white("[" )+
        chalk.dim(`${moment(Date.now()).format('HH:mm')}`) +
        chalk.white("] " )+
      chalk.green(`INSTALLER`) + 
      chalk.white(" | " )+
      chalk.green(`${command.name.toUpperCase()} UPLOADED`) 
    );
    //logger.log(`LOADING ${command.name.toUpperCase()} COMMAND...`);
    client.commands.set(command.name, command)
    if (command.aliases) {
      command.aliases.forEach(alias => {
          client.aliases.set(alias, command.name);
      })
  }
}}



 }
}
module.exports = favilances;