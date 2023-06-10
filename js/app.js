window.onload = (event) => {
  let firstslider = document.getElementById("sliderItem");
  firstslider.classList.add("active");
  sliderStartLoop();
};

// slider
let slideIndex = 1;
//stop loop  10s when  button slider click
//  button slider right click
document
  .getElementById("btnSliderRight")
  .addEventListener("click", btnSliderRight);

function btnSliderRight() {
  slideIndex++;
  showSlides(slideIndex);
  sliderStopLoop();
}
//  button slider left click
document
  .getElementById("btnSliderLeft")
  .addEventListener("click", btnSliderLeft);

function btnSliderLeft() {
  slideIndex--;
  showSlides(slideIndex);
  sliderStopLoop();
}

//show slider
function showSlides(n) {
  let i;
  let sliderList = document.querySelectorAll("#sliderItem");
  if (n > sliderList.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = sliderList.length;
  }
  for (i = 0; i < sliderList.length; i++) {
    sliderList[i].classList.remove("active");
  }
  sliderList[slideIndex - 1].classList.add("active");
}

// resize slider
window.addEventListener("resize", function (event) {
  let widthSlider = this.document.getElementById("slider");
  let widthSliderMain = this.document.getElementById("sliderMain");
  let imgSlide = this.document.getElementById("imgSlide");
  if (widthSlider.offsetWidth < 900) {
    widthSliderMain.style.width = widthSlider.offsetWidth + "px";
  } else widthSliderMain.style.width = "900px";
});
// start loop slider
let slideLoop;
function sliderStartLoop() {
  slideLoop = setInterval(function () {
    slideIndex++;
    showSlides(slideIndex);
  }, 3000);
}

//stop loop slider
function sliderStopLoop() {
  clearInterval(slideLoop);
  setTimeout(sliderStartLoop, 8000);
}
