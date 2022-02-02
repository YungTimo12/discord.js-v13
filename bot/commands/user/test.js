const Discord = require("discord.js")

class Test {
  constructor() {
    this.name = "test";
    this.aliases = [];
    this.category = "User";
    this.description = "Test Komutudur";
  }
  async run(client, options, message, args){
   message.channel.send({ content: "test"})
    }
}

module.exports = Test;