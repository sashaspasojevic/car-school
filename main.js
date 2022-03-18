let menuBtn = document.querySelector("#menu-btn");
let menuBox = document.getElementById("menu-box");
let dropMenu = document.querySelectorAll(".drop");

menuBtn.addEventListener("click", toggleMenu);

dropMenu.forEach((el) => {
  el.addEventListener("click", toggleSuMenu);
});

function toggleMenu() {
  // sklanjamo listu
  if (menuBox.classList.contains("toggle")) {
    menuBox.style.maxHeight = 0 + "px";
    // sklanjamo listu drop listu
    dropMenu.forEach((el) => {
      el.querySelector("ul").style.maxHeight = 0 + "px";
    });
  } else {
    menuBox.style.maxHeight = menuBox.scrollHeight + "px";
  }
  menuBox.classList.toggle("toggle");
}

// f-ja za toggle drop menija
function toggleSuMenu() {
  let subMenu = this.querySelector("ul");
  if (subMenu.classList.contains("toggle")) {
    subMenu.style.maxHeight = 0 + "px";
  } else {
    subMenu.style.maxHeight = subMenu.scrollHeight + "px";
  }
  subMenu.classList.toggle("toggle");
}
