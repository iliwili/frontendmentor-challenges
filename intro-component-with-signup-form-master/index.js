let regex = new RegExp("^[\\w\\.]+@([\\w]+\\.)+[\\w]{2,4}$");

let form = document.getElementById("signUpForm");
let validateFields = [
  {
    id: "sgn_fst_name",
    rules: [
      {
        validation: isEmpty,
        errMessage: "First name cannot be empty",
      },
    ],
  },
  {
    id: "sgn_lst_name",
    rules: [
      {
        validation: isEmpty,
        errMessage: "Last Name name cannot be empty",
      },
    ],
  },
  {
    id: "sgn_email",
    rules: [
      {
        validation: isEmpty,
        errMessage: "Email cannot be empty",
      },
      {
        validation: isEmail,
        errMessage: "Looks like this is not an email",
      },
    ],
  },
  {
    id: "sgn_pass",
    rules: [
      {
        validation: isEmpty,
        errMessage: "Password name cannot be empty",
      },
    ],
  },
];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  validateFields.forEach((field) => {
    let el = document.getElementById(field.id);

    for (let i = 0; i < field.rules.length; i++) {
      const rule = field.rules[i];

      if (rule.validation(el.value)) {
        el.parentElement.classList.add("error");
        el.parentElement.children[1].innerHTML = rule.errMessage;
        break;
      } else {
        if (el.parentElement.classList.contains("error")) {
          el.parentElement.classList.remove("error");
          el.parentElement.children[1].innerHTML = "";
        }
      }
    }
  });
});

function isEmpty(str) {
  return str == "";
}

function isEmail(email) {
  return !regex.test(email);
}
