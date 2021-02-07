let browserDriver = null

function setBrowserDriver(driver) {
  browserDriver = driver
}

function getBrowserDriver() {
  return browserDriver
}

module.exports = {
  setBrowserDriver,
  getBrowserDriver
}