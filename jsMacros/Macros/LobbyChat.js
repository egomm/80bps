const sentence = event.text.toString()
const word = 'unclaimed leveling reward';
var words = `${sentence.includes(word) ? 'true' : 'false'}`;
if(words == "true") {
Chat.say("/play skyblock")
}