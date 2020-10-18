//const Path = path.join(__dirname, 'urls.txt');

var text = fs.readFileSync("./urls.txt").toString('utf-8');
var txtnolinebreaks = text.replace(/(\r\n|\n|\r)/gm,"");
var urls = txtnolinebreaks.split(",");

function runme() { 
  var value = urls[Math.floor(Math.random() * urls.length)];
  //alert("Will navigate to: " + value);
  window.location = value;     
}
runme();
/*
var links = new Array();
links[0] = “http://www.google.com/ 1”;
links[1] = “http://www.altavista.com/ 1”;
links[2] = “http://www.yahoo.com/”;
links[3] = “http://www.excite.com/”;

function untitledFunction() {
// Chooses a random link:
var i = Math.floor(Math.random() * links.length);
// Directs the browser to the chosen target:
parent.location = links[i];
return false;

}
untitledFunction();
*/
