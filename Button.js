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
<script type="text/javascript">
    var urls = [

    ];

    function goSomewhere() {
        var url = urls[Math.floor(Math.random()*urls.length)];
        window.location = url; // redirect
    }
</script>
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
