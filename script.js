// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// DARK MODE

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){

    localStorage.setItem("theme","dark");

    themeToggle.innerHTML =
    '<i class="fa-solid fa-sun"></i>';

  }

  else{

    localStorage.setItem("theme","light");

    themeToggle.innerHTML =
    '<i class="fa-solid fa-moon"></i>';
  }

});


// LOAD SAVED THEME

window.addEventListener("load", () => {

  const savedTheme = localStorage.getItem("theme");

  if(savedTheme === "dark"){

    document.body.classList.add("dark");

    themeToggle.innerHTML =
    '<i class="fa-solid fa-sun"></i>';
  }

});


// BACK TO TOP BUTTON

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

  if(window.scrollY > 400){
    backToTop.style.display = "block";
  }

  else{
    backToTop.style.display = "none";
  }

});

backToTop.addEventListener("click", () => {

  window.scrollTo({
    top:0,
    behavior:"smooth"
});

});


// NAVBAR EFFECT

window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 20){
    navbar.style.padding = "12px 20px";
  }

  else{
    navbar.style.padding = "15px 25px";
  }

});
const sparklesText = document.getElementById("sparklesText");

function createSparkle(){

  const sparkle = document.createElement("span");

  sparkle.classList.add("sparkle");

  const size = Math.random() * 10 + 5;

  sparkle.style.width = `${size}px`;
  sparkle.style.height = `${size}px`;

  sparkle.style.left = `${Math.random() * sparklesText.offsetWidth}px`;

  sparkle.style.top = `${Math.random() * sparklesText.offsetHeight}px`;

  sparkle.style.background =
    Math.random() > 0.5
    ? "#47c96b"
    : "#8cffab";

  sparkle.style.animationDuration =
    `${Math.random() * 2 + 1}s`;

  sparklesText.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 2000);
}

setInterval(createSparkle, 200);
const shinyBtns = document.querySelectorAll(".shiny-btn");

shinyBtns.forEach(btn => {

  btn.addEventListener("click", () => {

    btn.style.transform = "scale(0.95)";

    setTimeout(() => {
      btn.style.transform = "scale(1)";
    }, 150);

  });

});