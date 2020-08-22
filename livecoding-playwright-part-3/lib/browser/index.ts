import {chromium, Page} from 'playwright';

class Browser {
  page;
  browser;

  constructor() {
    //
  }

  async init(): Promise<Page> {
    this.browser = await chromium.launch({headless: false});
    const context = await this.browser.newContext();
    this.page = await context.newPage();
    return this.page;
  }

  async get(url: string) {
    await this.page.goto(url);
  }

  async close() {
    await this.browser.close();
  }
}

export {
  Browser
}