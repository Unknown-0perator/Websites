let textExpender = document.getElementById("textExpender");
textExpender.addEventListener("click", function () {
  let truncated = document.querySelector(".truncated");
  truncated.classList.remove("truncated");
  textExpender.style.display = "none";
});
