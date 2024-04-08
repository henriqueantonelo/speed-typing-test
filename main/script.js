// Blob motion
// const tween = KUTE.fromTo(
//   "#blob1",
//   { path: "#blob1" },
//   { path: "#blob2" },
//   { repeat: 999, duration: 8000, yoyo: true }
// ).start();
const portugueseSelector = () =>
  "cebola trem estrela vaso plantas de ursinho de pelúcia biscoito perna quando pode ser maior até hoje filme perder estar nem haver o nada usar possível isto sobre sem haver pequeno qualquer dever ajudar problema mulher agora tal eu jogo tipo nome elas fazer social de conseguir vez para trabalhar tão também qual então aquele mulher coisa contra tanto questão para novo palavra serviço esse cidade sem tentar como hora criar dia aquele".split(
    " "
  );
const englishSelector = () =>
  "onion train star plant teddy bear cookie leg when can be bigger until today movie lose be neither to exist nothing use possible this about without to be small any duty to help problem woman now such I game type name they to do social to get time to work so also which then that woman thing against so much issue to new word service this city without to try how to create day that".split(
    " "
  );
let words = portugueseSelector();

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
  document.getElementById("info").innerHTML = "0";
  document.querySelector(".test-wpm").innerHTML = `${getWpm()}`;
  document.querySelector(".test-time").innerHTML = `${gameTime / 1000}`;
  const results = document.getElementById("results");
  ///// transition
  const transition_el = document.querySelector(".transition");
  transition_el.classList.remove("is-active");
  transition_el.classList.add("end");
  setTimeout(() => {
    transition_el.classList.remove("end");
    results.style.visibility = "visible";
    results.style.zIndex = "999";
  }, 1000);
  //////  share
  const pontos = getWpm();
  const tempo = gameTime / 1000;
  console.log(pontos);
  const msg = encodeURIComponent(
    `Fiz ${pontos} WPM em ${tempo} segundos no eggtype!`
  );

  const twitter = document.querySelector(".twitter");
  twitter.href = `http://twitter.com/share?&url=https://egg-type.vercel.app&text=${msg}&hashtags=speedtypingtest,eggtype`;
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
  const transition_el = document.querySelector(".transition");

  transition_el.classList.remove("is-active");
  transition_el.classList.add("end");
  setTimeout(() => {
    results.style.visibility = "hidden";
  }, 500);
  setTimeout(() => {
    transition_el.classList.remove("end");
  }, 1000);
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
///////
// time
///////

const times = document.querySelector(".times");
const fifteen = document.getElementById("fifteen");
const thirty = document.getElementById("thirty");
const sixty = document.getElementById("sixty");

if (gameTime == 30 * 1000) {
  thirty.classList.add("orange-fixed");
}
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

///////
// USER CONTAINER

document.addEventListener("DOMContentLoaded", function () {
  const userContainer = document.querySelector(".user-container");
  const dropbtn = document.querySelector(".dropbtn");
  const dropdownContent = document.querySelector(".dropdown-content");
  const action = document.querySelector(".action");
  const username = document.querySelector(".user-name");
  const userProfilePic = document.querySelector(".fa-user-pen");
  const leaderboardBtn = document.querySelector(".leaderboard-btn");

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
  document.addEventListener("click", function (event) {
    if (event.target == leaderboardBtn) {
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
  const anchors = document.querySelectorAll(".leaderboard-btn");
  const transition_el = document.querySelector(".transition");

  setTimeout(() => {
    transition_el.classList.remove("is-active");
  }, 500);
  setTimeout(() => {
    transition_el.classList.add("is-mid");
  }, 1000);

  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];

    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      let target = e.target.href;

      transition_el.classList.add("is-active");

      setInterval(() => {
        window.location.href = target;
      }, 500);
    });
  }
};

///////
// separar
//////
const root = document.querySelector(":root");
const backgroundInput = document.querySelector(".background[data-coloris]");
const primaryInput = document.querySelector(".primary[data-coloris]");
const secondaryInput = document.querySelector(".secondary[data-coloris]");
const tertiaryInput = document.querySelector(".tertiary[data-coloris]");
const textPrimaryInput = document.querySelector(".text-primary[data-coloris]");
const textSecondaryInput = document.querySelector(
  ".text-secondary[data-coloris]"
);
const mainTextInput = document.querySelector(".main-text[data-coloris]");

backgroundInput.addEventListener("change", function (event) {
  if (event.target === backgroundInput) {
    root.style.setProperty("--bgcolor", backgroundInput.value);
  }
});

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

mainTextInput.addEventListener("change", function (event) {
  if (event.target === mainTextInput) {
    root.style.setProperty("--mainText", mainTextInput.value);
  }
});
