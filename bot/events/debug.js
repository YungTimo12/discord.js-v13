const chalk = require("chalk")
const moment = require("moment")

class Debug {
    constructor() {}
  
    async run(client, options, debug, info) {
      console.log(
        chalk.white("[" )+
          chalk.dim(`${moment(Date.now()).format('HH:mm')}`) +
          chalk.white("] " )+
        chalk.blue(`DEBUG`) + 
        chalk.white(" | " )+
        chalk.blue(`${debug}`) 
      );
      }
  }
  
  module.exports = Debug;
  