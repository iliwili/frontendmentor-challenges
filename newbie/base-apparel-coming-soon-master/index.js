let regex = new RegExp("^[\\w\\.]+@([\\w]+\\.)+[\\w]{2,4}$");

let emailInputGroup = document.getElementsByClassName("input-group")[0];
let form = document.getElementById("signUpForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let email = document.getElementById("emailInput");
  console.log(email.value);
  if (regex.test(email.value)) {
    console.log(true);
    if (emailInputGroup.classList.contains("error")) {
      emailInputGroup.classList.remove("error");
    }
  } else {
    console.log(false);
    if (!emailInputGroup.classList.contains("error")) {
      emailInputGroup.classList.add("error");
    }
  }
});
