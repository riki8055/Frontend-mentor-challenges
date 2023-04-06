const menuOpenBtn = document.getElementById("menuOpen");
menuOpenBtn.addEventListener("click", () => {
  menuOpenBtn.parentElement.classList.add("show");
  document.querySelector(".overlay").style.opacity = 1;
  document.querySelector(".overlay").style.visibility = "visible";
});

const menuCloseBtn = document.getElementById("menuClose");
menuCloseBtn.addEventListener("click", () => {
  menuCloseBtn.parentElement.parentElement.classList.remove("show");
  document.querySelector(".overlay").style.opacity = 0;
  document.querySelector(".overlay").style.visibility = "hidden";
});
