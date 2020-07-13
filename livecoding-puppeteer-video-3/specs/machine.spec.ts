import {expect} from 'chai';
import {browser} from '../lib/browser';
import {MainPage, TablePage} from '../framework/pages';

describe('Machines page', function() {

  beforeEach(async () => {
    await browser.goto('http://localhost:4000/');
  })

  afterEach(async () => {
    await browser.close();
  })

  it("Add new machine", async function() {
    const mainPage = new MainPage();
    const tablePage = new TablePage();
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
