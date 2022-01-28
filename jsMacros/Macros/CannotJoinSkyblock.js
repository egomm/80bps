command = false
hubscoreboard = false
const sentence = event.text.toString()
const firstword = 'Player visibility disabled!';
var firstwords = `${sentence.includes(firstword) ? 'true' : 'false'}`;
const secondword = 'Player visibility enabled!';
var secondwords = `${sentence.includes(secondword) ? 'true' : 'false'}`;
const thirdword = 'You must wait 3s between uses!';
var thirdwords = `${sentence.includes(thirdword) ? 'true' : 'false'}`;
const fourthword = 'Cannot join SkyBlock for a moment';
var fourthwords = `${sentence.includes(fourthword) ? 'true' : 'false'}`;
const fifthword = 'spam the command!';
var fifthwords = `${sentence.includes(fifthword) ? 'true' : 'false'}`;
const sixthword = 'Try again later!'
var sixthwords = `${sentence.includes(sixthword) ? 'true' : 'false'}`;
if(firstwords == "true" || secondwords == "true" || thirdwords == "true" || fourthwords == "true" || fifthwords == "true" || sixthwords == "true") {
  Chat.say("/play skyblock")
}