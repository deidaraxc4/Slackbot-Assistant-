module.exports = function(skill, info, bot, message) {
  console.log('Invoking Hello Skill');
  var greetings = require('./Greetings.json');
  var randomResponse = Math.floor(Math.random()*greetings.length);
  bot.reply(message, greetings[randomResponse]);
};
