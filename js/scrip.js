// slider load
let slider = document.getElementById("slider");
let sliderMain = document.getElementById("sliderMain");
let sliderItem = document.querySelectorAll("#sliderItem");
let slideWidth = slider.offsetWidth;
let slideMainWidth = slideWidth * sliderItem.length;
sliderMain.style.width = slideMainWidth + "px";
for (let index = 0; index < sliderItem.length; index++) {
  sliderItem[index].style.width = slideWidth + "px";
}

// slider when click btn slide
let x = 0;
document.getElementById("btnSliderRight").addEventListener(
  "click",
  function () {
    x++;
    if (x > sliderItem.length - 1) {
      x = sliderItem.length - 1;
    }
    document.getElementById("sliderMain").style.transform =
      " translateX(-" + x * slider.offsetWidth + "px)";
  },
  true
);
document.getElementById("btnSliderLeft").addEventListener("click", function () {
  x--;
  if (x < 0) {
    x = 0;
  }
  document.getElementById("sliderMain").style.transform =
    " translateX(-" + x * slider.offsetWidth + "px)";
});
// slider when window change
window.addEventListener("resize", function () {
  slideWidth = slider.offsetWidth;
  w = slideWidth * sliderItem.length;
  sliderMain.style.width = w + "px";
  for (let index = 0; index < sliderItem.length; index++) {
    sliderItem[index].style.width = slideWidth + "px";
  }
  document.getElementById("sliderMain").style.transform =
    " translateX(-" + x * slider.offsetWidth + "px)";
});
