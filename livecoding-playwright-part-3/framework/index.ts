import {MainPage, TablesPage} from './pages'
import {makeSingleTon, Browser} from '../lib';



const pageProvider = (page) => {
  return {
    main: (): MainPage => makeSingleTon(MainPage, page),
    tables: (): TablesPage => makeSingleTon(TablesPage, page)
  }
}

const provider = {
  browser: new Browser(),
}


export {
  pageProvider,
  provider
}