var changeBgColor = document.querySelector("#change-bg-color");
var toTop = document.querySelector(".to-top");
var icon = document.querySelector(".nav-bar");
var image1 = "./Shoes/shoe2.jpg";
var image2 = "./Shoes/shoe3.jpg";
// var image3 = "./images/shoeImages/shoe4.jpg";
var image3 = "./Shoes/shoe7.jpg";

var slideShow = 0;
var imageHandler = [image1, image2, image3];

var prevBtn = document.querySelector("#prevBtn");
var nextBtn = document.querySelector("#nextBtn");
var slider = document.querySelector(".slider");

var div1 = document.querySelector(".div1");
var div2 = document.querySelector(".div2");
var div3 = document.querySelector(".div3");
console.log(div1);



// *****************************************************************


(function () {
  // var slideShow = 0;
  setInterval(function () {
    if (slideShow === imageHandler.length - 1) {
      // div3 show here
      slideShow = 0;
      slider.style.backgroundImage = `url('${imageHandler[slideShow]}')`;
      // slider.innerHTML = `<div>hhhhhh</div>`
      slider.innerHTML = `<div class="div1 flex">
                            <h1>MEN'S</h1>
                            <h3>SHOES</h3>
                            <h2>COLLECTION</h2>
                            <h4>New trending shoes</h4>
                            <div class="slider-btn flex">SHOP COLLECTION</div>
                          </div>`
    } else if (slideShow === 0) {
      slideShow++;
      slider.style.backgroundImage = `url('${imageHandler[slideShow]}')`;
      slider.innerHTML = `<div class="div1 flex">
                            <h1>SPORT</h1>
                            <h3>SHOES</h3>
                            <h2>COLLECTION</h2>
                            <h4>New trending shoes</h4>
                            <div class="slider-btn flex">SHOP COLLECTION</div>
                          </div>`
      // div1 show here
    } else if (slideShow === 1) {
      // div2 show here
      slideShow++;
      slider.style.backgroundImage = `url('${imageHandler[slideShow]}')`;
      slider.innerHTML = `<div class="div1 flex">
                            <h1>MEN'S</h1>
                            <h3>SHOES</h3>
                            <h2>COLLECTION</h2>
                            <h4>New trending shoes</h4>
                            <div class="slider-btn flex">SHOP COLLECTION</div>
                          </div>`
    }
  }, 5000);
})();

// --------------------

changeBgColor.addEventListener("mouseover", () => {
  changeBgColor.style.backgroundColor = "black";
});

changeBgColor.addEventListener("mouseout", () => {
  changeBgColor.style.backgroundColor = "#616161";
});

// go to top button
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

// icon
