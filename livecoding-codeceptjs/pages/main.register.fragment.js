const {I} = inject();

module.exports = {

  // setting locators
  fields: {
    username: '.registration_form .modal .form-group:nth-child(1) input',
    name: '.registration_form .modal .form-group:nth-child(2) input',
    email: '.registration_form .modal .form-group:nth-child(3) input',
    password: '.registration_form .modal .form-group:nth-child(4) input',
  },
  // Користувач не може бути зареєстрований
  alert: '.alert.alert-danger',
  toRegister: '.user_buttons button:nth-child(2)',
  submitButton: '.registration_form .modal button',

  // introducing methods
  register(userData) {
    I.click(this.toRegister);
    for(const fieldName of Object.keys(userData)) {
      I.fillField(this.fields[fieldName], userData[fieldName]);
    }
    I.click(this.submitButton);
  },
  seeAlertMessage() {
    I.see('Користувач не може бути зареєстрований', this.alert)
  }
}
