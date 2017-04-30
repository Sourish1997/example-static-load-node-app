/**
 * Created by Sourish on 30-04-2017.
 */
console.time("Execution Time");
var fs = require("fs");

var data = fs.readFileSync('output.txt');
var urls = data.toString().split(' ');
var uniqueUrls = [];

for(var i = 0; i < urls.length; i++) {
    var dup = false;
    for(var j = i + 1; j < urls.length; j++) {
        if(urls[i] == urls[j]) {
            dup =true;
            break;
        }
    }
    if(!dup)
        uniqueUrls.push(urls[i]);
}
console.log(uniqueUrls);

fs.writeFileSync("output.txt", "");
for(var i = 0; i < uniqueUrls.length - 1; i++) {
    fs.appendFileSync("output.txt", uniqueUrls[i] + " ");
}
fs.appendFileSync("output.txt", uniqueUrls[i]);

console.timeEnd("Execution Time");