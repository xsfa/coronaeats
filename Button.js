const parse = require('csv-parse');
const fs = new require('fs');

const url = [];
/*
// 1. Create the button
var button = document.createElement("button");
button.innerHTML = "Do Something";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {
  alert("did something");
});
*/
fs.createReadStream(__dirname + '/Users/tesfashenkute/coronaeats/urls.csv')
  .pipe(
    parse({
      delimiter: ',,,,,,,,'
    })
  )
  .on('data', function(dataRow) {
    url.push(dataRow)
  })

  .on('end', function() {
    console.log(url.head);
  })
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
