// const gameTimeSelector = (tempo) => tempo * 1000;

// var gameTime = gameTimeSelector(30);
// console.log(gameTime);

// fiften.addEventListener("click", function () {
//   gameTime = gameTimeSelector(15);
//   console.log(gameTime);
// });

// thirty.addEventListener("click", function () {
//   gameTime = gameTimeSelector(30);
//   console.log(gameTime);
// });

/// animation test

// const dotsBtn = document.querySelector(".dots-Btn");

// dotsBtn.addEventListener("click", function () {
//   dotsBtn.classList.add("active");
// });

// window.onclick = function (event) {
//   if (event.target !== dotsBtn && !event.target.classList.contains("dot")) {
//     dotsBtn.classList.remove("active");
//   }
// };

////////////////////
// document.addEventListener("DOMContentLoaded", function () {
//   const userContainer = document.querySelector(".user-container");
//   const dropbtn = document.querySelector(".dropbtn");
//   const dropdownContent = document.querySelector(".dropdown-content");
//   const action = document.querySelector(".action");
//   const username = document.querySelector(".user-name");
//   const userProfilePic = document.querySelector(".fa-user-pen");

//   dropbtn.addEventListener("click", function () {
//     userContainer.classList.toggle("open");
//     if (userContainer.classList.contains("open")) {
//       dropdownContent.style.width = dropbtn.offsetWidth + "px";
//     } else {
//       dropdownContent.style.width = dropbtn.offsetWidth + "px";
//     }
//   });

//   username.addEventListener("mouseover", function () {
//     action.innerHTML = "View Profile";
//   });
//   userProfilePic.addEventListener("mouseover", function () {
//     action.innerHTML = "Change photo";
//   });
//   document.addEventListener("mouseover", function (event) {
//     if (event.target !== username && event.target !== userProfilePic) {
//       action.innerHTML = "...";
//     }
//   });

//   document.addEventListener("click", function (event) {
//     if (!userContainer.contains(event.target) && event.target !== dropbtn) {
//       userContainer.classList.remove("open");
//     }
//   });
// });
////////////////
// document.addEventListener("DOMContentLoaded", function () {
//   const userContainer = document.querySelector(".user-container");
//   const dropbtn = document.querySelector(".dropbtn");
//   const dropdownContent = document.querySelector(".dropdown-content");

//   dropbtn.addEventListener("click", function () {
//     userContainer.classList.toggle("open");
//     if (userContainer.classList.contains("open")) {
//       dropdownContent.style.height = dropbtn.offsetheight + "px";
//     } else {
//       dropdownContent.style.height = dropbtn.offsetheight + "px";
//     }
//   });
// });

////////////////////////
// window.onload = () => {
//   const anchors = document.querySelectorAll("a");
//   const transition_el = document.querySelector(".transition");

//   setTimeout(() => {
//     transition_el.classList.remove("is-active");
//   }, 500);

//   for (let i = 0; i < anchors.length; i++) {
//     const anchor = anchors[i];

//     anchor.addEventListener("click", (e) => {
//       e.preventDefault();
//       let target = e.target.href;

//       console.log(transition_el);

//       transition_el.classList.add("is-active");

//       console.log(transition_el);

//       setInterval(() => {
//         window.location.href = target;
//       }, 500);
//     });
//   }
// };
////////////////////////////
// const portugueseSelector = () =>
//   "cebola trem estrela vaso plantas de ursinho de pelúcia biscoito perna quando pode ser maior até hoje filme perder estar nem haver o nada usar possível isto sobre sem haver pequeno qualquer dever ajudar problema mulher agora tal eu jogo tipo nome elas fazer social de conseguir vez para trabalhar tão também qual então aquele mulher coisa contra tanto questão para novo palavra serviço esse cidade sem tentar como hora criar dia aquele".split(
//     " "
//   );
// const englishSelector = () =>
//   "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has".split(
//     " "
//   );
// let words = portugueseSelector();

// const button = document
//   .getElementById("button")
//   .addEventListener("click", function () {
//     words = englishSelector();
//     console.log(words);
//   });
///////////////////
// const teste = function () {
//   let numeroteste = 5 * 5;
//   console.log(numeroteste);
//   return numeroteste;
// };
// const pontos = teste();
// const link = encodeURI(window.location.href);
// const msg = encodeURIComponent(`Hey i made ${pontos} points on eggtype`);
// const title = encodeURIComponent("jaja");

// const twitter = document.querySelector(".twitter");
// twitter.href = `http://twitter.com/share?&url=${link}&text=${msg}&hashtags=javascript,programming`;
/////////////////

Coloris({
  swatches: [
    "#444",
    "#444",
    "#444",
    "#444",
    "#444",
    "#444",
    "#444",
    "#444",
    "#444",
    "#444",
    "#444",
    "#444",
  ],
});

Coloris({
  onChange: (color) => undefined,
});

Coloris({
  // parent container
  parent: null,
  // The bound input fields are wrapped in a div that adds a thumbnail showing the current color
  // and a button to open the color picker (for accessibility only).
  wrap: true,
  // enable format toggle button
  formatToggle: true,
  // Margin in px
  margin: 2,
  // Show only the color swatches in the picker dialog
  swatchesOnly: false,
  // disable alpha
  alpha: true,
  // not focus the color value input
  focusInput: true,
  // select the color value input when the picker opens
  selectInput: false,
  // auto close
  autoClose: false,
  // set to true to use the color picker as an inline widget
  inline: false,
  // default colorin inline mode
  defaultColor: "#000000",
  // config the clear button
  clearButton: {
    show: false,
    label: "Clear",
  },
  // close button
  closeButton: false,
  closeLabel: "Close",
  // a11y
  a11y: {
    open: "Open color picker",
    close: "Close color picker",
    clear: "Clear the selected color",
    marker: "Saturation: {s}. Brightness: {v}.",
    hueSlider: "Hue slider",
    alphaSlider: "Opacity slider",
    input: "Color value field",
    format: "Color format",
    swatch: "Color swatch",
    instruction:
      "Saturation and brightness selector. Use up, down, left and right arrow keys to select.",
  },
});

// document.addEventListener("coloris:pick", (event) => {
//   console.log("New color", event.detail.color);
//   document.body.style.backgroundColor = event.detail.color;
// });

const root = document.querySelector(":root");
const primaryInput = document.querySelector(".primary[data-coloris]");
const secondaryInput = document.querySelector(".secondary[data-coloris]");
const tertiaryInput = document.querySelector(".tertiary[data-coloris]");
const backgroundInput = document.querySelector(".background[data-coloris]");

// Adiciona um ouvinte de eventos para mudança em cada input de cor
primaryInput.addEventListener("change", function (event) {
  if (event.target === primaryInput) {
    root.style.setProperty("--primaryColor", primaryInput.value);
  }
});

secondaryInput.addEventListener("change", function (event) {
  if (event.target === secondaryInput) {
    root.style.setProperty("--secondaryColor", secondaryInput.value);
  }
});

tertiaryInput.addEventListener("change", function (event) {
  if (event.target === tertiaryInput) {
    root.style.setProperty("--tertiaryColor", tertiaryInput.value);
  }
});

backgroundInput.addEventListener("change", function (event) {
  if (event.target === backgroundInput) {
    root.style.setProperty("--bgcolor", backgroundInput.value);
  }
});
