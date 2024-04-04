const dot1id = document.getElementById("dot-1");
const dot2id = document.getElementById("dot-2");
const dot3id = document.getElementById("dot-3");
const timesSelector = document.getElementById("dot-4");
const language = document.getElementById("dot-5");
const mode = document.getElementById("dot-6");
const dotsBtn = document.querySelector(".dots-Btn");
const dots = document.querySelectorAll(".dot");

dots.forEach((dot) => {
  dot.addEventListener("click", function () {
    dot.classList.add("orange");

    setTimeout(function () {
      dot.classList.remove("orange");
    }, 200);
  });
});

timesSelector.addEventListener("click", function () {
  dot1id.classList.add("orange");

  setTimeout(function () {
    dot1id.classList.remove("orange");
  }, 200);
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
  }
};

window.onload = () => {
  const anchors = document.querySelectorAll("a");
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

      console.log(transition_el);

      transition_el.classList.add("is-active");

      console.log(transition_el);

      setInterval(() => {
        window.location.href = target;
      }, 500);
    });
  }
};
