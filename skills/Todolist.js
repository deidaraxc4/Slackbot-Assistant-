
module.exports = function(skill, info, bot, message) {
  console.log('Invoking todolist skill');
  var fs = require('fs');
  var list = require('./todo.txt');
  bot.reply(message, "Coming soon...a todo list that this bot should be able to do");
  // if(/"/.test(message.text)) {
  //     var lookup = message.text.match( /"(.*?)"/ )[1];
  //     for(var person in contacts) {
  //       if(person==lookup) {
  //         //print info for that person and break;
  //         bot.reply(message, "Here is "+person+"'s contact info");
  //         bot.reply(message, "email: "+contacts[person].email);
  //         bot.reply(message, "officenumber: "+contacts[person].officenumber);
  //         bot.reply(message, "cellnumber: "+contacts[person].cellnumber);
  //         foundPerson = true;
  //         break;
  //       }
  //     }
  //     if(foundPerson == false) {
  //       bot.reply(message, "hmm, I couldn't find that person in my database. Try capitalizing their name");
  //     }
  // } else {
  //   bot.reply(message, "it sounds like you are trying to look for someone's contact info, please specify their first name(capitalized) in `\"quotations\"`");
  // }

};
