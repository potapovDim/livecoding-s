import {seleniumWD} from 'promod';

import {MainPage} from '../pages/main/page'
const {browser} = seleniumWD;

describe('test', () => {
	it('test', async () => {
		await browser.get('http://localhost:4000/');
		await new MainPage().login('admin', 'admin')
		await browser.sleep(5000);
		await browser.wait(() => {return {}}, {timeout: 2500, interval: 2500, throwCustom: TypeError})
	})
})