export class Contact {
  constructor() {
    this.showContacts();
    $("#searchContainer").addClass("d-none")
    this.isValid = [false, false, false, false, false, false];
  }

  showContacts() {
    document.querySelector(
      "#display"
    ).innerHTML = `<div class="contact min-vh-100 d-flex justify-content-center align-items-center">
      <div class="container w-75 text-center">
        <div class="row g-4">
          <div class="col-md-6">
            <input id="nameInput" type="text" class="form-control" placeholder="Enter Your Name">
            <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
              Special characters and numbers not allowed
            </div>
          </div>
          <div class="col-md-6">
            <input id="emailInput" type="email" class="form-control " placeholder="Enter Your Email">
            <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
              Email not valid *example@yyy.zzz
            </div>
          </div>
          <div class="col-md-6">
            <input id="phoneInput" type="text" class="form-control " placeholder="Enter Your Phone">
            <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
              Enter valid Phone Number
            </div>
          </div>
          <div class="col-md-6">
            <input id="ageInput" type="number" class="form-control " placeholder="Enter Your Age">
            <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
              Enter valid age
            </div>
          </div>
          <div class="col-md-6">
            <input id="passwordInput" type="password" class="form-control " placeholder="Enter Your Password">
            <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
              Enter valid password *Minimum eight characters, at least one letter and one number:*
            </div>
          </div>
          <div class="col-md-6">
            <input id="repasswordInput" type="password" class="form-control " placeholder="Repassword">
            <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
              Enter valid repassword
            </div>
          </div>
        </div>
        <button id="submitBtn" disabled class="btn btn-outline-danger px-2 mt-3">Submit</button>
      </div>
    </div>`;

    this.setupEventListeners();
  }

  setupEventListeners() {
    const nameInput = document.querySelector("#nameInput");
    nameInput.addEventListener("input", () => this.validateName(nameInput));
    
    const emailInput = document.querySelector("#emailInput");
    emailInput.addEventListener("input", () => this.validateEmail(emailInput));

    const phoneInput = document.querySelector("#phoneInput");
    phoneInput.addEventListener("input", () => this.validatePhone(phoneInput));

    const ageInput = document.querySelector("#ageInput");
    ageInput.addEventListener("input", () => this.validateAge(ageInput));

    const passwordInput = document.querySelector("#passwordInput");
    passwordInput.addEventListener("input", () => this.validatePassword(passwordInput));

    const repasswordInput = document.querySelector("#repasswordInput");
    repasswordInput.addEventListener("input", () => this.validateRepassword(repasswordInput));
  }

  validateName(nameInput) {
    let regex = /^[a-zA-Z ]+$/;
    if (regex.test(nameInput.value)) {
      document.getElementById("nameAlert").classList.replace("d-block", "d-none");
      this.isValid[0] = true;
    } else {
      document.getElementById("nameAlert").classList.replace("d-none", "d-block");
      this.isValid[0] = false;
    }
    this.updateSubmitButtonState();
  }

  validateEmail(emailInput) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(emailInput.value)) {
      document.getElementById("emailAlert").classList.replace("d-block", "d-none");
      this.isValid[1] = true;
    } else {
      document.getElementById("emailAlert").classList.replace("d-none", "d-block");
      this.isValid[1] = false;
    }
    this.updateSubmitButtonState();
  }

  validatePhone(phoneInput) {
    let regex = /^\d{11}$/;
    if (regex.test(phoneInput.value)) {
      document.getElementById("phoneAlert").classList.replace("d-block", "d-none");
      this.isValid[2] = true;
    } else {
      document.getElementById("phoneAlert").classList.replace("d-none", "d-block");
      this.isValid[2] = false;
    }
    this.updateSubmitButtonState();
  }

  validateAge(ageInput) {
    let regex = /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/;
    if (regex.test(ageInput.value)) {
      document.getElementById("ageAlert").classList.replace("d-block", "d-none");
      this.isValid[3] = true;
    } else {
      document.getElementById("ageAlert").classList.replace("d-none", "d-block");
      this.isValid[3] = false;
    }
    this.updateSubmitButtonState();
  }

  validatePassword(passwordInput) {
    let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (regex.test(passwordInput.value)) {
      document.getElementById("passwordAlert").classList.replace("d-block", "d-none");
      this.isValid[4] = true;
    } else {
      document.getElementById("passwordAlert").classList.replace("d-none", "d-block");
      this.isValid[4] = false;
    }
    this.updateSubmitButtonState();
  }

  validateRepassword(repasswordInput) {
    let passwordInput = document.querySelector("#passwordInput");
    if (repasswordInput.value === passwordInput.value) {
      document.getElementById("repasswordAlert").classList.replace("d-block", "d-none");
      this.isValid[5] = true;
    } else {
      document.getElementById("repasswordAlert").classList.replace("d-none", "d-block");
      this.isValid[5] = false;
    }
    this.updateSubmitButtonState();
  }

  updateSubmitButtonState() {
    const submitBtn = document.getElementById("submitBtn");
    if (this.isValid.every((value) => value)) {
      submitBtn.removeAttribute("disabled");
    } else {
      submitBtn.setAttribute("disabled", "disabled");
    }
  }
}
