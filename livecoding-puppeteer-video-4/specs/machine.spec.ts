import {provider} from '../framework';

const {expect, browser} = provider.pages();
const {it} = provider.test();

describe('Machines page', function() {

  beforeEach(async () => {
    await browser.goto('http://localhost:4000/');
  })

  afterEach(async () => {
    await browser.close();
  })

  it("Add new machine", async function() {
    const mainPage = provider.main();
    const tablePage = provider.table();
    await mainPage.loginToSystem('admin', 'admin');
    const newMachine = {
      manufacturer: 'testvalue',
      volume: 'testvalue',
      length: 'testvalue',
      weigth: 'testvalue',
      width: 'testvalue',
      power: 'testvalue',
      price: 'testvalue'
    }
    await tablePage.addNewMachine(newMachine)
    const data = await tablePage.getMachinesList();
    const requiredAddedMachine = data.find(({manufacturer, volume}) => {
      return newMachine.manufacturer === manufacturer && newMachine.volume === volume
    });

    expect(newMachine).to.deep.equal(requiredAddedMachine);
  })
})
