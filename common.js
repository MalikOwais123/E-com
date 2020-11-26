var contact = document.querySelector(".footer-wrapper .item5 .link .contact");
var formStyle8 = document.querySelector(".form-style-8");
var close = document.querySelector(".close");
var send = document.querySelector(".send");
// console.log(close)
// console.log(formStyle8)
// console.log(contact);
// contact.addEventListener("click" ,()=> {
//   // console.log("click");
//   formStyle8.style.opacity = "1"
// })
close.addEventListener("click", () => {
  // console.log("click");
  //   formStyle8.style.opacity = "0"
//   window.opener = self;
//   console.log(window);
//   console.log("c");
});
send.addEventListener("click", () => {
  // console.log("click");
  formStyle8.style.opacity = "0";
});
