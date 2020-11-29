var toTop = document.querySelector(".to-top");
var menBtn = document.querySelector(".menu-section .items .men");
var homeBtn = document.querySelector(".menu-section .items .home");
var womenBtn = document.querySelector(".menu-section .items .women");
var contactBtn = document.querySelector(".menu-section .items .contact");
var aboutBtn = document.querySelector(".menu-section .items .about");

homeBtn.addEventListener("click", () => {
  location.replace("./index.html");
});
menBtn.addEventListener("click", () => {
  location.replace("./index.html");
});
womenBtn.addEventListener("click", () => {
  location.replace("./women.html");
});
contactBtn.addEventListener("click", () => {
  // location.replace("./index.html");
});
aboutBtn.addEventListener("click", () => {
  location.replace("./about.html");
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

var showAllProductBtn = document.querySelector(".best-sellers .product-btn .button-wrapper")
showAllProductBtn.addEventListener("click",()=> {
  location.replace("./products.html")
})

// ***********************************************************

var goToForm = document.querySelector(".go-to-form")
var contactForm = document.querySelector(".contact-form")
var closeIcon = document.querySelector(".contact-form .right .btn .btn-wrapper")
console.log(closeIcon)
closeIcon.addEventListener("click" ,()=> {
  contactForm.style.display = "none"
})
console.log(contactForm)

goToForm.addEventListener("click" ,()=> {
  contactForm.style.display = "grid"
})

var whatsappBtn = document.querySelector(".right .discription .whatsapp")
// console.log(whatsappBtn)

whatsappBtn.addEventListener("click" , ()=> {
  location.replace("https://wa.me/message/FNSMY5ERARQGF1")
})

var showAllProductBtn = document.querySelector(".best-sellers .product-btn .button-wrapper")
// console.log(showAllProductBtn)
showAllProductBtn.addEventListener("click" ,()=> {
  location.replace("./products.html")
})

// console.log("after")

var navbarContactBtn = document.querySelector(".menu-section .items .contact")
// console.log(navbarContactBtn)
navbarContactBtn.addEventListener("click" ,()=> {
  contactForm.style.display = "grid"
})
