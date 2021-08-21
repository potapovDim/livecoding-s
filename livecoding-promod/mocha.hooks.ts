import {seleniumWD} from 'promod';
let br = null
before(async function() {
	const {getSeleniumDriver, browser} = seleniumWD;

	await getSeleniumDriver({}, browser);

	br = browser;
});

after(async function() {
	await br.quit();
});