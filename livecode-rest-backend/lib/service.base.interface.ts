import {buildRequest, IRequest} from './request';

class BaseInterface {
  protected req: IRequest;

  constructor(host: string) {
    this.req = buildRequest(host);
  }
}

export {
  BaseInterface
}