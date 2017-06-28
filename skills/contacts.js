
module.exports = function(skill, info, bot, message) {
  // console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  // bot.reply(message, 'I understood this as `' + skill +
  //   '`, but you haven\'t configured how to make me work yet!'+'Tell your code monkey to fill in the module for '+skill);
  var contacts = require('./contact.json');
  var foundPerson = false;
  //TODO regex to find "person" and lookup in contact that or post all info
  if(/"/.test(message.text)) {
      var lookup = message.text.match( /"(.*?)"/ )[1];
      for(var person in contacts) {
        if(person==lookup) {
          //print info for that person and break;
          bot.reply(message, "Here is "+person+"'s contact info");
          bot.reply(message, "email: "+contacts[person].email);
          bot.reply(message, "officenumber: "+contacts[person].officenumber);
          bot.reply(message, "cellnumber: "+contacts[person].cellnumber);
          foundPerson = true;
          break;
        }
      }
      if(foundPerson == false) {
        bot.reply(message, "hmm, I couldn't find that person in my database. Try capitalizing their name");
      }
  } else {
    bot.reply(message, "it sounds like you are trying to look for someone's contact info, please specify their first name(capitalized) in `\"quotations\"`");
  }

};
