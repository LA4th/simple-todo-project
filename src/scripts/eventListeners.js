const btnBurger = document.querySelector("#btnBurger");
const btnClose = document.querySelector("#btnClose");
const btnHome = document.querySelector("#btnHome");
const btnCompleteTask = document.querySelector("#btnCompleteTask");
const btnAbout = document.querySelector("#btnAbout");

const navMenu = document.querySelector("#navMenu");
const footerInfo = document.querySelector("#footerInfo");

const viewNavBarToggle = () => {
  btnBurger.addEventListener("click", () => {
    navMenu.classList.remove("translate-x-full", "opacity-0", "pointer-events-none");
    footerInfo.classList.remove("translate-x-full", "opacity-0", "pointer-events-none");
  });
  btnClose.addEventListener("click", () => {
    navMenu.classList.add("translate-x-full", "opacity-0", "pointer-events-none")
    footerInfo.classList.add("translate-x-full", "opacity-0", "pointer-events-none")
  });
};

export const eventListeners = () => {
  viewNavBarToggle();
};