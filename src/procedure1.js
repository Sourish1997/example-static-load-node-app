/**
 * Created by Sourish on 30-04-2017.
 */
console.time("Execution Time");
var fs = require("fs");

var data = fs.readFileSync('names.txt');
var namesList = data.toString().split(' ');
var re = "http(s)*:\/\/(.)*(\.)(com|org|net|int|edu|gov|mil|in|au|jp|ca|cn|us|kr)(.)*";
var urls = [];

for(var i = 0; i < namesList.length; i++) {
    var data = fs.readFileSync(namesList[i]);
    var wordsList = data.toString().split(' ');

    for (var j = 0; j < wordsList.length; j++) {
        var word = wordsList[j];
        if (word.match(re))
            urls.push(word)
    }
}
console.log(urls);

for(var i = 0; i < urls.length - 1; i++) {
    fs.appendFileSync("output.txt", urls[i] + " ");
}
fs.appendFileSync("output.txt", urls[i]);

console.timeEnd("Execution Time");