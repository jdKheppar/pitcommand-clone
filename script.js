let hamburger = document.getElementById("hamburger-icon");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
});

window.onscroll = function () {
  // Check if the hamburger has the "open" class
  if (!hamburger.classList.contains("open")) {
    myFunction();
  }
};

var header = document.getElementById("nav");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
