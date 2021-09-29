let footer = document.getElementsByClassName("card-footer")[0];
let shareB = document.getElementsByClassName("share-b")[0];

shareB.addEventListener("click", () => {
  if (footer.classList.contains("show")) {
    footer.classList.remove("show");
  } else {
    footer.classList.add("show");
  }
});
