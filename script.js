// Blob motion
// const tween = KUTE.fromTo(
//   "#blob1",
//   { path: "#blob1" },
//   { path: "#blob2" },
//   { repeat: 999, duration: 8000, yoyo: true }
// ).start();

const words =
  "cebola trem estrela vaso plantas de ursinho de pelúcia biscoito perna quando pode ser maior até hoje filme perder estar nem haver o nada usar possível isto sobre sem haver pequeno qualquer dever ajudar problema mulher agora tal eu jogo tipo nome elas fazer social de conseguir vez para trabalhar tão também qual então aquele mulher coisa contra tanto questão para novo palavra serviço esse cidade sem tentar como hora criar dia aquele".split(
    " "
  );

const wordsCount = words.length;

const gameTimeSelector = (tempo) => tempo * 1000;
var gameTime = gameTimeSelector(30);

window.gameStart = null;

function moveCursor() {
  const nextLetter = document.querySelector(".letter.current");
  const nextWord = document.querySelector(".word.current");
  const cursor = document.getElementById("cursor");
  cursor.style.transition = "left .1s ease";
  cursor.style.top =
    (nextLetter || nextWord).getBoundingClientRect().top + 2 + "px";
  cursor.style.left =
    (nextLetter || nextWord).getBoundingClientRect()[
      nextLetter ? "left" : "right"
    ] + "px";
}

function restartTimer() {
  clearTimeout();
}

function addClass(el, name) {
  el.className += " " + name;
}
function removeClass(el, name) {
  el.className = el.className.replace(name, "");
}

function randomWords() {
  const randomIndex = Math.ceil(Math.random() * wordsCount);
  return words[randomIndex - 1];
}

function formatWord(word) {
  return `<div class="word"><span class="letter">${word
    .split("")
    .join('</span><span class="letter">')}</span></div>`;
}
function newGame() {
  document.getElementById("words").innerHTML = "";
  for (let i = 0; i < 200; i++) {
    document.getElementById("words").innerHTML += formatWord(randomWords());
  }
  addClass(document.querySelector(".word"), "current");
  addClass(document.querySelector(".letter"), "current");
  document.getElementById("info").innerHTML = gameTime / 1000;
  window.timer = null;
}

function getWpm() {
  const words = [...document.querySelectorAll(".word")];
  const lastTypedWord = document.querySelector(".word.current");
  const lastTypedWordIndex = words.indexOf(lastTypedWord);
  const typedWords = words.slice(0, lastTypedWordIndex);
  const correctWords = typedWords.filter((words) => {
    const letters = [...words.children];
    const incorrectLetters = letters.filter((letter) =>
      letter.className.includes("incorrect")
    );
    const correctLetters = letters.filter((letter) =>
      letter.className.includes("correct")
    );
    return (
      incorrectLetters.length === 0 && correctLetters.length === letters.length
    );
  });
  return (correctWords.length / gameTime) * 60000;
}

function gameOver() {
  clearInterval(window.timer);
  addClass(document.getElementById("game"), "over");
  document.getElementById("info").innerHTML = `WPM: ${getWpm()}`;
}

function startGame() {
  document.getElementById("game").addEventListener("keydown", (ev) => {
    const key = ev.key;
    const currentWord = document.querySelector(".word.current");
    const currentLetter = document.querySelector(".letter.current");
    const expected = currentLetter?.innerHTML || " ";
    const isLetter = key.length === 1 && key !== " ";
    const isSpace = key === " ";
    const isBackspace = key === "Backspace";
    const isFirstLetter = currentLetter === currentWord.firstChild;

    if (document.querySelector("#game.over")) {
      return;
    }

    if (!window.timer && isLetter) {
      window.timer = setInterval(() => {
        if (!window.gameStart) {
          window.gameStart = new Date().getTime();
        }
        const currentTime = new Date().getTime();
        const msPassed = currentTime - window.gameStart;
        const sPassed = Math.round(msPassed / 1000);
        const sLeft = gameTime / 1000 - sPassed;
        if (sLeft <= 0) {
          gameOver();
          return;
        }
        document.getElementById("info").innerHTML = sLeft + "";
      }, 1000);
    }

    if (isLetter) {
      if (currentLetter) {
        addClass(currentLetter, key === expected ? "correct" : "incorrect");
        removeClass(currentLetter, "current");
        if (currentLetter.nextSibling) {
          addClass(currentLetter.nextSibling, "current");
        }
      } else {
        if (expected !== " ") {
          if (currentWord.lastChild.className.includes("extra")) {
            currentWord.removeChild(currentWord.lastChild);
          }
          const incorrectLetter = document.createElement("span");
          incorrectLetter.innerHTML = key;
          incorrectLetter.className = "letter incorrect extra";
          currentWord.appendChild(incorrectLetter);
        }
      }
    }

    if (isSpace) {
      if (expected !== "") {
        const lettersToInvalidate = [
          ...document.querySelectorAll(".word.current .letter:not(.correct)"),
        ];
        lettersToInvalidate.forEach((letter) => {
          addClass(letter, "incorrect");
        });
      }
      removeClass(currentWord, "current");
      addClass(currentWord.nextSibling, "current");
      if (currentLetter) {
        removeClass(currentLetter, "current");
      }
      addClass(currentWord.nextSibling.firstChild, "current");
    }

    if (isBackspace) {
      if (currentLetter && isFirstLetter) {
        // fazendo a palavra anterior ser atual, ultima letra atual
        removeClass(currentWord, "current");
        addClass(currentWord.previousSibling, "current");
        removeClass(currentLetter, "current");
        addClass(currentWord.previousSibling.lastChild, "current");
        removeClass(currentWord.previousSibling.lastChild, "incorrect");
        removeClass(currentWord.previousSibling.lastChild, "correct");
      }
      if (currentLetter && !isFirstLetter) {
        // voltando uma letra, invalidando letra
        removeClass(currentLetter, "current");
        addClass(currentLetter.previousSibling, "current");
        removeClass(currentLetter.previousSibling, "incorrect");
        removeClass(currentLetter.previousSibling, "correct");
      }
      if (!currentLetter) {
        addClass(currentWord.lastChild, "current");
        removeClass(currentWord.lastChild, "incorrect");
        removeClass(currentWord.lastChild, "correct");
      }
    }

    // movendo as linhas / palavras
    if (currentWord.getBoundingClientRect().top > 350) {
      const words = document.getElementById("words");
      const margin = parseInt(words.style.marginTop || "0px");
      words.style.marginTop = margin - 37 + "px";
    }

    // movimentando cursor
    moveCursor();
  });
  return;
}
function restartGame() {
  document.getElementById("words").innerHTML = "";
  clearInterval(window.timer);
  window.timer = null;
  removeClass(document.getElementById("game"), "over");
  document.getElementById("info").innerHTML = gameTime / 1000;
  newGame();
  window.gameStart = null;

  document.getElementById("words").style.marginTop = "0";
}

const gameWrapper = document.querySelector("#game-wrapper");
gameWrapper.focus();
const resetFocus = () => {
  document.activeElement.blur();
  document.querySelector("#game").focus();
};
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    resetFocus();
  }
});

document.getElementById("newGameBtn").addEventListener("click", (event) => {
  restartGame();
  resetFocus();
  moveCursor();
});

startGame();
newGame();
resetFocus();

const dot1id = document.getElementById("dot-1");
const dot2id = document.getElementById("dot-2");
const dot3id = document.getElementById("dot-3");
const timesSelector = document.getElementById("dot-4");
const language = document.getElementById("dot-5");
const mode = document.getElementById("dot-6");
const dotsBtn = document.querySelector(".dots-Btn");
const times = document.querySelector(".times");
const dots = document.querySelectorAll(".dot");
const fifteen = document.getElementById("fifteen");
const thirty = document.getElementById("thirty");
const sixty = document.getElementById("sixty");

dots.forEach((dot) => {
  dot.addEventListener("click", function () {
    dot.classList.add("orange");

    setTimeout(function () {
      dot.classList.remove("orange");
    }, 200);
  });
});

if (gameTime == 30 * 1000) {
  thirty.classList.add("orange-fixed");
}

timesAppear = function () {
  dot1id.classList.add("orange");
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

language.addEventListener("click", function () {
  dot2id.classList.add("orange");

  setTimeout(function () {
    dot2id.classList.remove("orange");
  }, 200);
});

mode.addEventListener("click", function () {
  dot3id.classList.add("orange");

  setTimeout(function () {
    dot3id.classList.remove("orange");
  }, 200);
});

dotsBtn.addEventListener("click", function () {
  dotsBtn.classList.add("active");
});

window.onclick = function (event) {
  if (
    event.target !== dotsBtn &&
    event.target !== timesSelector &&
    event.target !== language &&
    event.target !== mode &&
    !event.target.classList.contains("dot")
  ) {
    dotsBtn.classList.remove("active");
    times.classList.add("hidden");
  }
};

///////
// USER CONTAINER

document.addEventListener("DOMContentLoaded", function () {
  const userContainer = document.querySelector(".user-container");
  const dropbtn = document.querySelector(".dropbtn");
  const dropdownContent = document.querySelector(".dropdown-content");
  const action = document.querySelector(".action");
  const username = document.querySelector(".user-name");
  const userProfilePic = document.querySelector(".fa-user-pen");

  dropbtn.addEventListener("click", function () {
    userContainer.classList.toggle("open");
    if (userContainer.classList.contains("open")) {
      dropdownContent.style.width = dropbtn.offsetWidth + "px";
    } else {
      dropdownContent.style.width = dropbtn.offsetWidth + "px";
    }
  });

  username.addEventListener("mouseover", function () {
    action.innerHTML = "View Profile";
  });
  userProfilePic.addEventListener("mouseover", function () {
    action.innerHTML = "Change photo";
  });
  document.addEventListener("mouseover", function (event) {
    if (event.target !== username && event.target !== userProfilePic) {
      action.innerHTML = "...";
    }
  });

  document.addEventListener("click", function (event) {
    if (!userContainer.contains(event.target) && event.target !== dropbtn) {
      userContainer.classList.remove("open");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const stiContainer = document.querySelector(".sti_container");
  const btn = stiContainer.querySelector(".btn");

  stiContainer.addEventListener("mouseenter", function () {
    btn.style.backgroundColor = "#202020";
  });

  stiContainer.addEventListener("mouseleave", function () {
    setTimeout(function () {
      btn.style.backgroundColor = "transparent";
    }, 1500);
  });
});

window.onload = () => {
  const anchors = document.querySelectorAll("a");
  const transition_el = document.querySelector(".transition");

  setTimeout(() => {
    transition_el.classList.remove("is-active");
  }, 500);

  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];

    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      let target = e.target.href;

      console.log(transition_el);

      transition_el.classList.add("is-active");

      console.log(transition_el);

      setInterval(() => {
        window.location.href = target;
      }, 500);
    });
  }
};
