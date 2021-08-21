import {LoginFragment} from './fragments/login.fragment';

class MainPage {
	private loginForm: LoginFragment;

	constructor() {
		this.loginForm = new LoginFragment();
	}

	async login(username, password) {
		await this.loginForm.username.sendKeys(username);
		await this.loginForm.password.sendKeys(password);
		await this.loginForm.signIn.click();
	}
}

export {MainPage}