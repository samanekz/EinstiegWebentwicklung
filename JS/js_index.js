function image_change() {
  var image = document.getElementById("main_img");
  if (image.src.match("assets/images/main_index1.jpg")) {
    image.src = "assets/images/main_index2.jpg";
  } else if (image.src.match("assets/images/main_index2.jpg")) {
    image.src = "assets/images/main_index3.jpg";
  } else if (image.src.match("assets/images/main_index3.jpg")) {
    image.src = "assets/images/main_index4.jpg";
  } else if (image.src.match("assets/images/main_index4.jpg")) {
    image.src = "assets/images/main_index5.jpg";
  } else if (image.src.match("assets/images/main_index5.jpg")) {
    image.src = "assets/images/main_index1.jpg";
  }

  setTimeout(image_change, 10000);
}

function myFunction() {
  var x = document.getElementById("not_active");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

setTimeout(image_change, 10000);
