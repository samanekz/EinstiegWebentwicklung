function myFunction() {
  var x = document.getElementById("not_active");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// var y = document.getElementById("not_active").querySelectorAll("a");
// var i;
// for (i = 0; i < y.length; i++) {
//   y[i].style.backgroundColor = "green";
// }
