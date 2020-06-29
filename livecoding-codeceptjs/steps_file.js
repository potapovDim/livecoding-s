const {mainLoginFragment, mainRegisterFragment, tableFragment} = inject();

module.exports = function() {
  return actor({

    login: function(userData) {
      mainLoginFragment.login(userData)
    },

    register: function(registerData) {
      mainRegisterFragment.register(registerData)
    },

    checkLoginErrorMessage() {
      mainLoginFragment.seeAlertMessage()
    },

    checkRegisterErrorMessage() {
      mainRegisterFragment.seeAlertMessage()
    },

    openMachineDetails(manufacturer) {
      tableFragment.openMachineDetails(manufacturer)
    },

    checkModalMachineDetails(manufacturer) {
      tableFragment.checkModalMachineDetails(manufacturer)
    }
  });
}

