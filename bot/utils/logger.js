const chalk = require("chalk")
const moment = require("moment")
class Logger {
    constructor() {}
  
    log(message) {
      console.log( 
        chalk.white("[" )+
      chalk.dim(`${moment(Date.now()).format('HH:mm')}`) +
      chalk.white("] " )+
      chalk.blue(`Favilances`) + 
      chalk.white(" | " )+
      chalk.blue(message) 

      );
    }
  
    error(message) {
      console.log("[Favilances] |", message);
    }
  
    warn(message) {
      console.log("[Favilances] |", message);
    }
  }
  
  module.exports = Logger;