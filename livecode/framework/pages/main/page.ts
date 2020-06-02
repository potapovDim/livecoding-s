import {BasePageInterface} from '../../../lib';
import {HeaderFragment} from './fragments';

interface IMainPageExpectedArg {
  header?: {login?: null, register?: null}
}

interface IMainPage {
  click(clickObj: IMainPageExpectedArg): void;
}

class MainPage extends BasePageInterface {
  private header: HeaderFragment;

  constructor() {
    super('#main_page', 'Main page');
    this.header = this.initChild(HeaderFragment, '.main_header', 'Main page header');
  }
}

export {
  MainPage,
  IMainPage
}