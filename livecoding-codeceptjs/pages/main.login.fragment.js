const {I} = inject();

module.exports = {

  // setting locators
  fields: {
    username: '.login_form .modal .form-group:nth-child(1) input',
    password: '.login_form .modal .form-group:nth-child(2) input',
  },
  alert: '.alert.alert-danger',
  toLogin: '.user_buttons button:nth-child(1)',
  submitButton: '.login_form .modal button',

  seeAlertMessage() {
    I.see('Неможливо авторизуватися, перевірте ваші данні', this.alert);
  },

  // introducing methods
  login(userData) {
    I.click(this.toLogin);
    for(const fieldName of Object.keys(userData)) {
      I.fillField(this.fields[fieldName], userData[fieldName]);
    }
    I.click(this.submitButton);
  }
}
