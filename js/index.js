// SMOOTH SCROLLING
// The element html{scroll-behavior: smooth;} does not work in Safari < 15 or old mobile browsers.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target?.scrollIntoView({ behavior: 'smooth' });
  });
});

// HAMBURGER
var x = document.getElementById("mobile-hamburger");
x.style.display = "none";

function show(){
    var x = document.getElementById("mobile-hamburger");
    if (x.style.display === "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}