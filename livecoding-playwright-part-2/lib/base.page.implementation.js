class BasePage {
  constructor(page, pageRootSelector) {
    this.page = page
    this.rootSelector = pageRootSelector;
  }

  _replacePage(page) {
    const excludeProps = ['page', 'rootSelector']

    this.page = page

    const exptectedProps = Object
      .getOwnPropertyNames(this)
      .filter((p) => !excludeProps.includes(p))

    exptectedProps.forEach((p) => {
      this[p]._replacePage.call(this[p], page)
    })
  }
}

module.exports = {
  BasePage
}