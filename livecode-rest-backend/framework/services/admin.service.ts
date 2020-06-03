import {BaseInterface, decorateService} from '../../lib';
import {urls} from '../config'

class AdminService extends BaseInterface {
  constructor(host = urls.adminService) {
    super(host);
  }
}
decorateService(AdminService);

export {
  AdminService
}
