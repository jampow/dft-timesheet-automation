module.exports = {
  url: 'https://performancemanager4.successfactors.com/login?company=Dafiti#/login',
  elements: {
    inputUser: 'input[name="username"]',
    inputPass: 'input[name="password"]',
    submit: '#__button2'
  },
  commands: [{
    login: function(username, password) {
      return this
        .setValue('@inputUser', username)
        .setValue('@inputPass', password)
        .click('@submit')
    }
  }]
}
