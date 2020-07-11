import {pubsub, messagesList} from './pubsub';
import {step} from './reporter/index';

class BasePage {
  private selector: string;
  private name: string;
  private page: any;

  constructor(selector, name) {
    this.selector = selector;
    this.name = name;

    pubsub.subscribe(messagesList.currentPage, this.initPage.bind(this));
    pubsub.publish(messagesList.entityInit, this);
  }

  initPage(page) {
    this.page = page
  }

  get id() {
    return this.name;
  }


  @step((name) => `${name} init child`, true)
  initChild(childClass, childSelector, childName) {
    return new childClass({selector: childSelector, name: childName})
  }
}

export {
  BasePage
}
