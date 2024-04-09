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

bgColorInput.addEventListener("change", function (event) {
  if (event.target === bgColorInput) {
    root.style.setProperty("--bgcolor", bgColorInput.value);
  }
});

mainTextInput.addEventListener("change", function (event) {
  if (event.target === mainTextInput) {
    root.style.setProperty("--mainText", mainTextInput.value);
  }
});

mainSecondaryInput.addEventListener("change", function (event) {
  if (event.target === mainSecondaryInput) {
    root.style.setProperty("--mainSecondary", mainSecondaryInput.value);
  }
});

primaryInput.addEventListener("change", function (event) {
  if (event.target === primaryInput) {
    root.style.setProperty("--primaryColor", primaryInput.value);
  }
});

textPrimaryInput.addEventListener("change", function (event) {
  if (event.target === textPrimaryInput) {
    root.style.setProperty("--textPrimary", textPrimaryInput.value);
  }
});

textSecondaryInput.addEventListener("change", function (event) {
  if (event.target === textSecondaryInput) {
    root.style.setProperty("--textSecondary", textSecondaryInput.value);
  }
});

hoverInput.addEventListener("change", function (event) {
  if (event.target === hoverInput) {
    root.style.setProperty("--hover", hoverInput.value);
  }
});

menuBackgroundInput.addEventListener("change", function (event) {
  if (event.target === menuBackgroundInput) {
    root.style.setProperty("--menuBackground", menuBackgroundInput.value);
  }
});

menuButtonsInput.addEventListener("change", function (event) {
  if (event.target === menuButtonsInput) {
    root.style.setProperty("--menuBtns", menuButtonsInput.value);
  }
});
