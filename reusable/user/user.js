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

function loadColorsFromLocalStorage() {
  const textSecondary = localStorage.getItem("textSecondary");
  const hover = localStorage.getItem("hover");
  const menuBackground = localStorage.getItem("menuBackground");
  const menuBtns = localStorage.getItem("menuBtns");

  root.style.setProperty("--textSecondary", textSecondary);
  root.style.setProperty("--hover", hover);
  root.style.setProperty("--menuBackground", menuBackground);
  root.style.setProperty("--menuBtns", menuBtns);
}

window.addEventListener("DOMContentLoaded", loadColorsFromLocalStorage);
