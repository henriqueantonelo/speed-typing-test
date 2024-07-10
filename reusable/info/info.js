function loadColorsFromLocalStorage() {
  const root = document.querySelector(":root");
  const textSecondary = localStorage.getItem("textSecondary");
  const hover = localStorage.getItem("hover");
  const menuBackground = localStorage.getItem("menuBackground");
  const menuBtns = localStorage.getItem("menuBtns");

  root.style.setProperty("--textSecondary", textSecondary);
  root.style.setProperty("--hover", hover);
  root.style.setProperty("--menuBackground", menuBackground);
  root.style.setProperty("--menuBtns", menuBtns);
}

window.addEventListener("DOMContentLoaded", loadColorsFromLocalStorage);
