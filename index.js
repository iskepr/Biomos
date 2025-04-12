const preloder = document.getElementById("preloder");
const preloderLogo = document.querySelector("#preloder h1");
const slogan = document.getElementById("slogan");

const header = document.querySelector("header");

const logo = document.querySelector(".top .logo");
const land = document.getElementById("land");

onload = function () {
  preloder.style.top = "100%";
  preloderLogo.style.top = "-250px";
  preloderLogo.style.fontSize = "40px";
  logo.style.transform = " translateY(0px)";

  setInterval(function () {
    if (innerWidth > 700) {
      land.style.width = "100%";
    } else if (innerWidth < 400) {
      land.style.width = "450%";
    } else {
      land.style.width = "270%";
    }
  }, 500);
  setInterval(function () {
    header.style.top = "0px";
    slogan.style.opacity = 1;
  }, 700);
};
