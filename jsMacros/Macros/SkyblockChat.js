const sentence = event.text.toString()
const firstword = 'Sending to server';
var firstwords = `${sentence.includes(firstword) ? 'true' : 'false'}`;
if(firstwords == "true") {
    JsMacros.runScript("Start.js")
}
