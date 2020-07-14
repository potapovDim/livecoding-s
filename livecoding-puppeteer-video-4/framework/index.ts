import {expect} from 'chai';
import {pagesProvider} from './pages';
import {it, browser} from '../lib'

const provider = {
  // pages from pages folder
  ...pagesProvider,

  test: () => {
    return {it}
  },
  pages: () => {
    return {
      expect,
      browser
    }
  }
}

export {
  provider
}
