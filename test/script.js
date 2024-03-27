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

const dotsBtn = document.querySelector(".dots-Btn");

dotsBtn.addEventListener("click", function () {
  dotsBtn.classList.add("active");
});

window.onclick = function (event) {
  if (event.target !== dotsBtn && !event.target.classList.contains("dot")) {
    dotsBtn.classList.remove("active");
  }
};
