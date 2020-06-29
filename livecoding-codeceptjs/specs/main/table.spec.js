const {I} = inject();

Feature('Table');

Scenario('Open machine details', () => {
  const userData = {username: 'admin', password: 'admin'};
  const manufacturer = 'ITALMIX DUPLEX';

  I.amOnPage('http://localhost:4000/');
  I.login(userData);
  I.see(`Таблиці, Привіт ${userData.username}`);
  I.openMachineDetails(manufacturer);
  I.checkModalMachineDetails(manufacturer);
});
