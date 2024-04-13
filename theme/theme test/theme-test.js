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
};

// const teste = document.querySelector(".clr-picker");
// teste.classList.add(".clr-open");
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
  root.style.setProperty("--bgcolor", colors.bgcolor);
  root.style.setProperty("--mainText", colors.mainText);
  root.style.setProperty("--mainSecondary", colors.mainSecondary);
  root.style.setProperty("--primaryColor", colors.primaryColor);
  root.style.setProperty("--textPrimary", colors.textPrimary);
  root.style.setProperty("--textSecondary", colors.textSecondary);
  root.style.setProperty("--hover", colors.hover);
  root.style.setProperty("--menuBackground", colors.menuBackground);
  root.style.setProperty("--menuBtns", colors.menuBtns);
});
