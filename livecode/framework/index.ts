import {MainPage, IMainPage} from './pages';

const provider = {
  pages: {
    main(): IMainPage {
      return new MainPage();
    }
  }
}

export {
  provider
}
