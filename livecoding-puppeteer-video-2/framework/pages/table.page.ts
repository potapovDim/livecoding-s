import {BasePage, step} from '../../lib';
import {Text} from '../../lib';

class TablePage extends BasePage {
  private headerTitle: Text;

  constructor() {
    super('#table_page', 'Stern machine table page')
    this.headerTitle = this.initChild(Text, '.header h3', 'Header title');
  }

  @step((name) => `${name} get header title`)
  async getHeaderTitle() {
    return this.headerTitle.get();
  }
}

export {
  TablePage
}