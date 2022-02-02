const chalk = require("chalk")
const moment = require("moment")

class RawWS {
  constructor() {}

  async run(client, options, packet) {
    if (packet.t === "INTERACTION_CREATE") {
      const data = packet.d;
      const interaction = new Interaction(data, client.user.id, options.token);
      const command = client.slashcommands.get(data.data.name);
      if (command) command.run(client, options, interaction, lang);
    }
  }
}

module.exports = RawWS;
