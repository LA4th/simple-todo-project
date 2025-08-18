const btnBurger = document.querySelector("#btnBurger");
const btnClose = document.querySelector("#btnClose");
const button = document.querySelectorAll("#btn-home, #btn-completeTask, #btn-about");
const btnAddTask = document.querySelector("#btn-add-task");
const btnModalClose = document.querySelector("#btn-modal-close");

const navMenu = document.querySelector("#navMenu");
const footerInfo = document.querySelector("#footerInfo");
const modalContainer = document.querySelector("#modal-container");

const viewNavBarToggle = () => {
  btnBurger.addEventListener("click", () => {
    navMenu.classList.remove("translate-x-full", "opacity-0", "pointer-events-none");
    footerInfo.classList.remove("translate-x-full", "opacity-0", "pointer-events-none");
    document.body.classList.add("overflow-hidden");
  });
  btnClose.addEventListener("click", () => {
    navMenu.classList.add("translate-x-full", "opacity-0", "pointer-events-none")
    footerInfo.classList.add("translate-x-full", "opacity-0", "pointer-events-none")
    document.body.classList.remove("overflow-hidden");
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

const modalViewAction = () => {
  btnAddTask.addEventListener("click", () => {
    modalContainer.classList.remove("hidden");
    document.body.classList.add("overflow-hidden")
  });

  btnModalClose.addEventListener("click", () => {
    modalContainer.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  });
};

export const eventListeners = () => {
  viewNavBarToggle();
  activeHoverNavMenu();
  modalViewAction();
};