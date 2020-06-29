const faker = require('faker')

const {I} = inject();

Feature('Register');

Scenario('User failed registration', () => {
  const userData = {username: 'admin'};

  I.amOnPage('http://localhost:4000/');
  I.register(userData);
  I.checkRegisterErrorMessage();
})


Scenario('User success registration', () => {
  const userData = {
    username: faker.internet.userName(),
    name: faker.name.firstName(),
    email: faker.internet.email(),
    password: '123123123'
  };

  I.amOnPage('http://localhost:4000/');
  I.register(userData);
  I.see(`Таблиці, Привіт ${userData.username}`);
})