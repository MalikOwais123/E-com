var womenBtn = document.querySelector(".menu-section .items .women");
var menBtn = document.querySelector(".menu-section .items .men");
var toTop = document.querySelector(".to-top");
var contactBtn = document.querySelector(".menu-section .items .contact");
var aboutBtn = document.querySelector(".menu-section .items .about");

womenBtn.addEventListener("click", () => {
  location.replace("./index.html");
});
menBtn.addEventListener("click", () => {
  location.replace("./men.html");
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
// ****************************************** GO-TO TOP END**************************************************
