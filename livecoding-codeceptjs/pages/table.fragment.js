const {expect} = require('chai')

const {I} = inject();

module.exports = {
  // setting locators
  header: '.machies_list_section thead',
  tbody: '.machies_list_section tbody',
  machineModal: '.modal',

  checkModalMachineDetails(manufactorer) {
    within(this.machineModal, async () => {
      const modalTitle = await I.grabTextFrom('h1');
      expect(modalTitle).to.includes(manufactorer)
    })
  },
  openMachineDetails(manufactorer) {
    const headerMap = {};

    //  TODO this is for future
    within(this.header, async () => {
      const rowsCount = await I.grabNumberOfVisibleElements('td')
      for(let i = 0; i < rowsCount; i++) {
        headerMap[await I.grabTextFrom(`//td[${i + 1}]`)] = i;
      }
    });

    within(this.tbody, async () => {
      const rowsCount = await I.grabNumberOfVisibleElements('tr');
      for(let i = 0; i < rowsCount; i++) {
        const currentRowText = await I.grabTextFrom(`//tr[${i + 1}]/td[1]`)
        if(currentRowText.includes(manufactorer)) {
          I.click(`//tr[${i + 1}]/td[1]`)
          return;
        }
      }
    });
  }
}
