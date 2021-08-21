import {PromodSeleniumElementType, seleniumWD} from 'promod';
const {$} = seleniumWD;

class LoginFragment {
	public username: PromodSeleniumElementType;
	public password: PromodSeleniumElementType;
	public signIn: PromodSeleniumElementType;

	constructor() {
		this.username = $('[placeholder="Ім\'я користувача"]');
		this.password = $('xpath=//*[@placeholder="пароль"]');
		this.signIn = $('.login_form button');
	}
}

export {LoginFragment}