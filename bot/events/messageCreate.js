
const chalk = require("chalk")
const moment = require("moment")

class MessageCreate {
  constructor() {}

  async run(client, options, message) {
    let prefix = options.prefix;
    let args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase()
    let cmd;
        if(client.commands.has(command)) {
          cmd = client.commands.get(command);
        } else if(client.aliases.has(command)) {
          cmd = client.commands.find(sa => sa.aliases && sa.aliases.includes(command));
        }
    if (!message.content.startsWith(prefix) || message.author.bot || !cmd)
      return;
    cmd.run(client, options, message, args);
  }
}

module.exports = MessageCreate;
