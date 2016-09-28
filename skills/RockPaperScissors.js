module.exports = function(skill, info, bot, message, db) {
function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}		
  var userData = message.text.match(/\<(.*?)\>/g);  //suss out any @mentions of users
  if (userData) {
    // if there is a user is mentioned initiate the challenge!
    var challenged = userData[0].replace(/[^\w\s]/gi, '');

    bot.api.users.info({user: challenged}, (error, response) => {
        bot.reply(message, ':rotating_light: <@' + response.user.name + '> you have been challenged to a game of ROCK:mountain: , PAPER:spiral_note_pad: , SCISSORS:scissors:! Prepare to defend your honor!'); 
    });
    bot.startPrivateConversation(message, privateConvo(bot, message));
  } else {
    //if no user challenged
    bot.reply(message, 'You didn\'t challenge anyone you chicken shit! :chicken: :poop:');
  }

function privateConvo(bot, message) {
  const { user, channel } = message;

  return (err, convo) => {
    if (err) throw err;
    var rnd = Math.floor(Math.random()* 65);
    var encouragementArray = [
    'I believe in you!:hugging_face:',
    'I\'m sure you\'ll do your best!:heart:',
    'you\'re already a winner in my book!:wink:',
    'nothing can stop you!:smirk_cat:',
    'you have the eye of the tiger:smirk_cat:',
    'you have the heart of a champion:trophy:',
    'your lucky numbers are ' + rnd + ', ' + rnd + ', ' + rnd + ', ' + rnd + ', ' + rnd + '. :four_leaf_clover:',
    'take no prisoners! :rage1:',
    'Rock! On second thought- Paper! No Wait! Scissors...actually IDK',
    'Paper! NO, Rock! No Wait! Scissors; I made things worse, sorry. :disappointed:',
    'shoot straight!:grin:',
    'trust the force.',
    'trust in your instincts.',
    'Paper is on a roll!',
    'Get it. GET IT!',
    'You got this.:raised_hands:',
    'like a boss.:man_in_business_suit_levitating: ',
    'Establish dominance!',
    'what is best in life- Crush your enemies. See them driven before you. Hear the lamentations of their women.',
    'Rock it, or paper it? or _scissor_ it??:flushed:',
    'Cut em with scissors!',
    'Steady like a rock!',    
    'give no quarter, and expect none either!:crossed_swords: ',
    'no retreat, no surrender!:crossed_swords: ', 
    'I\'m not friends with losers- so try not to lose, eh? :trollface:',     
    'If you\'re not first you\'re last!',        
    'if you lose, don\'t bother coming home. :trollface:',
    'nothing can conquer your indomitable spirit!:raised_hands:'
    ];
    var randomEncouragement = Math.floor(Math.random()* encouragementArray.length); 
    convo.ask('Do you want to play `paper`, `rock`, or `scissors`? No matter what you choose just remember: ' + encouragementArray[randomEncouragement], [
      {
        pattern: 'paper|rock|scissors',
        callback(response, convo) {
          // since no further messages are queued after this,
          // the conversation will end naturally with status === 'completed'
          convo.next();
        },
      }, {
        default: true,
        callback(response, convo) {
          convo.repeat();
          convo.next();
        },
      },
    ], { key: 'rockPaperScissors' }); // store the results in a field called rockPaperScissors

    convo.on('end', (convo) => {
      if (convo.status === 'completed') {
        var userPlay = convo.extractResponse('rockPaperScissors');
	var rpsObj = db.getSync("rps");

          if (err) throw err;



          if (isEmpty(rpsObj)) { //SWAP THIS LOGIC to support RPSSLSBSWG if all players have played!

		  console.log('no one played');
		  
          } else { //record player enter, note in channel

		  console.log('someone played');
		  
          }

		  
      } else {
        // this happens if the conversation ended prematurely for some reason
        bot.reply(message, 'OK, nevermind!');
      }
	  
	  });
 }
 };
    

  
  
  var gameEngine = require('./Rock-Paper-Spock');
  
    //bot.api.users.info({user: message.user}, (error, response) => {
        //bot.reply(message, 'Rock Paper Scissors (lizard, spock, spiderman, batman, wizard, glock?)');
    //})  

  var instance = new gameEngine(gameEngine.DefaultRules);
  instance.addPlayer({id: 1, sign: "paper"});
  instance.addPlayer({id: 2, sign: "rock"});
  instance.play();
  console.log(instance.winner);
  //note players that won-lost, add support for W-L records
  //bot.reply(message, 'test successful. maybe code something more useful next time?');
};
