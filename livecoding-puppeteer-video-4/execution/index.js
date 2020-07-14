const path = require('path');
const {getReruner, getFilesList} = require('process-rerun');

const specFilesList = getFilesList(path.resolve(process.cwd(), 'specs'))

const formCommand = (filePath) => {
  return `REPORTER=allure mocha ${filePath} --require ts-node/register --timeout 25000 -R mocha-allure2-reporter`
}

const commands = specFilesList.map(formCommand)


const execute = async () => {

  const runner = getReruner({
    longestProcessTime: 25 * 1000,
    maxSessionCount: 10,
    debugProcess: true,
    attemptsCount: 5,
    stackAnalize: () => true,
    pollTime: 50
  });

  const result = await runner(commands);
}

execute()