const chalk = require("chalk")
const moment = require("moment")
class Warn {
  constructor() {}

  async run(client, options, warn) {
    console.log(
      chalk.white("[" )+
        chalk.dim(`${moment(Date.now()).format('HH:mm')}`) +
        chalk.white("] " )+
      chalk.green(`WARN`) + 
      chalk.white(" | " )+
      chalk.green(`${warn}`) 
    );
    }
}

module.exports = Warn;
