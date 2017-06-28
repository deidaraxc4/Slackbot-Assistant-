
module.exports = function(skill, info, bot, message) {
  //console.log('INVOCATION OF NON-CONFIGURED SKILL: ' + skill);
  // bot.reply(message, 'I understood this as `' + skill +
  //   '`, but you haven\'t configured how to make me work yet!');
  var fs = require("fs");
  var request = require("request");
  bot.reply(message, 'uploading schedule');

  // request.post({
  //   url: 'https://slack.com/api/files.upload',
  //   formData: {
  //     token: process.env.token,
  //     title: "example",
  //     filename: "example.txt",
  //     filetype: "auto",
  //     file: fs.createReadStream('example.txt'),
  //     channels: message.channel,
  //   },
  // },  function(err,response) {
  //   console.log(JSON.parse(response.body));
  // });

  // bot.api.files.upload({
  //   token: process.env.token,
  //   content: fs.createReadStream("example.txt"),
  //   filetype: "js",
  //   channels: message.channel
  // },function(err,response) {
  //   if(err) {
  //     console.log("failed to add file",err)
  //     bot.reply(message, 'sorry there was an error: '+err)
  //   }
  // });

};
