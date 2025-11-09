var img = [
  "https://images.unsplash.com/photo-1736618625357-2a7f197f8c23?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  "https://images.unsplash.com/photo-1761960084255-7b45bd632251?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  "https://images.unsplash.com/photo-1762112800005-a61bacb1d15c?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
  "https://images.unsplash.com/photo-1761960084255-7b45bd632251?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600"
];

var index = 0;

var slide = document.querySelector("#slide");
var next = document.querySelector("#next");
var prev = document.querySelector("#prev");

next.addEventListener("click", function() {
  index = (index + 1) % img.length;
  slide.src = img[index];
});

prev.addEventListener("click", function() {
  index = (index - 1 + img.length) % img.length;
  slide.src = img[index];
});
