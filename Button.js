const fs = new require('fs');
const path = require('path');
const Path = path.join(__dirname, 'urls.txt');
/*
var button = document.createElement("button");
button.innerHTML = "Do Something";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

button.addEventListener ("click", function() {
  alert("this");
});
*/
var text = fs.readFileSync("./urls.txt").toString('utf-8');
var textByLine = text.split(",")

console.log(textByLine);
/* <script type="text/javascript">

    function getAsText()

    var urls = [];
    
    function goSomewhere() {
        var url = urls[Math.floor(Math.random()*urls.length)];
        window.location = url; // redirect
    }
</script>
//<a href="#" onClick="goSomewhere(); return false;">Gimme something weird!</a>
/**
 * body {
  padding: 20px;
}
button {
  margin-top: 20px;
  line-height: 60px;
  font-weight: bold;
  padding: 0 40px;
  background: salmon;
  border: none;
}
button:hover {
  background: lightsalmon;
}

 */
