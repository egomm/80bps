const sentence = event.text.toString()
const firstword = 'unclaimed leveling reward';
var firstwords = `${sentence.includes(firstword) ? 'true' : 'false'}`;
const secondword = 'You have reached your Hype limit'
var secondwords = `${sentence.includes(secondword) ? 'true' : 'false'}`;
if(firstwords == "true" || secondwords == "true") {
    Chat.say("/play skyblock")
}
