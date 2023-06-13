let slideIndex = 1;
let tabs = document.querySelectorAll("#tab");
let panes = document.querySelectorAll(".product-pane");
let listBtnAddCart = document.querySelectorAll("#add-to-cart");
// window load
window.onload = (event) => {
  let firstslider = document.querySelector("#sliderItem");
  firstslider.classList.add("active");
  let tapProduct = document.querySelector("#tab-product");
  tapProduct.getElementsByClassName("nav-link")[0].classList.add("active");
  tabs = document.querySelectorAll("#tab");
  panes = document.querySelectorAll(".product-pane");
  listBtnAddCart = document.querySelectorAll("#add-to-cart");
  productControll();
  tabChange();
};

// .navbar-toggler
document
  .querySelector(".navbar-toggler")
  .addEventListener("click", function () {
    let listnav = document.querySelector(".collapse.navbar-collapse");
    if (listnav.classList.contains("show")) {
      listnav.classList.remove("show");
    } else {
      listnav.classList.add("show");
    }
  });
// slider
function btnSliderRight() {
  slideIndex++;
  showSlides(slideIndex);
  let allslider = document.querySelectorAll(".slider-item");
  for (let i = 0; i < allslider.length; i++) {
    const element = allslider[i];
    element.style.animationName = "SliderHideRight";
  }
  document.querySelector(".slider-item.active").style.animationName =
    "SliderShowRight";
}

function btnSliderLeft() {
  slideIndex--;
  showSlides(slideIndex);
  let allslider = document.querySelectorAll(".slider-item");
  for (let i = 0; i < allslider.length; i++) {
    const element = allslider[i];
    element.style.animationName = "SliderHideLeft";
  }
  document.querySelector(".slider-item.active").style.animationName =
    "SliderShowLeft";
}
document
  .getElementById("btnSliderRight")
  .addEventListener("click", btnSliderRight);
//  button slider left click
document
  .getElementById("btnSliderLeft")
  .addEventListener("click", btnSliderLeft);
//show slider
function showSlides(n) {
  let i;
  let sliderList = document.querySelectorAll("#sliderItem");
  for (i = 0; i < sliderList.length; i++) {
    sliderList[i].classList.remove("active");
  }
  if (n > sliderList.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = sliderList.length;
  }

  sliderList[slideIndex - 1].classList.add("active");
}
tabs = document.querySelectorAll("#tab");
panes = document.querySelectorAll(".product-pane");

function productControll() {
  for (let index = 0; index < tabs.length; index++) {
    let element = tabs[index];
    if (element.classList.contains("active")) {
      let productTab = document.getElementById(
        element.innerHTML.trim().replace(" ", "")
      );
      productTab.classList.add("active");
      for (let i = 0; i < panes.length; i++) {
        let pane = panes[i];
        if (pane != productTab) {
          if (pane.classList.contains("active")) {
            pane.classList.remove("active");
          }
        }
      }
    }
  }
}

function tabChange() {
  for (let index = 0; index < tabs.length; index++) {
    let element = tabs[index];
    element.addEventListener("click", function () {
      element.classList.add("active");
      for (let i = 0; i < tabs.length; i++) {
        if (i != index) {
          tabs[i].classList.remove("active");
        }
      }
      productControll();
    });
  }
}
// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  navbarfollowscreen();
};

// Get the header
var header = document.getElementById("head-nav");
// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navbarfollowscreen() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
