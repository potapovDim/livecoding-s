import {Page, Browser} from 'puppeteer';
import * as puppeteer from 'puppeteer';
import {pubsub, messagesList} from './pubsub';
import * as fs from 'fs';

const caps = {
  defaultViewport: {
    width: 1200,
    height: 800
  },
  headless: false
}

class BrowserAddapter {
  private currentPage: Page;
  private browser: Browser;

  constructor() {
    pubsub.subscribe(messagesList.entityInit, this.initPageToRemoteContext.bind(this))
  }

  initPageToRemoteContext(ctx) {
    ctx.initPage(this.currentPage)
  }

  async initCurrentPage() {
    this.browser = await puppeteer.launch(caps);
    this.currentPage = await this.browser.newPage();

    pubsub.publish(messagesList.currentPage, this.currentPage);
  }

  async goto(url: string) {
    if (!this.currentPage) {
      await this.initCurrentPage();
    }

    await this.currentPage.goto(url);
  }

  async close() {
    await this.browser.close();

    this.browser = null;
    this.currentPage = null;

    pubsub.publish(messagesList.closeBrowser, this.currentPage);
  }

  async takeScreenshot(pathTo) {
    await this.currentPage.screenshot({path: pathTo});
    const screenData = fs.readFileSync(pathTo);
    fs.unlinkSync(pathTo);
    return screenData;
  }

  async sleep(time = 1000) {
    await (() => new Promise(res => setTimeout(res, time)))();
  }
}

const browser = new BrowserAddapter();

export {
  browser
}