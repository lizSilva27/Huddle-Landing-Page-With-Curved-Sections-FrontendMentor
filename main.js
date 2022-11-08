let inputEmail = document.querySelector(".newsletter-subscription__input");
let messageError = document.querySelector(".newsletter-subscription__error");
let buttonSubmit = document.querySelector(".newsletter-subscription__submit");

buttonSubmit.addEventListener("click", (event) => {
  let regExp =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  if (regExp.test(inputEmail.value) == true) {
    inputEmail.style.border = "";
    messageError.innerHTML = "";
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your email has been sent successfully",
      showConfirmButton: true,
      // timer: 1500,
    });
  } else {
    event.preventDefault();
    inputEmail.style.border = "1px solid rgb(255, 82, 191)";
    messageError.innerHTML = "Check your email please";
  }
});
