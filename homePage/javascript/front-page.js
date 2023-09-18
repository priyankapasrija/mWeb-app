const topMenuAndFirstRowContainer = document.querySelector(
  ".top-container-and-first-row"
);
const chemicalResistanceDiv = document.querySelector(".first-item-chemical");
const chemicalResistanceIcon = document.querySelector(".fa-solid");
const topMenu = document.querySelector(".top-menu-part");

let isAtOriginalPosition = topMenu.dataset.isopen;

const openSubMenu = () => {
  if (isAtOriginalPosition) {
    topMenuAndFirstRowContainer.style.transform = "translateY(-22vh)";
    chemicalResistanceDiv.style.color = "var(--bg-color)";
    chemicalResistanceIcon.style.color = "var(--bg-color)";
  } else {
    topMenuAndFirstRowContainer.style.transform = "translateY(0px)";
    chemicalResistanceDiv.style.color = "var(--icon-color-2)";
    chemicalResistanceIcon.style.color = "var(--icon-color-2)";
  }
  isAtOriginalPosition = !isAtOriginalPosition;
};

const closeSubMenu = () => {
  if (!isAtOriginalPosition) {
    topMenuAndFirstRowContainer.style.transform = "translateY(0px)";
    chemicalResistanceDiv.style.color = "var(--icon-color-2)";
    chemicalResistanceIcon.style.color = "var(--icon-color-2)";
    isAtOriginalPosition = !isAtOriginalPosition;
  }
};

const headerContainer = document.querySelector(".header-container");
const allSkeleton = document.querySelectorAll(".skeleton");
const home = document.querySelector("hide-text");

const image = document.querySelector(".brand-image");

const removeLoader = () => {
  allSkeleton.forEach((item) => {
    item.classList.remove("skeleton");
    console.log("page is loaded");
  });
};

window.addEventListener("load", removeLoader);
