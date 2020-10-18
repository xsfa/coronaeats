const path = require('path');
const Path = path.join(__dirname, 'urls.txt');

var text = fs.readFileSync("./urls.txt").toString('utf-8');
var txtnolinebreaks = text.replace(/(\r\n|\n|\r)/gm,"");
var urls = txtnolinebreaks.split(",");

function runme() { 
  
  var value = urls[Math.floor(Math.random() * urls.length)];
  //alert("Will navigate to: " + value);
  window.location = value;     
}