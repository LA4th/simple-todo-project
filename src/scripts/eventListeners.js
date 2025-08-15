const btnBurger = document.querySelector("#btnBurger");
const btnClose = document.querySelector("#btnClose");
const button = document.querySelectorAll("#btn-home, #btn-completeTask, #btn-about");

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

const activeHoverNavMenu = () => {
  button.forEach(buttons => {
    buttons.addEventListener("click", () => {
      const targetId = buttons.id.replace("btn-", "section-");
      const targetSection = document.getElementById(targetId);

      targetSection.scrollIntoView({behavior: "smooth"});
    });
  });
};

export const eventListeners = () => {
  viewNavBarToggle();
  activeHoverNavMenu();
};