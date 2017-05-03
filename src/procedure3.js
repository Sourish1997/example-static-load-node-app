/**
 * Created by Sourish on 30-04-2017.
 */
console.time('Execution Time');
var fs = require('fs');
var qr = require('qr-image');

var data = fs.readFileSync('files/output.txt');
var urls = data.toString().split(' ');
console.log(urls.length);

for(var i = 0; i < urls.length; i++) {
    var code = qr.image(urls[i], { type: 'svg' });
    var output = fs.createWriteStream('files/qr_codes/code_' + i + '.svg');
    code.pipe(output);
}

console.timeEnd('Execution Time');