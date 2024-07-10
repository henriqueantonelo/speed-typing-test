const root = document.querySelector(":root");
const bgColorInput = document.querySelector(".bg-color[data-coloris]");
const mainTextInput = document.querySelector(".main-text[data-coloris]");
const mainSecondaryInput = document.querySelector(
  ".main-secondary[data-coloris]"
);
const primaryInput = document.querySelector(".primary[data-coloris]");
const textPrimaryInput = document.querySelector(".text-primary[data-coloris]");
const textSecondaryInput = document.querySelector(
  ".text-secondary[data-coloris]"
);
const hoverInput = document.querySelector(".hover[data-coloris]");
const menuBackgroundInput = document.querySelector(
  ".menu-background[data-coloris]"
);
const menuButtonsInput = document.querySelector(".menu-buttons[data-coloris]");
const resetThemeInput = document.querySelector(".reset-theme-btn");

const mainIncorrectInput = document.querySelector(
  ".main-incorrect[data-coloris]"
);

const colors = {
  bgcolor: ["Background"],
  mainText: [],
  mainSecondary: [],
  primaryColor: [],
  textPrimary: [],
  textSecondary: [],
  hover: [],
  menuBackground: [],
  menuBtns: [],
  mainIncorrect: [],
};

bgColorInput.addEventListener("change", function (event) {
  if (event.target === bgColorInput) {
    root.style.setProperty("--preview-bgcolor", bgColorInput.value);
    colors.bgcolor.push(bgColorInput.value);
    colors.bgcolor.splice(0, colors.bgcolor.length - 1);
  }
  if (bgColorInput.value !== "Background") {
    bgColorInput.value = "Background";
  }
});

bgColorInput.addEventListener("click", function () {
  bgColorInput.value = colors.bgcolor;
});

mainTextInput.addEventListener("change", function (event) {
  if (event.target === mainTextInput) {
    root.style.setProperty("--preview-mainText", mainTextInput.value);
    colors.mainText.push(mainTextInput.value);
    colors.mainText.splice(0, colors.mainText.length - 1);
  }
  if (mainTextInput.value !== "Main Text") {
    mainTextInput.value = "Main Text";
  }
});

mainSecondaryInput.addEventListener("change", function (event) {
  if (event.target === mainSecondaryInput) {
    root.style.setProperty("--preview-mainSecondary", mainSecondaryInput.value);
    colors.mainSecondary.push(mainSecondaryInput.value);
    colors.mainSecondary.splice(0, colors.mainSecondary.length - 1);
  }
  if (mainSecondaryInput.value !== "Main Secondary") {
    mainSecondaryInput.value = "Main Secondary";
  }
});

mainIncorrectInput.addEventListener("change", function (event) {
  if (event.target === mainIncorrectInput) {
    root.style.setProperty("--preview-mainIncorrect", mainIncorrectInput.value);
    colors.mainIncorrect.push(mainIncorrectInput.value);
    colors.mainIncorrect.splice(0, colors.mainIncorrect.length - 1);
  }
  if (mainIncorrectInput.value !== "Incorrect") {
    mainIncorrectInput.value = "Incorrect";
  }
});

mainIncorrectInput.addEventListener("click", function () {
  mainIncorrectInput.value = colors.mainIncorrect;
});

primaryInput.addEventListener("change", function (event) {
  if (event.target === primaryInput) {
    root.style.setProperty("--preview-primaryColor", primaryInput.value);
    colors.primaryColor.push(primaryInput.value);
    colors.primaryColor.splice(0, colors.primaryColor.length - 1);
  }
  if (primaryInput.value !== "Primary") {
    primaryInput.value = "Primary";
  }
});

textPrimaryInput.addEventListener("change", function (event) {
  if (event.target === textPrimaryInput) {
    root.style.setProperty("--preview-textPrimary", textPrimaryInput.value);
    colors.textPrimary.push(textPrimaryInput.value);
    colors.textPrimary.splice(0, colors.textPrimary.length - 1);
  }
  if (textPrimaryInput.value !== "Text Primary") {
    textPrimaryInput.value = "Text Primary";
  }
});

textSecondaryInput.addEventListener("change", function (event) {
  if (event.target === textSecondaryInput) {
    root.style.setProperty("--preview-textSecondary", textSecondaryInput.value);
    colors.textSecondary.push(textSecondaryInput.value);
    colors.textSecondary.splice(0, colors.textSecondary.length - 1);
  }
  if (textSecondaryInput.value !== "Text Secondary") {
    textSecondaryInput.value = "Text Secondary";
  }
});

hoverInput.addEventListener("change", function (event) {
  if (event.target === hoverInput) {
    root.style.setProperty("--preview-hover", hoverInput.value);
    colors.hover.push(hoverInput.value);
    colors.hover.splice(0, colors.hover.length - 1);
  }
  if (hoverInput.value !== "Hover") {
    hoverInput.value = "Hover";
  }
});

menuBackgroundInput.addEventListener("change", function (event) {
  if (event.target === menuBackgroundInput) {
    root.style.setProperty(
      "--preview-menuBackground",
      menuBackgroundInput.value
    );
    colors.menuBackground.push(menuBackgroundInput.value);
    colors.menuBackground.splice(0, colors.menuBackground.length - 1);
  }
  if (menuBackgroundInput.value !== "Menu Background") {
    menuBackgroundInput.value = "Menu Background";
  }
});

menuButtonsInput.addEventListener("change", function (event) {
  if (event.target === menuButtonsInput) {
    root.style.setProperty("--preview-menuBtns", menuButtonsInput.value);
    colors.menuBtns.push(menuButtonsInput.value);
    colors.menuBtns.splice(0, colors.menuBtns.length - 1);
  }
  if (menuButtonsInput.value !== "Menu Buttons") {
    menuButtonsInput.value = "Menu Buttons";
  }
});

resetThemeInput.addEventListener("click", function () {
  document.body.classList.toggle("main-theme");
  resetThemeInput.value = "Back to custom";
  if ((resetThemeInput.value = "Back to custom")) {
    console.log("change back to default value");
  }
});

const useTheme = document.querySelector(".use-theme-btn");

useTheme.addEventListener("click", function () {
  console.log("Background Color:", colors.bgcolor);
  console.log("Main Text Color:", colors.mainText);
  console.log("Main Secondary Color:", colors.mainSecondary);
  console.log("Main Incorrect Color:", colors.mainIncorrect);
  console.log("Primary Color:", colors.primaryColor);
  console.log("Text Primary Color:", colors.textPrimary);
  console.log("Text Secondary Color:", colors.textSecondary);
  console.log("Hover Color:", colors.hover);
  console.log("Menu Background Color:", colors.menuBackground);
  console.log("Menu Buttons Color:", colors.menuBtns);

  const bgcolor = colors.bgcolor;
  localStorage.setItem("bgcolor", bgcolor);
  root.style.setProperty("--bgcolor", colors.bgcolor);

  const mainText = colors.mainText;
  localStorage.setItem("mainText", mainText);
  root.style.setProperty("--mainText", colors.mainText);

  const mainSecondary = colors.mainSecondary;
  localStorage.setItem("mainSecondary", mainSecondary);
  root.style.setProperty("--mainSecondary", colors.mainSecondary);

  const mainIncorrect = colors.mainIncorrect;
  localStorage.setItem("mainIncorrect", mainIncorrect);
  root.style.setProperty("--mainIncorrect", colors.mainIncorrect);

  const primaryColor = colors.primaryColor;
  localStorage.setItem("primaryColor", primaryColor);
  root.style.setProperty("--primaryColor", colors.primaryColor);

  const textPrimary = colors.textPrimary;
  localStorage.setItem("textPrimary", textPrimary);
  root.style.setProperty("--textPrimary", colors.textPrimary);

  const textSecondary = colors.textSecondary;
  localStorage.setItem("textSecondary", textSecondary);
  root.style.setProperty("--textSecondary", colors.textSecondary);

  const hover = colors.hover;
  localStorage.setItem("hover", hover);
  root.style.setProperty("--hover", colors.hover);

  const menuBackground = colors.menuBackground;
  localStorage.setItem("menuBackground", menuBackground);
  root.style.setProperty("--menuBackground", colors.menuBackground);

  const menuBtns = colors.menuBtns;
  localStorage.setItem("menuBtns", menuBtns);
  root.style.setProperty("--menuBtns", colors.menuBtns);
});

///////

const usedTheme = document.querySelector(".used-theme");
const themeName = document.querySelector(".theme-name");
usedTheme.addEventListener("mouseover", function () {
  themeName.classList.remove("hidden");
});

usedTheme.addEventListener("mouseout", function () {
  themeName.classList.add("hidden");
});

//////
function loadColorsFromLocalStorage() {
  const bgcolor = localStorage.getItem("bgcolor");

  const mainText = localStorage.getItem("mainText");

  const mainSecondary = localStorage.getItem("mainSecondary");

  const mainIncorrect = localStorage.getItem("mainIncorrect");

  const primaryColor = localStorage.getItem("primaryColor");

  const textPrimary = localStorage.getItem("textPrimary");

  const textSecondary = localStorage.getItem("textSecondary");

  const hover = localStorage.getItem("hover");

  const menuBackground = localStorage.getItem("menuBackground");

  const menuBtns = localStorage.getItem("menuBtns");

  root.style.setProperty("--bgcolor", bgcolor);
  root.style.setProperty("--mainText", mainText);
  root.style.setProperty("--mainSecondary", mainSecondary);
  root.style.setProperty("--mainIncorrect", mainIncorrect);
  root.style.setProperty("--primaryColor", primaryColor);
  root.style.setProperty("--textPrimary", textPrimary);
  root.style.setProperty("--textSecondary", textSecondary);
  root.style.setProperty("--hover", hover);
  root.style.setProperty("--menuBackground", menuBackground);
  root.style.setProperty("--menuBtns", menuBtns);
}

window.addEventListener("DOMContentLoaded", loadColorsFromLocalStorage);
