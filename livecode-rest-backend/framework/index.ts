import {UserService, AdminService} from './services';

const serviceProvider = {
  user: new UserService(),
  admin: new AdminService(),
}

export * from './config';
export {
  serviceProvider
}
