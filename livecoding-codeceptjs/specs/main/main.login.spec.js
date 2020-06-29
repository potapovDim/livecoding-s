const {I} = inject();

Feature('Login');

Scenario('User success login ', () => {
  const userData = {username: 'admin', password: 'admin'};

  I.amOnPage('http://localhost:4000/');
  I.login(userData);
  I.see(`Таблиці, Привіт ${userData.username}`);
});

Scenario('User failed login', () => {
  const userData = {username: 'admin'};

  I.amOnPage('http://localhost:4000/');
  I.login(userData);
  I.checkLoginErrorMessage();
})