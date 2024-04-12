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

const colors = {
  bgcolor: ["Background"],
  textcolor: [],
};

// const teste = document.querySelector(".clr-picker");
// teste.classList.add(".clr-open");
bgColorInput.addEventListener("change", function (event) {
  if (event.target === bgColorInput) {
    root.style.setProperty("--preview-bgcolor", bgColorInput.value);
    colors.bgcolor.push(bgColorInput.value);

    colors.bgcolor.splice(0, colors.bgcolor.length - 1);
    console.log(colors.bgcolor);
    // console.log(ultimonumero);
  }
  if (bgColorInput.value !== "Background") {
    bgColorInput.value = "Background";
  }
  // if (clrPicker.classList.contains(".clr-open")) {
  //   console.log("hahaha");
  // } else {
  //   console.log("nnnnnnaooooo");
  // }
});

bgColorInput.addEventListener("click", function () {
  bgColorInput.value = colors.bgcolor;
});

mainTextInput.addEventListener("change", function (event) {
  if (event.target === mainTextInput) {
    root.style.setProperty("--preview-mainText", mainTextInput.value);
  }
  if (mainTextInput.value !== "Main Text") {
    mainTextInput.value = "Main Text";
  }
});

mainSecondaryInput.addEventListener("change", function (event) {
  if (event.target === mainSecondaryInput) {
    root.style.setProperty("--preview-mainSecondary", mainSecondaryInput.value);
  }
  if (mainSecondaryInput.value !== "Main Secondary") {
    mainSecondaryInput.value = "Main Secondary";
  }
});

primaryInput.addEventListener("change", function (event) {
  if (event.target === primaryInput) {
    root.style.setProperty("--preview-primaryColor", primaryInput.value);
  }
  if (primaryInput.value !== "Primary") {
    primaryInput.value = "Primary";
  }
});

textPrimaryInput.addEventListener("change", function (event) {
  if (event.target === textPrimaryInput) {
    root.style.setProperty("--preview-textPrimary", textPrimaryInput.value);
  }
  if (textPrimaryInput.value !== "Text Primary") {
    textPrimaryInput.value = "Text Primary";
  }
});

textSecondaryInput.addEventListener("change", function (event) {
  if (event.target === textSecondaryInput) {
    root.style.setProperty("--preview-textSecondary", textSecondaryInput.value);
  }
  if (textSecondaryInput.value !== "Text Secondary") {
    textSecondaryInput.value = "Text Secondary";
  }
});

hoverInput.addEventListener("change", function (event) {
  if (event.target === hoverInput) {
    root.style.setProperty("--preview-hover", hoverInput.value);
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
  }
  if (menuBackgroundInput.value !== "Menu Background") {
    menuBackgroundInput.value = "Menu Background";
  }
});

menuButtonsInput.addEventListener("change", function (event) {
  if (event.target === menuButtonsInput) {
    root.style.setProperty("--preview-menuBtns", menuButtonsInput.value);
  }
  if (menuButtonsInput.value !== "Menu Buttons") {
    menuButtonsInput.value = "Menu Buttons";
  }
});

const useTheme = document.querySelector(".use-theme-btn");
useTheme.addEventListener("click", function () {
  root.style.setProperty("--bgcolor", bgColorInput.value);
  root.style.setProperty("--mainText", mainTextInput.value);
  root.style.setProperty("--mainSecondary", mainSecondaryInput.value);
  root.style.setProperty("--primaryColor", primaryInput.value);
  root.style.setProperty("--textPrimary", textPrimaryInput.value);
  root.style.setProperty("--textSecondary", textSecondaryInput.value);
  root.style.setProperty("--hover", hoverInput.value);
  root.style.setProperty("--menuBackground", menuBackgroundInput.value);
  root.style.setProperty("--menuBtns", menuButtonsInput.value);
});

const inputMap = {
  bgColorInput: { name: "Background", property: "--preview-bgcolor" },
  mainTextInput: { name: "Main Text", property: "--preview-mainText" },
  mainSecondaryInput: {
    name: "Main Secondary",
    property: "--preview-mainSecondary",
  },
  primaryInput: { name: "Primary", property: "--preview-primaryColor" },
  textPrimaryInput: { name: "Text Primary", property: "--preview-textPrimary" },
  textSecondaryInput: {
    name: "Text Secondary",
    property: "--preview-textSecondary",
  },
  hoverInput: { name: "Hover", property: "--preview-hover" },
  menuBackgroundInput: {
    name: "Menu Background",
    property: "--preview-menuBackground",
  },
  menuButtonsInput: { name: "Menu Buttons", property: "--preview-menuBtns" },
};
