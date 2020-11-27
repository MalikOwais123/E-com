var toTop = document.querySelector(".to-top");
var menBtn = document.querySelector(".menu-section .items .men");
var womenBtn = document.querySelector(".menu-section .items .women");
var contactBtn = document.querySelector(".menu-section .items .contact");
var aboutBtn = document.querySelector(".menu-section .items .about");

menBtn.addEventListener("click", () => {
  location.replace("./index.html");
});
womenBtn.addEventListener("click", () => {
  location.replace("./women.html");
});
contactBtn.addEventListener("click", () => {
  location.replace("./index.html");
});
aboutBtn.addEventListener("click", () => {
  location.replace("./index.html");
});

// ****************************************** GO-TO TOP **************************************************
toTop.addEventListener("mouseover", () => {
  toTop.style.backgroundColor = "black";
  toTop.style.transform = "translateY(-8px )";
});

toTop.addEventListener("mouseout", () => {
  toTop.style.backgroundColor = "#616161";
  toTop.style.transform = "translateY(0px)";
});

toTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
// ****************************************** GO-TO TOP END **************************************************
