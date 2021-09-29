let regex = new RegExp("^[\\w\\.]+@([\\w]+\\.)+[\\w]{2,4}$");
let form = document.getElementById("notifyForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let el = document.getElementById("nt_email");

  if (!regex.test(el.value)) {
    el.parentElement.classList.add("error");
  } else {
    if (el.parentElement.classList.contains("error")) {
      el.parentElement.classList.remove("error");
    }
  }
});
