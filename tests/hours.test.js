const feed = require('./feed')

module.exports = {
  'Preenchimento das horas': function(browser) {
    const login = browser.page.login()
    const dashboard = browser.page.dashboard()
    const profile = browser.page.profile()
    const modal = profile.section.timeModal
    const lastItem = modal.section.lastItem

    login
      .navigate()
      .login(feed.user, feed.password)

    dashboard
      .waitForElementVisible('@profile')

    profile
      .navigate()
      .waitForElementVisible('@menuPonto')
      .click('@menuPonto')
      .waitForElementVisible('@ajustarPonto')
      .click('@ajustarPonto');

    feed.items.forEach(function(item) {
      modal
        .waitForElementVisible('@addItem')
        .click('@addItem')

      lastItem
        .waitForElementVisible('@dateInput')
        .setValue('@dateInput', item.date)

      browser
        .keys(browser.Keys.TAB)
        .pause(2000)

      lastItem
        .waitForElementVisible('@timeInput')
        .setValue('@timeInput', item.time)
        .setValue('@justificationInput', item.justification)
        .pause(2000)
      
      browser
        .keys([
          browser.Keys.ARROW_DOWN,
          browser.Keys.RETURN
        ])
    })


    browser
      .pause(9999999)

  }
}
