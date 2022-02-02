require("dotenv").config();

const favilances = require("./bot/favilances.js");
const Client = new favilances();

Client.start({
  token: process.env.BOT_TOKEN,
  prefix: process.env.BOT_PREFIX,
  owner: process.env.BOT_OWNER,
  databaseURL: process.env.DATABASE_URL,
});

