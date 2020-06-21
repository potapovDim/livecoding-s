import {MainPage} from '../framework/pages'
import {_$, _$$} from '../lib/super.element.utils'

describe('webdriver.io page', () => {
  it('should have the right title', async () => {
    await browser.url('http://localhost:3000')



    await new MainPage().navigeteToLogin()
    await new MainPage().navigeteToLogin()

    // const modalInputs = _$('#main_page')._$('.login_form')._$('.modal')._$$('form').get(0)._$$('lol');

    // for (let i = 0; i < 10; i++) {
    //   await modalInputs.get(1).setValue('admin')
    // }

    await browser.pause(25000)
  })
})