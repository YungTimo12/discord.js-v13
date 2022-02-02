const chalk = require("chalk")
const moment = require("moment")

class Error {
  constructor() {}

  async run(client, options, error) {
    console.log(
      chalk.white("[" )+
        chalk.dim(`${moment(Date.now()).format('HH:mm')}`) +
        chalk.white("] " )+
      chalk.red(`ERROR`) + 
      chalk.white(" | " )+
      chalk.red(`${error}`) 
    );
    }
}

module.exports = Error;
