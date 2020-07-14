import {MainPage}   from './main.page';
import {TablePage} from './table.page';
import {initSingleton} from '../../lib'

const pagesProvider = {
  main: () => initSingleton(MainPage),
  table: () => initSingleton(TablePage)
}

export {
  pagesProvider
}
