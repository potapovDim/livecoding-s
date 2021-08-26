// @ts-check
function stepConsole(stepName, action, ..._args) {
  console.log(stepName)
  return action();
}

module.exports = {
  stepConsole,
}