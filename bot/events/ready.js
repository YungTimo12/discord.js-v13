const chalk = require("chalk")
const moment = require("moment")

class Ready {
  constructor() {}

  async run(client, options) {
    console.log(
      chalk.white("[" )+
        chalk.dim(`${moment(Date.now()).format('HH:mm')}`) +
        chalk.white("] " )+
      chalk.red(`${client.user.username}`) + 
      chalk.white(" | " )+
      chalk.red(`ONLINE`) 
    );
    client.user.setActivity("Favilances")
  }
}

module.exports = Ready;
