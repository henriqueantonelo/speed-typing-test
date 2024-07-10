////////////////

const dot1id = document.getElementById("dot-1");
const dot2id = document.getElementById("dot-2");
const dot3id = document.getElementById("dot-3");
////
const timesSelector = document.getElementById("dot-4");
const langSelector = document.getElementById("dot-5");
const modeSelector = document.getElementById("dot-6");
////
const dotsBtn = document.querySelector(".dots-Btn");
const dots = document.querySelectorAll(".dot");
////
dots.forEach((dot) => {
  dot.addEventListener("click", function () {
    dot.classList.add("orange");

    setTimeout(function () {
      dot.classList.remove("orange");
    }, 200);
  });
});

///////
// language
///////
const languages = document.querySelector(".language");
const ptbr = document.getElementById("ptbr");
const eng = document.getElementById("eng");
const soon = document.getElementById("soon");

langAppear = function () {
  languages.style.zIndex = 10;
  languages.classList.remove("hidden");

  setTimeout(function () {
    dot2id.classList.remove("orange");
  }, 200);
};
langSelector.addEventListener("click", function () {
  dot2id.classList.add("orange");

  setTimeout(function () {
    dot2id.classList.remove("orange");
  }, 200);
});

langSelector.addEventListener("click", function () {
  langAppear();
});

dot2id.addEventListener("click", function () {
  langAppear();
});

ptbr.addEventListener("click", function () {
  words = portugueseSelector();
  restartGame();
  resetFocus();
  moveCursor();
});

eng.addEventListener("click", function () {
  words = englishSelector();
  restartGame();
  resetFocus();
  moveCursor();
});
/////
// time
/////

const times = document.querySelector(".times");
const fifteen = document.getElementById("fifteen");
const thirty = document.getElementById("thirty");
const sixty = document.getElementById("sixty");

timesAppear = function () {
  times.style.zIndex = 10;
  times.classList.remove("hidden");

  setTimeout(function () {
    dot1id.classList.remove("orange");
  }, 200);
};

timesSelector.addEventListener("click", function () {
  timesAppear();
});

dot1id.addEventListener("click", function () {
  timesAppear();
});

fifteen.addEventListener("click", function () {
  times.classList.add("hidden");
  fifteen.classList.add("orange-fixed");
  thirty.classList.remove("orange-fixed");
  sixty.classList.remove("orange-fixed");
  restartGame();
  resetFocus();
  moveCursor();

  gameTime = gameTimeSelector(15);
  document.getElementById("info").innerHTML = gameTime / 1000;
});

thirty.addEventListener("click", function () {
  times.classList.add("hidden");
  thirty.classList.add("orange-fixed");
  fifteen.classList.remove("orange-fixed");
  sixty.classList.remove("orange-fixed");
  restartGame();
  resetFocus();
  moveCursor();

  gameTime = gameTimeSelector(30);
  document.getElementById("info").innerHTML = gameTime / 1000;
});

sixty.addEventListener("click", function () {
  times.classList.add("hidden");
  sixty.classList.add("orange-fixed");
  fifteen.classList.remove("orange-fixed");
  thirty.classList.remove("orange-fixed");
  restartGame();
  resetFocus();
  moveCursor();

  gameTime = gameTimeSelector(60);
  document.getElementById("info").innerHTML = gameTime / 1000;
});

///////
// mode
///////
const gamemode = document.querySelector(".gamemode");
const normal = document.getElementById("normal");
const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");

modeAppear = function () {
  gamemode.style.zIndex = 10;
  gamemode.classList.remove("hidden");

  setTimeout(function () {
    dot3id.classList.remove("orange");
  }, 200);
};

modeSelector.addEventListener("click", function () {
  dot3id.classList.add("orange");

  setTimeout(function () {
    dot3id.classList.remove("orange");
  }, 200);
});

modeSelector.addEventListener("click", function () {
  modeAppear();
});

dot3id.addEventListener("click", function () {
  modeAppear();
});

////////
dotsBtn.addEventListener("click", function () {
  dotsBtn.classList.add("active");
});

window.onclick = function (event) {
  if (
    event.target !== dotsBtn &&
    event.target !== timesSelector &&
    event.target !== langSelector &&
    event.target !== modeSelector &&
    !event.target.classList.contains("dot")
  ) {
    dotsBtn.classList.remove("active");
    times.classList.add("hidden");
    languages.classList.add("hidden");
    gamemode.classList.add("hidden");
  }
};
