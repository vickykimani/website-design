// script for post-it note - do not edit
function showBrowserSize() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    document.getElementById("sizeInfo").innerHTML = "Width: " + w + "<br>Height: " + h;
}

// script for repsonsive menu - do not edit 
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
