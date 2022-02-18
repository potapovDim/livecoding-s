import {expect, initStepDeclarator} from 'assertior'
import LoginPage from '../pageobjects/login.page';
import allure from '@wdio/allure-reporter'

allure.prototype.onTestPass = function() {
    const failedOrBrokenCase = this._allure.getCurrentTest().steps.find(item => item.status === 'broken' || item.status === 'failed');
    if (failedOrBrokenCase) {
        return this._allure.endCase(failedOrBrokenCase.status);
    }
    return this._allure.endCase('passed');
}

function allureStep(stepAssertionName: string, error, expected, current) {
    allure.startStep(stepAssertionName);
    if (error) {
      allure.addAttachment('Expected value', JSON.stringify(expected, null, 2), 'application/json');
      allure.addAttachment('Current value', JSON.stringify(current, null, 2), 'application/json');
      allure.addAttachment('Error', JSON.stringify(error, null, 2), 'application/json');
      allure.endStep('broken');
    } else {
        allure.endStep('passed');
    }
}

initStepDeclarator(allureStep);

describe('My Login application', () => {
    it('should login with valid credentials', async function ()  {
        await LoginPage.open();
        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        // expect.soft(1).toEqual(1);
        expect.soft(1).toEqual(2);
    });
});


